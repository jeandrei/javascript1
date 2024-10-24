# webpack babel setup

- it make your code compatible with older web browsers
- like if you use arrow function that was implemented in 2015 and you try to run in older browsers it will not run.
- as an example in the src/index.js, create a const hello = () => console.log('Hello');
- now look at the boundle.js it shuld be update because of the server setup in the previous step.
- Look that the arrow function was created as an arrow function syntax
- But if we install babel it will be converted to a regular function so that it will work at older browsers.
- Stop the server and let's install babel.
- npm i babel-loader @babel/core @babel/preset-env -D
- Check at package.json we must have this three things.
- now in order to make it work we need to set it at webpack.config.js
- in module object in the rules array, open a new object.
  {
  test: /\.js$/, --will load every .js file
  exclude: /node_modules/, -- won't look for js files in the node_modules folder
  use: {
  loader: 'babel-loader',
  options: {
  presets: ['@babel/preset-env]
  }
  }
  }
- save and run
- npm run build
- now look at the dist/bundle and search for hello you'll see that it convert the arrow function to a regular function.
- babel is not necessary in most cases, but if you need to run your app in older browsers it is a way to do it.
- note that if you delete your dist folder and run npm run build it will be recreated
