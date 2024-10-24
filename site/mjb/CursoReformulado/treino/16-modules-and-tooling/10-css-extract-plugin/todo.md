# webpack css minify extra plugin

- if we let this configuration like this, there can be an issue where when you reload the page might have a quick flash of uninstyled content
- To fix it to not happen we can use the minicssextractplugin
- if running, stop live server
- basecaly wi install it and replace the style loader in the rules of the webpack.config.js
- npm install --save-dev mini-css-extract-plugin
- now at our webpack.config.js in the requires
- const MiniCssExtractPlugin = require('mini-css-extract-plugin');
- now below HtmlWebpackPlugin at module.exports{
  plugins: [
  new HtmlWebpackPlugin({
  ....
  }),
  new MiniCssExtractPlugin()

  ],

  - above in module/use update to MiniCssExtractPlugin
    module: {
    rules: [
    {
    use: [MiniCssExtractPlugin.loader, "css-loader"]
    }
    ]
    }
    }

- run npm run build
- now it must extract the css and create a dist/main.css file
