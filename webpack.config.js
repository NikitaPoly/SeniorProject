const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")// 
/*
use <%= %> in html template to include properties form the config
example
<title><%= htmlWebpackPlugin.options.title %></title>
*/
module.exports = [
    {
        mode: "development",
        name: "earn",
        entry: {
            earn: path.resolve(__dirname, "DEVptDelivery/earn/index.ts")
        },
        output: {
            path: path.resolve(__dirname, "Public/ptDelivery/earn"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        devtool: "inline-source-map",
        devServer: {
            static: path.resolve(__dirname, "Public/ptDelivery/earn"),
            port: 8080,
            open: true,
            hot: true,
            watchFiles: ["DEVptDelivery/modules", "DEVptDelivery/earn", "DEvptDelivery/modules/template.html"]
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
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.svg$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
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
        mode: "development",
        name: "login",
        entry: {
            login: path.resolve(__dirname, "DEVptDelivery/login/index.ts")
        },
        output: {
            path: path.resolve(__dirname, "Public/ptDelivery/login"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        devtool: "inline-source-map",
        devServer: {
            static: path.resolve(__dirname, "Public/ptDelivery/login"),
            port: 8081,
            open: true,
            hot: true,
            watchFiles: ["DEVptDelivery/modules", "DEVptDelivery/login", "DEvptDelivery/modules/template.html"]
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
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.svg$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
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
        mode: "development",
        name: "order",
        entry: {
            order: path.resolve(__dirname, "DEVptDelivery/order/index.ts")
        },
        output: {
            path: path.resolve(__dirname, "Public/ptDelivery/order"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        devtool: "inline-source-map",
        devServer: {
            static: path.resolve(__dirname, "Public/ptDelivery/order"),
            port: 8082,
            open: true,
            hot: true,
            watchFiles: ["DEVptDelivery/modules", "DEVptDelivery/order", "DEvptDelivery/modules/template.html"]
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
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.svg$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
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
            path: path.resolve(__dirname, "Public/ptDelivery/settings"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        devtool: "inline-source-map",
        devServer: {
            static: path.resolve(__dirname, "Public/ptDelivery/settings"),
            port: 8083,
            open: true,
            hot: true,
            watchFiles: ["DEVptDelivery/modules", "DEVptDelivery/settings", "DEvptDelivery/modules/template.html"]
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
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.svg$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
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
];