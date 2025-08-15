FRONT END

First create our static folder with express
In the root Create a folder public
Now in the server.js let's create a middleware so that the public folder will be static 
and we can put html, css files in that folder
on the top server.js let's create a const path require('path')
then below the const app let's bring the middleware
app.use(express.static(path.join(__dirname, 'public')));
then in the public folder just create a index.html file
Create the html structure
Save it
Run the server and check for localhost 5000 it shuld load the index.html
Now delete the index.html
And create in the root create a folder client
Copy the contntent of webpack-starter we made befor in the client folder
now open another console and go to the client folder
run npm i
to install all dependencies
no let's change the directory folder dist from webpack.config.js in output and devServer
change to ../public
now build the files
npm run build
Now delete client/src/message.js we don't need that
Now go to client/src/index.js remove the import message also the console.log
Now get the files from randomIdeas-theme index and css and replace on src/index.js and css/style.css
In index.htm remove the link to style.css because we are importing it in the index.js
Also remove the fontawesome from index.html
Now in the client the npm where we run the webpack
Install fontawesome
npm i @fortawesome/fontawesome-free
Check if it is installed in client/package.json
Now in the client/src/index.js let's import it
Befor the style.css import 
import '@fortawesome/fontawesome-free/css/all.css'
You should see the plus button in the top left