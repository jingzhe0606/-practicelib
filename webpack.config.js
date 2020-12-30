//这是存放一些复杂的配置，包括loader/plugin/resolve等
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  entry: "./src/index.js",// 打包入口
  output: {// 打包出口
    filename: "[name].[contenthash].js", // 打包后的文件名
    path: path.resolve(__dirname, 'dist') //路径
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vender: {
          test: /[\\/]mode_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
      // chunks: 'all'
    },
    runtimeChunk: 'single',
    usedExports:true
  },
  module: {
    rules:[
      {
        test: /\.(css|scss)$/,
        use: ['style-loader','css-loader']
      },{
        test: /\.(png|jpeg|jpg|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: '/node_modules/'
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets:false
    }),
    new HtmlWebpackPlugin({
      title: '输出管理'
    }),
    new VueLoaderPlugin()
  ]
}