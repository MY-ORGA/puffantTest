var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'main.min.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				},
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}