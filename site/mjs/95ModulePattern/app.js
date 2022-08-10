// Basic structure

/* (function(){
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
})(); */


// Standard module pattern
const UICtrl = (function(){
  let text = 'Hello World';

  const changeText = function(){
    const element = document.querySelector('h1');
    element.textContent = text;
  }
  // return will be public, we can access from outside
  return {
    callChangeText: function(){
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();
//UICtrl.changeText();//Won't work it is private to inside of the UICtrl


// Revealing module pattern
const itemCtrl = (function(){
  let data = [];
  function add(item){
    data.push(item);
    console.log('Item Added...');
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();


itemCtrl.add({id: 1, name: 'John'});
itemCtrl.add({id: 2, name: 'Mark'});
console.log(itemCtrl.get(2));
