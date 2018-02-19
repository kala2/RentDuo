var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
      './client/src/index.js',
      'webpack/hot/dev-server',
      ],
   output: {
      path:__dirname,
      filename: 'main.js',
      publicPath: "http://localhost:8081"
   },
   plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production' || 'test') // default value if not specified
          }
        })
     //new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
 ],

   module: {
    loaders: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ['es2016','react', 'stage-2']
          }
      }
     ]
   }
}

module.exports = config;
