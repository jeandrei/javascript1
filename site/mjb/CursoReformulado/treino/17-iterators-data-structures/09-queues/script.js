class Queue {
  constructor(){
    this._items = []
    this._count = 0
    this._front = 0
  }
  queue(item){
    this._items[this._count] = item
    this._count++
  }

  isEmpty(){
    return this._count === 0
  }
  dequeue(){
    if(this.isEmpty()){
      return undefined
    }
    const item = this._items[this._front]
    for(let i = this._front; i < this._count -1; i++){
      this._items[i] = this._items[i + 1]
    }
    this._count--;
    this._items.length = this._count
    return item
  }
}

const q = new Queue;
q.queue('Item 01')
q.queue('Item 02')
q.queue('Item 03')
q.queue('Item 04')
q.dequeue()
console.log(q);
/**
 
 * now create a method peek
 * check if isEmpty
 * if so return No items in the queue
 * else return item[front]
 * finaly create a method length and simply return count
 * create a const q and set to a new Queue
 * 
 * q.enqueue('Item 1');
 * q.enqueue('Item 2');
 * q.enqueue('Item 3');
 * q.dequeue();
 * q.dequeue();
 * console.log('Front Item: ', q.peek());
 * console.log('Queue Length: ', q.length());
 *  
 * 
 * 
 */