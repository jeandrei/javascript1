// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Add Book To list
UI.prototype.addBookToList = function(book){
  const list = document.querySelector('#book-list');
  // Create tr element
  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
                  <td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.isbn}</td>
                  <td><a href="#" class="delete">X</a></td>
                  `
  list.appendChild(row);
}


// Show Alert
UI.prototype.showAlert = function(message, className){
  // Create div
  const div = document.createElement('div');
  // Add classes alert and the classe passed from the function
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert  
  container.insertBefore(div, form);
  // Timeout after 3 seconds
  setTimeout(function(){    
    document.querySelector('.alert').remove();
  }, 3000)
  
}


// Delete Book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
    // Show message
    this.showAlert('Book Removed!', 'success');
  }
}

// Clear Fields
UI.prototype.clearFields = function(){
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
  document.querySelector('#title').focus();
}



// Event Listeners for add Book
document.querySelector('#book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;
  
  // Instantiate book
  const book = new Book(title, author, isbn);

  // Insantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === ''){
    // Error alert
    ui.showAlert('Please fill in all fields','error');
    return;
  } else {
    // Add book to list
    ui.addBookToList(book); 

    // Show success
    ui.showAlert('Book Added!','success');
    
    // Clear fields
    ui.clearFields();
  }   

  e.preventDefault();
});

// Event Listener for Delete
document.querySelector('#book-list').addEventListener('click',function(e){
  // Instantiate UI
  const ui = new UI();
  // Delete UI with the prototype deleteBook
  ui.deleteBook(e.target);
  
  e.preventDefault();
});