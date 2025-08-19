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

*/