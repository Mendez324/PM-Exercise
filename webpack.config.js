const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "css") 
        },
    entry: {
        "main": "./scss/main.scss"
    },

    plugins: [
        new MiniCssExtractPlugin({
          // set the folder where the css files will go
          // the line below will cause ./css/basic.css
          filename: '[name].css',
          chunkFilename: '[id].css'
        }),
      ],
      module: {
        rules: [
            {
            test: /.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  /* eslint-disable global-require */
                  plugins: () => [require('autoprefixer')]
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          },
        ]
      }


}