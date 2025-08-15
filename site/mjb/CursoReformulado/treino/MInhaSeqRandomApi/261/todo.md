Form validation
Jump to IdeaForm.js
Go to handleSubmit
We gonna check for all the fields
Right after the e.preventDefault
if(!this._form.elements.text.value || !this._form.elements.tag.value || !this._form.elements.username.value){
    alert('Please enter all fields');
    return;
}
Then after the validation, let's save the user to local storage
localStorage.setItem('username', this._form.elements.username.value);

Then after we clear the fields render the form again
this.render();

Then to display the user go down to the template and in the user input let's put a value 
value="${localStorage.getItem('username') ? localStorage.getItem('username') : ''}"