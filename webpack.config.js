const path = require('path'); //importamos path de node

module.exports = {
    // especificamos la entrada tambien se puede usar:
    // ['./src/index.js', './src/index2.js']
    entry: {
        index: './src/js/index.js',
        nosotros: './src/js/nosotros.js'
    },
    output: {
        filename: '[name].bundle.js',
        path:path.join(__dirname, '/dist')
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
    }
}