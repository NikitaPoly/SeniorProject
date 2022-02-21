const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")// 
/*
use <%= %> in html template to include properties form the config
example
<title><%= htmlWebpackPlugin.options.title %></title>
*/
module.exports = [
    {
        mode: "development",// or productions
        name: "earn",
        entry: {//files that we start with AKA source
            earn: path.resolve(__dirname, "DEVptDelivery/earn/index.js")//entry point (in this case js file)
        },
        output: {//where are we gonna put things
            path: path.resolve(__dirname, "Public/ptDelivery/earn"),//deoploy folder aka final folder
            filename: "[name].js",// output file name
            assetModuleFilename: "[name][ext]",//make all images imported original name
            clean: true//delete all files first then bundle
        },
        devtool: "inline-source-map",// keeps track of where the content came from
        devServer: {//setting for actual server
            contentBase: path.resolve(__dirname, "DEVptDelivery"),//location for files
            port: 8080,//default8080
            open: true,//launch browser when lanuching server
            hot: true,//hot module reaload
            watchContentBase: true,//checks if production folder changed
        },
        //loaders
        module: {
            rules: [
                { test: /\.css$/, use: ["style-loader", "css-loader"] },//order matters.//convert css to module, then inject into html
                { test: /\.(svg)$/, type: "asset/resource" }//built in image loader
            ]
        },
        //plugins
        plugins: [
            new HtmlWebpackPlugin({//for html modulation
                title: "PT - Delivery",//html page title
                filename: "[name].html",// html file title
                template: path.resolve(__dirname, "DEVptDelivery/modules/template.html")//template for html
            })
        ]
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
            port: 8080,
            open: true,
            hot: true,
            watchFiles: ["DEVptDelivery/modules", "DEVptDelivery/login"]
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
                    options:{
                        name:"[name].[ext]"
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
            order: path.resolve(__dirname, "DEVptDelivery/order/index.js"),
        },
        output: {
            path: path.resolve(__dirname, "Public/ptDelivery/order"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        devtool: "inline-source-map",
        devServer: {
            contentBase: path.resolve(__dirname, "DEVptDelivery"),
            port: 8080,
            open: true,
            hot: true,
            watchContentBase: true,
        },
        module: {
            rules: [
                { test: /\.css$/, use: ["style-loader", "css-loader"] },
                { test: /\.(svg)$/, type: "asset/resource" }
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
            settings: path.resolve(__dirname, "DEVptDelivery/settings/index.js")
        },
        output: {
            path: path.resolve(__dirname, "Public/ptDelivery/settings"),
            filename: "[name].js",
            assetModuleFilename: "[name][ext]",
            clean: true
        },
        devtool: "inline-source-map",
        devServer: {
            contentBase: path.resolve(__dirname, "DEVptDelivery"),
            port: 8080,
            open: true,
            hot: true,
            watchContentBase: true,
        },
        module: {
            rules: [
                { test: /\.css$/, use: ["style-loader", "css-loader"] },
                { test: /\.(svg)$/, type: "asset/resource" }
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