const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const KotlinWebpackPlugin = require('@jetbrains/kotlin-webpack-plugin');

const devMode = (process.env.NODE_ENV !== 'production');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        kotlin: [ path.resolve(__dirname,"kotlin_build/kotlinApp.js") ],
        main: [
            path.resolve(__dirname,"src/main/webapp/assets/js/main.js"),
            // path.resolve(__dirname,"kotlin_build/kotlinApp.js")
        ],
    },
    output: {
        publicPath: '',
        path: __dirname + '/dist',
        filename: "[name].js",
        chunkFilename: '[id].[chunkhash].js',
        pathinfo: true
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    },
    watch: false,
    // any "source-map"-like devtool is possible
    // More: https://webpack.js.org/configuration/devtool/
    devtool: "inline-source-map",
    
    // resolve: {
    //    alias: {
    //        app: path.resolve(__dirname, 'src/main/webapp/assets/js/'),
    //    }
    // },
    resolve: {
        //modules: ['kotlin_build', 'node_modules']
        modules: ['node_modules'],
        alias: {
            kotlin_build: path.resolve(__dirname, 'kotlin_build'),
        }
    },

    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: 'eslint-loader'
            // },
            {

                test: /\.js$/,
                include: path.resolve(__dirname, 'src/main/webapp/assets'),
                exclude: [
                    path.resolve(__dirname, '/node_modules/'),
                ],
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory=true',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    {
                        loader: "source-map-loader"
                    }
                    ],
                // enforce: 'pre'
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'kotlin_build'),
                exclude: [
                    path.resolve(__dirname, '/node_modules/'),
                    /kotlin\.js$/ // Kotlin runtime doesn't have sourcemaps at the moment
                ],
                use: [
                    {
                        loader: "source-map-loader"
                    }
                ],
                enforce: 'pre'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: false}
                    }
                ]
            },
            {
                test: /\.(png|jpe?g)/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "./img/[name].[ext]",
                            limit: 10000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // creates style nodes from JS strings
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        // compiles Sass to CSS, using Node Sass by default
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/main/webapp/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'assets/styles/[name].css' : 'assets/styles/[name].[hash]fn.css',
            chunkFilename: devMode ? 'assets/styles/[id].css' : 'assets/styles/[id].[hash]cu.css',
        }),
        new HtmlBeautifyPlugin({
            config: {
                html: {
                    end_with_newline: true,
                    indent_size: 2,
                    indent_with_tabs: true,
                    indent_inner_html: true,
                    preserve_newlines: true,
                    unformatted: ['p', 'i', 'b', 'span']
                }
            },
            replace: [' type="text/javascript"']
        }),
        new KotlinWebpackPlugin({
            src: path.resolve(__dirname, 'src/main/kotlin'),
            verbose: true
        }),

    ]
};