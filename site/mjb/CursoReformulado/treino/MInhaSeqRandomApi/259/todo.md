In the IdeaList.js set the ideas array to an ampty array
We are gonna create a class that we are gonna dedicate to reaching out to our API and getting ideas, creating, deleting etc
In client/src create a new folder called services 
Inside create a new file ideasApi.js
Inside create a class IdeasApi
in the constructor just create a property
this._apiUrl = 'http://localhost:5000/api/ideas'

Then create a method getIdeas
Stop the client server and install axios
npm i axios
then run dev again
Now in the ideasApi.js before the class let's import axios
import axios from 'axios';
And in the getIdeas() just return axios.get(this._apiUrl);
and at the end export
export default new IdeasApi();

Now in the IdeaList.js in the top import it
import IdeasApi from '../services/ideasApi';
in IdeaList.js in the constructor
load the ideas
below the this._ideas = [] array
this.getIdeas();
Then before the getTagClass create the method getIdeas
must be async because it return from axios and it is a promise
async getIdeas(){
    try {
        const res = await IdeasApi.getIdeas();
        this._ideas = res.data.data because the return of axios is always data and as in router.get we are returning data it must be data.data
        console.log(this._ideas);
    } catch (error){
        console.log(error);
    }
}

To avoid CORS policy
In the back end we need to enable cors access to our client
Go to back end server.js
Stop the back end
install the cors
npm i cors
run the server again
now in the server.js after the const express
const cors = require('cors');
Then under the app.use(express.urlencoded)
app.use(cors({
    origin: ['http://localhost:500', 'http://localhost:3000'],
    credentials: true
}));

Now in the index.js we are rendering the lis befor we even get it from de database, to fix that 
go to the index.js and move 
ideaList.render();
to the IdeaList.js
Right after we get the Ideas
That's it in the getIdeas Method
Right below this._ideas = res.data.data
this.render();