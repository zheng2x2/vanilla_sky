module.exports = {
    mode : 'development',
    entry : './index.js',
    output : {
        filename : 'common.js',
        publicPath : './dist'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [ 'style-loader', 'css-loader']
            }
        ]
    }
}
