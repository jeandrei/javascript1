# webpack html webpack plugin

- generate the index.html in the dist folder
- at the root of the app let's install it first.
- npm i -D html-webpack-plugin
- As any loader we need to configure it in the webpack.config.js
- we need to require it at the top. so right below the require path create a const HtmlWebpackPlugin = require('html-webpack-plugin')
- now after the modules array let's create another object
  -plugins: [
  new HtmlWebpackPlugin({
  title: 'Webpack App',
  filename: 'index.html',
  })
  ]
  -now to test delete the folder dist and now let's rebuild the app
- npm run build
- it must recreate the dist folder with our index.html on it, even with the script src bundle.js set.
- It must work with liveserver
- now every time you rebuild the index will be recreate and the work done on that will be lost.
- To avoid it we must create a template for the index.html.
  To do so, first go to the webpack.config.js file and right below the filename: 'index.html' in the plugins set template: './src/index.html',
- now in the src folder create the index.html, all we set here shuld stay in the rebuild.
- in the index.html at the title lets use the <%= htmlWebpackPlugin.options.title %> it will come from the webpack.config.js/plugins/HtmlWebpackPlugin/title that is the case Webpack App
- to the same in the body h1
- npm run build again to see if it worked
