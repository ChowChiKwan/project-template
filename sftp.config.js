/**
 * Created by niefz on 2018/9/18.
 */
const { resolve } = require('path');
const webpackMerge = require('webpack-merge');
const WebpackSftpClient = require('webpack-sftp-client');
const config = require('./webpack.config.dist.js');

const BUILD_PATH = resolve(__dirname, 'dist');

module.exports = webpackMerge(config, {
  plugins: [
    new WebpackSftpClient({
      host: '',
      remotePath: '',
      password: '',
      username: '',
      path: BUILD_PATH,
      verbose: true
    })
  ]
});
