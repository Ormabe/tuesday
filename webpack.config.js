const path = require('path');
const webpack = require('webpack');

process.noDeprecation = true;

module.exports = {
    target: 'node',
    watch: true,
    cache: true,
    context: __dirname,
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname + '/frontend/public/'),
        publicPath: '/frontend/public/'
    },
    devServer: {
        contentBase: './frontend/views',
        stats: {
            colors: true,
            errorDetails: true
        },
        inline: true,
        port: 2017
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx' ],
        alias: {
            js: __dirname
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {
                test: [/\.scss$/],
                use: [
                    {
                        loader: "style-loader" 
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require('postcss-smart-import'),
                                require('autoprefixer')
                            ]
                          }
                    },
                    {
                        loader: "sass-loader" 
                    }
                ]
            },
            {
                test: [/\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf|ico)(\?.*$|$)/i],
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]'
                    }
                ]
            }

        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}