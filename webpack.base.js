module.exports = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: [
						[
							"@babel/preset-env",
							{
								useBuiltIns: "usage",
								corejs: 3,
							},
						],
						["@babel/preset-react"],
					],
				},
			},
		],
	},
};
