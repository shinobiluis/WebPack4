const path = require('path'); //importamos path de node

module.exports = {
    // especificamos la entrada tambien se puede usar:
    // ['./src/index.js', './src/index2.js']
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path:path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }

            }
        ]
    }
}