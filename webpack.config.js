const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const path = require('path');

const paths = {
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'dist'),
	public: path.resolve(__dirname, 'public'),
};

module.exports = {
	context: paths.src,

	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},

	entry: {
		app: './index',
	},

	output: {
		path: paths.dist,
		filename: '[name].bundle.js',
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@api': path.resolve(__dirname, 'src/api'),
			'@types': path.resolve(__dirname, 'src/types'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@constants': path.resolve(__dirname, 'src/constants'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@interfaces': path.resolve(__dirname, 'src/interfaces'),
			'@theme': path.resolve(__dirname, 'src/theme'),
		},
	},

	devtool: 'inline-source-map',

	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new Dotenv(),
		new HtmlWebpackPlugin(
			Object.assign(
				{},
				{
					template: path.resolve(paths.public, 'index.html'),
				},
				process.env.NODE_ENV === 'production'
					? {
							minify: {
								removeComments: true,
								collapseWhitespace: true,
								removeRedundantAttributes: true,
								useShortDoctype: true,
								removeEmptyAttributes: true,
								removeStyleLinkTypeAttributes: true,
								keepClosingSlash: true,
								minifyJS: true,
								minifyCSS: true,
								minifyURLs: true,
							},
					  }
					: undefined
			)
		),
	],
};
