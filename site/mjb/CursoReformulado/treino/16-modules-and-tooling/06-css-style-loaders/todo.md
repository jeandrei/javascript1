# webpack css and style loader

- Now we are gonna make so we can import our css files into our javascript
- we need to install two things, the css loader and the style loader
- at our root app in the terminal do the run npm i -D style-loader css-loader
- the -D flag is to set as a develop dependencies
- after we install aloader we need to configure it. it is done at the webpack.config.js
- to do so right after the output object we will create a module object and inside it we'll have an array rules where the loaders go and each loader will have an object in this case the style loader and the css loader
- inside of rules there are two properties we need to set, one is test that is basically a regular expression where we want this loader to apply in this case for any file that ends with .css the $ indicates that it must end with .css
- then we create a array use with
  modules: {
  rules: [
  {
  test: /\.css$/,
  use: ['style-loader', 'css.loader']
  }
  ]
  }
- now in the src folder create a folder called css
- inside create a style.css file
- put the css body { background: purple; color: white; }
- now in our src/index.js let's import the css
- import './css/style.css';
- now rebuild the app
- at the app's root folder run npm run build
- now the dist/index.html should apply the css
