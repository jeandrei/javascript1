# webpack dev server setup

- webpack dev server is a pack that enables us to develop widhout have to rebuild everytime.
- in the root folder npm i -D webpack-dev-server
- now at our package.json in the script we're gonna have another script.
- behind the build separate it with comma.
- "dev": "webpack serve"
- now at the webpack.config.js right above module object create another object
- devServer: {
  static: {
  directory: path.resolve(\_\_dirname, 'dist')
  },
  port: 3000,
  open: true, --will open the browse right away
  hot: true,
  compress: true,
  historyApiFallback: true
  },
- If liveserver is running, stop it.
- now at the root folder
- npm run dev
- any changes at the src filder like index.js must be autoreloaded when save.
- If change the html just refresh the page
