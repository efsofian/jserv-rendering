const path = require("path");
const { merge } = require("webpack-merge");
const WebpackNodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.js");

const config = {
	mode: "development",
	target: "node",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
	},
	externals: [WebpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
