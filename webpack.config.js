const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader:只负责将css文件加载
        //style-loader:负责将样式添加到DOM中
        //使用多个loader时，是从右向左读的
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}