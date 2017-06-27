'use strict'

let webpack = require('webpack')
let	path = require('path')
let dir = require('directory-scan')
let myModules = dir.get('./','dist')

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['mocha'],
		files: [
			'./spec/*.spec.js'
		],
		preprocessors: {
			'./spec/*.spec.js': ['webpack']
		},
		webpack: {
			module: {
				rules: [
					{
						test: /\.(js|jsx)$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['es2015', 'react']
							}
						}
					},
					{
						test: /\.(css|scss)$/,
						use: 'null-loader'
					},
					{
						test: /\.(woff|woff2|eot|ttf)$/i,
						use: 'null-loader'
					},
					{
						test: /\.(jpe?g|gif|png|svg)$/i,
						use: 'null-loader'
					},
					{
						test: /vendor\/.+\.(jsx|js)$/,
						use: 'imports?jQuery=jquery,$=jquery,this=>window'
					}
				]
			},
			resolve: {
				modules: ['node_modules'].concat(myModules),
			},
			externals: {
				'jsdom': 'window',
				'cheerio': 'window',
				'react/addons': true,
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true
			},
			// node: {
			// 	fs: 'empty' // this fixes 'can not resolve module fs'
			// }
		},
		webpackMiddleware: {
			noInfo: true
		},
		plugins: [
			'karma-webpack',
			'karma-jasmine',
			'karma-mocha',
			'karma-phantomjs-launcher',
			// 'karma-chrome-launcher',
			'karma-verbose-reporter',
		],
		reporters: ['verbose','progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_ERROR,
		autoWatch: true,
		browsers: ['PhantomJS']
		// singleRun: false
	})
}
