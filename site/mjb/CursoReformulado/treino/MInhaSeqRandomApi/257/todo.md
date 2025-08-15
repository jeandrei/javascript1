Form components
In the client/scr/components create a new file IdeaForm.js
In the file create a class IdeaForm
In the constructor
Select the modal like this._formModal = document.querySelector('#form-modal')

now after the constructor
create a function render
then set this._formModal innerHtml to the form code below

<form id="idea-form">
    <div class="form-control">
    <label for="idea-text">Enter a Username</label>
    <input type="text" name="username" id="username" />
    </div>
    <div class="form-control">
    <label for="idea-text">What's Your Idea?</label>
    <textarea name="text" id="idea-text"></textarea>
    </div>
    <div class="form-control">
    <label for="tag">Tag</label>
    <input type="text" name="tag" id="tag" />
    </div>
    <button class="btn" type="submit" id="submit">Submit</button>
</form>

now at the end export the class IdeaForm
export default IdeaForm
Then in the Index.js import it
import IdeaForm from './components/IdeaForm';
Then after the modal initialize it
const ideaForm = new IdeaForm();
Then render it
ideaForm.render();

Now let's deal with the submit
in the IdeaForm.js in the constructor
this._form = document.querySelector('#idea-form');
Now let's create an eventListener 
After de constructor
addEventListeners(){
    this._form.addEventListener('submit', this.handleSubmit.bind(this));
}

in the IdeaForm.js move the lines
this._form = document.querySelector('#idea-form'); to the bottom of the render function
also add the 
this.addEventListeners();

now before the render let's create the method handelSubmit();

handleSubmit(e) {
    e.preventDefault();
    console.log('SUBMIT');
}

now check in the web browser if it console log submit
remove the console log
create a const idea = {
    text: this._form.elements.text.value,
    tag: this._form.elements.tag.value,
    username: this._form.elements.username.value
}

then console log idea to see if it works
Submit something and check if it console in the browser
now after the console log let's clear the fields
this._form.elements.text.value = '';
this._form.elements.tag.value = '';
this._form.elements.username.value = '';

Now to close the modal after submit
just add 
document.dispatchEvent(new Event('closemodal'));
Then in the Modal.js in the addEventListeners
just add
document.addEventListener('closemodal', () => this.close());

