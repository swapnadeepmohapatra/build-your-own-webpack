const fs = require("fs");
const path = require("path");
const babylon = require("babylon");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");

let ID = 0;

function readConfig(fileName) {
  const content = fs.readFileSync(fileName, "utf-8");

  const ast = babylon.parse(content, {
    sourceType: "module",
  });

  const config = {};

  traverse(ast, {
    Property: ({ node }) => {
      if (node.value.type === "StringLiteral") {
        config[node.key.name] = node.value.value;
      }
    },
  });

  return {
    entryFile: config.entry,
    outputFile: `build/${config.filename}`,
  };
}

function createAsset(fileName) {
  const content = fs.readFileSync(fileName, "utf-8");

  const ast = babylon.parse(content, {
    sourceType: "module",
  });

  const dependencies = [];

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value);
    },
  });

  const id = ID++;

  const { code } = transformFromAst(ast, null, {
    presets: ["env"],
  });

  return {
    fileName,
    dependencies,
    id,
    code,
  };
}

function createGraph(entryFile) {
  const mainAsset = createAsset(entryFile);

  const queue = [mainAsset];

  for (const asset of queue) {
    const dirname = path.dirname(asset.fileName);

    asset.mapping = {};

    asset.dependencies.forEach((relativePath) => {
      const absolutePath = path.join(dirname, relativePath);

      const childAsset = createAsset(absolutePath);

      asset.mapping[relativePath] = childAsset.id;

      queue.push(childAsset);
    });
  }

  return queue;
}

function bundle(graph) {
  let modules = "";

  graph.forEach((asset) => {
    modules += `${asset.id} : [
		  function(require, module, exports) {
			  ${asset.code}
		  },
		  ${JSON.stringify(asset.mapping)}
	  ],
	  `;
  });

  const result = `
  	(function(modules) {
  	  function require(id) {
  		  const [fn, mapping] = modules[id];

  		  function localRequire(relativePath) {
  			  return require(mapping[relativePath]);
  		  }

  		  const module = { exports: {} };

  		  fn(localRequire, module, module.exports);

  		  return module.exports;
  	  }

  	  require(0);
  	})({${modules}})
  	`;

  return result;
}

function writeOutput(fileName, code) {
  fs.writeFileSync(fileName, code, function (err) {
    if (err) throw err;
  });
}

const { entryFile, outputFile } = readConfig("./webpack.config.js");
const graph = createGraph(entryFile);
const result = bundle(graph);
writeOutput(outputFile, result);
