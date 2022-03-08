const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")//for html proccessing
module.exports = [
    {
        mode: "production",
        name: "earn",
        entry: {
            earn: path.resolve(__dirname, "DEVptDelivery/earn/index.ts")
        },
        output: {
            path: path.resolve(__dirname, "Public/production/ptDelivery/earn"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        module: {
            rules: [
                { test: /\.css$/, use: ["style-loader", "css-modules-typescript-loader", "css-loader"] },
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        // adding a hash to the file
                        filename: 'images/static/[name].[hash][ext]',
                    },
                },
                {
                    test: /\.svg$/,
                    use: [{ loader: "file-loader", options: { name: "[name].[ext]" } },]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Earn",
                filename: "[name].html",
                template: path.resolve(__dirname, "DEVptDelivery/modules/template.html")
            })
        ],
        resolve: {
            extensions: ['.ts', '.js', '.json']
        }
    },
    {
        mode: "production",
        name: "login",
        entry: {
            login: path.resolve(__dirname, "DEVptDelivery/login/index.ts")
        },
        output: {
            path: path.resolve(__dirname, "Public/production/ptDelivery/login"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        module: {
            rules: [
                { test: /\.css$/, use: ["style-loader", "css-modules-typescript-loader", "css-loader"] },
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        // adding a hash to the file
                        filename: 'images/static/[name].[hash][ext]',
                    },
                },
                {
                    test: /\.(svg)$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Login",
                filename: "[name].html",
                template: path.resolve(__dirname, "DEVptDelivery/modules/template.html")
            })
        ]
    },
    {
        mode: "production",
        name: "order",
        entry: {
            order: path.resolve(__dirname, "DEVptDelivery/order/index.ts")
        },
        output: {
            path: path.resolve(__dirname, "Public/production/ptDelivery/order"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        module: {
            rules: [
                { test: /\.css$/, use: ["style-loader", "css-modules-typescript-loader", "css-loader"] },
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        // adding a hash to the file
                        filename: 'images/static/[name].[hash][ext]',
                    },
                },
                {
                    test: /\.svg$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Order",
                filename: "[name].html",
                template: path.resolve(__dirname, "DEVptDelivery/modules/template.html")
            })
        ]
    },
    {
        mode: "development",
        name: "settings",
        entry: {
            settings: path.resolve(__dirname, "DEVptDelivery/settings/index.ts")
        },
        output: {
            path: path.resolve(__dirname, "Public/production/ptDelivery/settings"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        module: {
            rules: [
                { test: /\.css$/, use: ["style-loader", "css-modules-typescript-loader", "css-loader"] },
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        // adding a hash to the file
                        filename: 'images/static/[name].[hash][ext]',
                    },
                },
                {
                    test: /\.svg$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Settings",
                filename: "[name].html",
                template: path.resolve(__dirname, "DEVptDelivery/modules/template.html")
            })
        ]
    }
]