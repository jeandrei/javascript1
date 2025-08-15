Add the functionality to be able to delete the ideas
We want to show the delete button just for the owner of the idea
First in the ideasApi.js 
Let's create a couple of methods
We will also implement the method of update but we won't use it in this project
Let's create the update method
Right after the createIdea

updateIdea(id, data){
 return axios.put(`${this._apiUrl}/${id}`, data);
}

Then for the delete

deleteIdea(id){
    const username = localStorage.getItem('username') ? localStorage.getItem('username') : '';
    return axios.delete(`${this._apiUrl}/${id}`, {
        data: {
            username
        }
    });
}

The delete in the server is ok
Now in the front-end

Now in the IdeaList.js
We need to have an eventListener on the delete button

Before the getIdeas method let's create a addEventListeners method
addEventListeners(){
    this._ideaListEl.addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-times')){
            e.stopImmediatePropagation();
            //in the IdeaList.js on render in div class="card" data-id="${idea._id}"
            const ideaId = e.target.parentElement.parentElement.dataset.id;
            console.log(ideaId);
        }
    })
}

now we need to run our addEventListeners
In the IdeaList.js
in the render
Right after join
this.addEventListeners();
Now open the web console
Click in some delete button
it shuld console the id

Now we have the id to delete
but we have two places to delete
The server and the Browser (DOM)
So in the IdeaList.js 
In the addEventListeners
in the end right after the const ideaId
this.deleteIdea(ideaId)
now let's create this method
under the getIdeas

async deleteIdea(ideaId){
    try {
        //Delete from server
        const res = await IdeasApi.deleteIdea(ideaId);
        //Delete from the DOM
        this._ideas.filter((idea) => idea._id !== ideaId);
        this.getIdeas();
    } catch (error) {
        alert('You can not delete this resource');
    }
}

Now no not even show the delete button for the user that is not the owner of an idea
In the IdeaList.js
In the render
In the button
Cut the button code
<button class="delete"><i class="fas fa-times"></i></button>
instead output a variable
${deleteBtn}
Now in render inside map right below tagClass
const deleteBtn = idea.username === localStorage.getItem('username') ? `<button class="delete"><i class="fas fa-times"></i></button>` : '';
