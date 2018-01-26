const path = require('path');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var localConfig = {
  entry: './dev/index.jsx',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      },
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/, 
        query: { 
          cacheDirectory: true, 
          presets: ['react', 'es2015']
        } 
      }
    ]
  }  
};


var serverConfig = {
  entry: './dev/index.jsx',
  output: {
    filename: './bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      },
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/, 
        query: { 
          cacheDirectory: true, 
          presets: ['react', 'es2015']
        } 
      }
    ]
  }/* ,
  plugins: [
    new UglifyJSPlugin()
  ] */
};

module.exports = [localConfig, serverConfig];