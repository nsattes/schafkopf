module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/main/js/index.js',
    ]
    ,

    module: {
        loaders: [{
            // Bedingung, wann der Loader verwendet werden sollte:
            // Alle Dateien mit Endung .js oder jsx (siehe Reg Expr)
            test: /\.jsx?$/,
            // Ausnahmen für den Loader:
            exclude: /node_modules/,
            // Mehrere Loader getrennt durch '!'
            loader: 'react-hot-loader!babel-loader'
        }]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./dist",
        hot: true
    }
}