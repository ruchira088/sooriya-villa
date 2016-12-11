const path = require("path")

module.exports = {
	entry: path.join(__dirname, "front-end", "Entry.jsx"),
	output: {
		path: path.join(__dirname, "public", "build"),
		publicPath: "/build/",
		filename: "bundle.js"
	},
	devtool: "source-map",
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", ".scss"],
		root: [
			path.join(__dirname),
			path.join(__dirname, "front-end")
		],
		alias: {
			home: "front-end",
			styles: "styles",
			assets: "assets",
			components: "components",
			reducers: "reducers"
		}
	},
	module: {
		loaders: [
			{
				test: /(.js|.jsx)$/,
				loader: "babel"
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /(.jpe?g|.svg|.png|.gif)$/,
				loader: "file?name=[path][name].[ext]"
			}
		]
	}
}