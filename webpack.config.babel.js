import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import path from 'path'
import {sitePort, siteUrl} from './app/config'
import dirScan from 'directory-scan'
import randomInt from 'random-int'


let myModules = dirScan.get('./','dist')
let port = sitePort
let env = process.env.NODE_ENV
let sourceMap = 'source-map'
let buildFolder = 'dist/development'
let publicPath = siteUrl
let ran = randomInt(1000,9999)


if (env === 'production') {
	sourceMap = ''
	buildFolder = 'dist/production'
	publicPath = siteUrl
}

export default {
	stats:'minimal',
	devtool: sourceMap,
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, buildFolder),
		publicPath: publicPath
	},
	devServer: {
		contentBase: buildFolder,
		port: port,
		historyApiFallback: true,
		noInfo: true,
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/i,
				use: 'file-loader?name=/font/[name].[ext]'
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/i,
				use: 'file-loader?name=/image/[name].[ext]?'+ran
			},
			{
				test: /\.html$/,
				use: env=== 'production' ? 'html-loader?minimize' : 'html-loader'
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.(scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
						'postcss-loader?sourceMap&parser=postcss-scss'
					]
				})
			},
			// {
			// 	test: /\.(scss)$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
			// 		'postcss-loader?sourceMap&parser=postcss-scss'
			// 	]
			// },
			{
				test: /vendor\/.+\.(js|jsx)$/,
				use: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
			}
			
		]
	},
	resolve: {
		modules: [...myModules, 'node_modules']
	},
	plugins: [
		new webpack.EnvironmentPlugin(['NODE_ENV']),
		// if env==='devserver' dist/* folder will not be delete when built
		new CleanWebpackPlugin([buildFolder],{dry: env==='devserver',verbose: false}),
		new CopyWebpackPlugin([
			{from: 'app/image', to: 'image', flatten:true},
			{from: '.htaccess', to: '.htaccess', toType: 'file' }
		]),
		new ExtractTextPlugin({
			filename:'bundle.css',
			disable:false,
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			filename: 'index.html',
			inject: 'body',
			hash: true
		}),
		new OpenBrowserPlugin({ 
			url: 'http://localhost:'+port, 
			browser: 'google chrome'
		}),
		new ProgressBarPlugin({
			format: 'build... :percent'
		})
	]
}
