const path = require('path'); //importamos path de node
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // especificamos la entrada tambien se puede usar:
    // ['./src/index.js', './src/index2.js']
    entry: {
        index: './src/js/index.js',
        // nosotros: './src/js/nosotros.js'
    },
    output: {
        filename: '[name].bundle.js',
        path:path.join(__dirname, '/dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                // Agregamos soporte a JS
                test: /\.js$/, 
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }

            },
            {
                // Agregamos soporte a CSS
                test: /\.css$/,
                use:[
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                // Agregamos soporte a SASS
                test: /\.scss$/,
                use:[
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups:{
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'nosotros.html',
            template: 'src/nosotros.html'
        })
    ]
}