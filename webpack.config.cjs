module.exports = {
  // ... your other config settings (entry, output, etc)
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};