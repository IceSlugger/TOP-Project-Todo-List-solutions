const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'), // This forces Webpack to use the 'docs' folder
    clean: true, // This automatically deletes old files in 'docs' before a new build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // You can add your image rule back here if you need it later
    ],
  },
};