/**
 * repository for npm npmjs.com
 * Create a new folder and create a app.js file
 * First enter in the folder by the terminal then
 * let's create the package.json file
 * npm init if you want to skip all the questions
 * just add a -y in the end
 * then you'll see that npm will create a package.json file
 * you can see that and check that everything you answered will be there
 * here all the dependancies will be record
 * if we run npm install whatever. npm will install and then
 * save this dependancie in the package.json file
 * then in future doploy it will install all dependancies automatically
 * let's install axios
 * npm i axios
 * check your package.json now as dependancie will have axios
 * also it will create a folder node_modules
 * this folder is created when we run npm install or npm i
 * so you can ignore uploading to github
 * with the file .gitignore and then inside the file just put
 * node_modules
 * 
 * now let's see how to use axios
 * create a const axios = require('axios');
 * note that when using packages we simply require('nameOfPakage')
 * now create a async function getPost()
 * create a res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
 * then as with axios the data is in the response we don't need to do data = await res.json()
 * we simply use res
 * console log res.data
 * then call getPost();
 * then run the app
 * 
 * if you do npm i -D nodemon that will automatically update changes done in your files
 * 
 * now in the package.json look for scripts
 * let's change test to start and the acho part change to node app.js
 * or whatever name your app is
 * now you can run 
 * npm start 
 * and your app will start
 * if you want to have more then one scripts you can separate it by comma
 * like 
 * "start": "node app.js",
 * "dev": "nodemon app.js"
 * then to run dev we need to do
 * npm run dev
 * 
 */

