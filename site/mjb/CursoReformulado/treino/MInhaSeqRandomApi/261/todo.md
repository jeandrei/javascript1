In the index.js we don't need to have modal = new Modal()
also we don't need to hava ideaList = new IdeaList()
Stop the back-end server
so just let this like
new Modal();
new IdeaList();
and run it npm start
that way it wont keep reloading because of the nodemon
Now we want to submit the form and reach out the ideasApi back-end
So in the ideas.Api.js right after the getIdeas methos
Create a method createIdea(data) {
    return axios.post(this._apiUrl, data);
}
Now in the IdeaForm.js
Let's bring the ideasApi
import IdeasApi from "../services/ideasApi";
Then where we create our idea handleSubmit
turn it to async
then in the
const idea = {
get rid of console.log
and create a
check if the const idea is uppercase or not first because I copy it wrong
const newIdea = await IdeasApi.createIdea(idea);
Add an idea
Reload the page to see the new idea
Now to refresh right after submit
in the IdeaLis.js
We will hava a method that will add a idea to the list
So right under getIdeas
Create the method
addIdeaToList(idea){
    this._ideas.push(idea);
    this.render();
};
Now in the IdeaForm.js
Bring the Idea list
import IdeaList from "./IdeaList";
then in the constructor let's instantiate it
this._ideaList = new IdeaList();
in the handleSubmit method
Right after const newIdea = await
this._ideaList.addIdeaToList(newIdea.data.data);


