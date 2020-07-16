const path = require('path');

module.exports = {
	entry: ['idempotent-babel-polyfill', path.resolve(__dirname, './assets/js/main.js')],
	mode: 'development',
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: [
					'@babel/preset-env',
						{
							plugins: [
							'@babel/plugin-proposal-class-properties'
							]
						}
					]
				},
			},
			{
				test: /\.svg$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							svgo: false,
							prettier: false,
						}
					}
				]
			},
		],
	},
};