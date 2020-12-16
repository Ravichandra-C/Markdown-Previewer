var path= require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
module.exports={

    mode:"development",
    entry:"./src/js/main.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },
    module:{
        rules:[{
            test:/\.scss$/,
            use:["style-loader","css-loader","sass-loader"]
        },
        {
            test:/\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
        }
    ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer:{
        open:true
    }
}