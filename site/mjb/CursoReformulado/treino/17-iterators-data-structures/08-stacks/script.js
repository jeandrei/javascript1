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
 */
class Stack{
  constructor(){
    this._items = []
    this._count = 0
  }
  push(item){
    this._items[this._count] = item
    this._count++
  }
  pop(){
    if(this._count == 0){
      return 'Underflow'
    }
    const item = this._items[this._count - 1]
    this._count--
    for(let i = this._count; i < this._items.length; i++){
      this._items[i] = this._items[i + 1]
    }
    this._items.length = this._count
    return item
  }
  peek(){
    return this._items[this._count -1]
  }
}

const stack = new Stack
stack.push('Item 01')
stack.push('Item 02')
stack.push('Item 03')
stack.push('Item 04')
stack.push('Item 05')
console.log(stack.pop());
console.log(stack);
console.log(stack.peek());