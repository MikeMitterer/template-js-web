const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

const devMode = (process.env.NODE_ENV !== 'production');

module.exports = {
    mode:  process.env.NODE_ENV,
    entry: [
        "./src/main/webapp/assets/js/main.js",
    ],
    output: {
        publicPath: '',
        filename: "./assets/js/bundle.js"
    },
    watch: false,
    devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
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
            replace: [ ' type="text/javascript"' ]
        })
    ]
};