/**
 * Create a class Queue and in the constructor set
 * items = []
 * count = 0
 * front = 0
 * then create a method enqueue(item) and set item[count] = item
 * increment the count
 * now create a method isEmpty
 * and simply return true if count === 0
 * now create a method dequeue
 * with the previous function isEmpty check if is isEmpty if so return undefined
 * then creatte a const item and set it to the items[front]
 * then do a for i = front; i < count - 1
 * item[i] = item[i + 1]
 * out of the for
 * decrement count
 * set the items.length to the count
 * return item
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