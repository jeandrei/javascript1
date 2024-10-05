# webpack

- Create a folder webpack-starter
- Open with vscode
- Create a folder src where we will have all of our source code
- now create a dist folder and for now create a index.html inside of it
- now just create a boilerplate in the index.html, that is to say a base html code and in the tittle put Webpack Starter
- in the body create a h1 with Webpack Starter
- in the header link a main.js file use defer to force the reading befor load
- async faz o download do script junto com a página
- defer carrega o html e o script junto e executa somente ao final do carregamento
- now use liveserver to see the result, in the console we will get an error because the main.js doesn't exist yet.
- In the scr folder create a index.js, this will be our entry point for our application.
- Now let's install webpack. Open the console, set the directory to the src folder and install webpack
- npm install -D webpack webpack-cli
- note that the production files are in the dist folder.
- now you'll see that it created a file package.json and inside it in devDependencies we have this two dependencies we just created.
- Now lets create a simpy script. In the package.json in the scripts section change the script to.
- "build":"webpack --mode production"
- this way wen do the command webpack run build it will create our app as a production mode in the dist folder.
- Before build the app let's create a sample of a model. In the src folder create a module message.js.
- Inside create an object const message with id: 1 and text: 'Hello World'
- Then export default message
- Now in the src index.js let's inport it. import message from './message'.
- Now just console log message.
- Now let's build our app.
- npm run build
- Now in the root folder, let's create our webpack.config.js file.
- This file is an object that we are gonna export, it uses comon js sintax.
- In the webpack.config.js
  module.exports = {
  mode: 'development', as we are setting here to development in the package.json in the script build remove the production mode, let just webpack.
  entry is the file from what we are gonna build the dist, by default it uses the src/index.js file but we can change it.
  entry: './src/index.js',
  output will generate by default dist/main.js but we can change id.
  output must be an object and we are gonna need the path module to make things easier. to do so before the module.exports create a const path = require('path');
  **dirname referes to the current directory
  output: {
  path: path.resolve(**dirname, 'dist'), dist is the dist folder, this way the output is gonna be at the dist folder
  filename: 'bundle.js' the file we want to be the output, by default it is main.js
  }
  }
- Now save and delete the dist/main.js
- in the dist index.html change the script main.js to bundle.js
- Now run npm run build again, it must create the dist/bundle.js
- if make any change you'll need to run npm run build again.
- now in the root folder create a file .gitignore and inside put node_modules and dist so that when we upload to github this folders won't be uploaded.
