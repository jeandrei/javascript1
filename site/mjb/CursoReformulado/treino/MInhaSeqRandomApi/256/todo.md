Lets first set up our modal
In the client/index.js
Create a const modal = document.querySelector('#modal');
Also the modalBtn = document.querySelector('#modal-btn');

create a function open that just get the modal.style.display set to block

now create another function close then set the modal.style.display to none

Then create our eventlisteners
modalBtn.addEventListener('click', open);

window.addEventListener('click', outsideClick);
then below the function close let's create this function
function outsideClick(e)
if (e.target === modal) then call close();

Now in the src folder create another folder components
Inside create a file Modal.js
In the Modal.js
Create a class Modal
It has a constructor and inside the constuctor we will set our querySelectors
Grab the selectors from the index.js and past inside the consturctor
But instead o const modal, both will be the property of the class
this._modal and this._modalBtn

Also copy the functions and bring to the Modal class
put the functions below the constructor
turn the functions to methods of the class
like open() and inside this._modal.style.display

Rigth before open create a eventListener
addEventListeners(){
    this._modal.btn.addEventListener('click', this.open.bind(this));
    window.addEventListener('click', this.outsideClick.bind(this));
}

then in the constructor at the last line let's call the eventListener
this.addEventListener();


then at the end of the file let's export the Modal;
export default Modal;
Now go to index.js, get rid of all the stufs, let just the import
and above the import css import Modal
import Modal from './components/Modal';
then just instantiate it 
const modal = new Modal();
Save and check if the modal works