const path = require("path")

module.exports = {
	entry: path.join(__dirname, "front-end", "Entry.jsx"),
	output: {
		path: path.join(__dirname, "public", "build"),
		publicPath: "/build/",
		filename: "bundle.js"
	},
	devtool: "source-map",
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