//246

//start the app npm run dev
//create const express

//create const app express

//create const port

//bring the const ideas with json format

//at the end and keep it always in the end create the app listen then show in the console App running on port 5000

//create a rout / with the result of success: true, message: 'This is the root page'

//create a rout /api/ideas that shows success: true and data with all the ideas

//create a rout /api/ideas/:id that will filter an idea and show success: true, data: idea

//as bonus in the rout /api/ideas:id if the idea:id not found return status(404) success: false, message: 'Resource not found' else return success: true, data: idea

//247


/*
install nodemon npm i -D nodemon
in the package.json create a new script dev to run the command nodemon server.js 
create a folder routes
inside the folder create a fule called ideas.js
in the ideas.js
create a const express with require express
create a const router and set to express.Router()
now bring from the ideas.txt the const ideas object
at the end of the file export the module
module.exports = router;
now cut all the routes from the server.js and bring to the ideas.js let just the welcome message rout
and so instead using app.get change it to router
update the routes you don't need /api/ideas set it to just / and /:id
now jump to the server.js and right behind the app.get('/')
create a const ideasRouter ad set it to require('./routes/ideas)
now set the middleware 
app.use('/api/ideas', ideasRouter);

add an idea
first in the server we need to add parser middleware that will help us to access the data from the req.body
app.use(express.json()) and app.use(express.urlencoded({extended: false}));
create a const idea as a json object with
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10)
then push the idea to the ideas array
and finally res.json success true and data the idea
create a router.post
create the router.put
create the router.delete


mongo altas: https://cloud.mongodb.com/
mongose: https://mongoosejs.com/

install dotenv that allow us to access values inside .env files
npm i dotenv
install mongoose
npm i mongoose
in the root folder create a file .env
in the .env file create the const PORT=8000 and MONGO_URI='mongodb+srv://root:rootadm@cluster0.8ihqigm.mongodb.net/ramdomideas?retryWrites=true&w=majority&appName=Cluster0' do not put ; at the end
then in server js in order to use the .env we need to require it
require('dotenv').config();
now the port instead of setting manualy we can get from the .env by calling process.env.PORT || 5000; or if it the file is not found connect through port 5000
run the server check if the app is running on port 8000 if so change the file .env port to 5000
create a folder called config
inside create a file called db.js
inside db.js create a const mongoose and require mongoose
create a const connectDB async and inside create another const conn await mongoose.connect(process.env.MONGO_URI) and console log console.log(MongoDB Connected: ${conn.connection.host});
Then in the end set mongoose.set('strictQuery', true);
and finely module exports connectDB
Now in server.js let's bring our connection
create a const connectDB = require('./config/db');
then connectDB();
Now let's create our schema
In the root of the app create another folder called models
Inside create a file Idea.js with capital I always create with capital first and singular
Now require mongoose
now create a schema
const mongoose = require('mongoose');


const IdeaSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text field']
    },
    tag: {
        type: String,        
    },
    username: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Idea', IdeaSchema);

pela loja de aplicativos instale o mongodb compass
from mongodb atlas in connection look for compass, copy the url paste in the compass and replace password
now in the routes/ideas lets bring the model we created, don't forget to use capitla first letter
const Idea = require('../models/Idea');
now in the router.get
turn it into async
add a try catch
create a const ideas = await Idea.find(); then responds with
res.json({success: true, data: ideas});
else response with
console.log(error);
res.status(500).json({success: false, error: 'Something went wrong'});
test in postman the http://localhost:5000/api/ideas to check if we get the response with no data
now let's create a post
in the router.post
turn the const idea into a const idea = new Idea ({}) remove the id because we won't need it
also remove the date because in the model we set it.
we just need the text, tag and username
then create a try catch
turn the router.post into async
in the try 
const savedIdea = await idea.save();
and
res.json({success: true, data: savedIdea});
if erro
res.status(500).json({success: false, error: 'Something went wrong'});
now let's update the get single idea
Turn the get into a async
Clean the code inside
create a try catch
in the try
const idea = await Idea.findById(req.params.id);
res.json({sccess: true, data: idea});
if error
console.log(error);
res.status(500).json({success: false, error: 'Something went wrong'});
now let's do the  update the put request
clear the code
turn it to async
create a try catch
in try
create a const updateIdea = await Idea.findByIdAndUpdate(req.params.id, 
{
    $set: {
        text: req.body.text,
        tag: req.body.tag        
    }
},
{ new: true } // so that if the id doesn't't exist it will create it
);
res.json({success: true, data: updateIdea});
and in the error catch
res.status(500).json({success: false, error: 'Something went wrong'});
now let's do the delete
turn the router delete into a async
clean the code
create a try catch
in try
await Idea.findByIdAndDelete(req.params.id);
res.json({ success: true, data: {} });
and id error 
console.log(error);
res.status(500).json({success: false, error: 'Something went wrong'});
now remove the const array with the ideas that we create in the beginning of this section
*/