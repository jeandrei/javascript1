/***
 * Create a class Stack and in the constructor create a private __items set to []
 * then create a private __count set to zero
 * create a push(item) method and add the item to the array, do not use push use like
 * item[count] = item and add one to the count
 * now the pop is complicated
 * create a pop method
 * first check if the count is zero if so return Underflow that means there is no item to pop
 * now create a const item and set it to the item[count -1]
 * and set the count to count -1
 * then do a for i set to the count as long as i is less than items length
 * set items[i] to items[i + 1] as in the next we do not have anything then it set's the last to nothing
 * set the items.length = count
 * return item
 * Create a method peek
 * and simply return items[count - 1]
 * then create a clear method
 * just set teh items to an empty array []
 * set teh count to 0
 * finaly create a length method that simply returt the count
 */
class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow';
    }

     
    /*to remove the first  
    const item = this._items[0];  
    for (let i = 0; i < this._items.length; i++) {       
      this._items[i] = this._items[i + 1];    
    }*/

    // to remove the last
    const item = this._items[this._count - 1];
    this._count--;
    for (let i = this._count; i < this._items.length; i++) {        
      this._items[i] = this._items[i + 1];
      //this._items[i] is gonna be the last item and as in the last + 1 we dont't have anything
      // we simply set the last item to nothing     
      //this._items[i] = this._items[i + 1];
    }

    this._items.length = this._count;
    return 'The item: ' + item + ' was removed!';
  }
 
  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }

    return this._items[this._count - 1];
  }

  isEmpty() {
    return this._count === 0;
  }

  length() {
    return this._count;
  }

  clear() {
    this._items = [];
    this._count = 0;
  }
}

const stack = new Stack();

stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');
stack.push('Item 4');
stack.push('Item 5');

stack.teste();

console.log(stack);

// stack.clear();
/*
console.log('Top Item: ', stack.peek());
console.log('Stack Length: ', stack.length());
*/