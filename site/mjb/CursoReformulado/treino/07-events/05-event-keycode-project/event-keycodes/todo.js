/* Seção 08 Aula 87  */
// Method 1
/*
Create a window.addEventListener keydown getting the e object as arrow function and inside create a const insert with the getElementById insert
then just add to insert the innerHTML 

insert.innerHTML = `
     <div class="key">
       ${e.key === ' ' ? 'Space' : e.key}
       <small>e.key</small>
     </div>

     <div class="key">
       ${e.keyCode}
       <small>e.keyCode</small>
     </div>

     <div class="key">
       ${e.code}
       <small>e.code</small>
     </div>
     `;
*/

// Method 2
/*
Create a function showKeyCodes getting the e object
inside create a const insert and get the getElementById insert
then set the insert.innerHTML to ''
then create a const keyCodes object with 'e.key': e.key , 'e.keyCode': e.keyCode, 'e.code': e.code
before continue console log keyCodes to check if it prints an object
then loop through the keyCodes like for (let key in keyCodes) 
inside the for create a const div and set a new element div
then in div.className set the class to key
then createa const small and set a new element small
then create a const keyText and set a document createTextNode key
then create a const valueText and set a document createTextNode keyCodes[key]
and then small appendChild keyText
div appendChild valueText
and div appendChild small
and insert appendChild div
at the end criate a window addEventListener keydown, showKeyCodes
*/

