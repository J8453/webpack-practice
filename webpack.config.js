const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
		// print: './src/print.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		// this tells to server where to serve the content from
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.(m?js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }],
							'@babel/preset-react'
						]
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		]
	},
	plugins: [
		// new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			// title: 'Development',
			template: './src/index.html',
		}),
		new ESLintPlugin(),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};