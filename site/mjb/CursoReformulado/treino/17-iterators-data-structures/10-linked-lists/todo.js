/**
 * Create a class Node and then the constructor(value)
 * stil in the constructor create the private properties
 * value = value
 * next = null
 * Now create a class LinkedList 
 * in the constructor create teh private properties
 * head = null
 * length = 0
 * Now all the other methods will be created inside the LinkedList
 * the first methods is the insertFirst(value)
 * create a const newNode = new Node(value)
 * then the newNode.next = to this._head because this is the current head and 
 * we need to put it to the next of the new head that means the new first
 * then this._head = newNode because this is the one that will be at the head, the new first
 * finaly increment the this._length++
 * now lets create a method insertLast(value)
 * create a const newNode = new Node(value)
 * create a let current = this._head because we need to get the first element node
 * then do a while(current.next)
 * current = current.next it means it will always set the current to the current.next 
 * untill there is not a current.next thant means it is the last
 * then after the while we simply set the current.next that is the last node to the newNode
 * current.next = newNode
 * and increment this._length
 * now create a insertAt(value, index) method
 * first check if the index is greater than the this._length if just return to stop tha code
 * because we can't insert a node in a position grater than the length
 * then check if the index is iqual to zero, if so just this.insertFirst(value) and then
 * return to stop de code
 * now create a const newNode = new Node(value)
 * create a let current and a let previous
 * set the current to this._head this way we know the first node
 * create a let count = 0
 * now do a while count < index that means it will loop from the first node
 * until it finds the index we intend to place the new node
 * previus = current
 * current = current.next
 * increment count++
 * The first iteration the current is gonna be the head that means the first node
 * the previus will get the first node in previous = current
 * previus = current 0
 * then current = current.next 1
 * increment count 1
 * imagin that the index we intend to place is 3
 * when count 2 < index 3
 * previous = 2
 * current = current.next 3
 * count 2
 * will get out of the while
 * then newNode.next = current 3
 * previous.next = newNode previous is 2 the next is 3
 * this._length++
 * now let's create a getAt(index) method
 * create a let current and set it to the this._head that way we go to the first element
 * create a let count and set it to zero
 * then do a while(current) that mean while there is a current wee go through all the nodes
 * until we find the index we want
 * check if count === to index becouse in the while 
 * we will increment count if so console.log current._value
 * out of the if statemant 
 * increment count++
 * set current to current.next
 * out of the while return null in case the index is not found
 * now let's create a method removeAt(index)
 * first check if the index is greater than the this._length if so return to stop the code
 * now create a let current and set it to the this._head
 * create a let previous
 * create a let count = 0 
 * check if the index is zero if so simply set the this._head to 
 * the next node current.next this way we remove the first node
 * else while count is < than index that means we will go through untill we 
 * get the index
 * increment count++
 * previous = current
 * than curren = curren.next
 * out of the while till inside of else if
 * previous.next = current.next
 * out of the else if
 *  this._length--
 * 
 * in the first iteration the current is gonna be zero
 * count is gonna be zero and let's say index is 3
 * count++ is gona be 1
 * previous = current 0
 * current = current.next 1 
 * when count reachs 2 will be the last iteration in while 2 < 3
 * count++ is gonna be 3
 * previous = current 2
 * current = current.next 3
 * then out of the while 
 * previus.next 3 = current.next 4
 * then out of the if this._length-- we update the number of nodes
 * now let's create a method printListData()
 * create a let current and set it to the head
 * create a let list and set it to ''
 * then create a while(current)
 * list += current._value + ' '
 * current = curren.next
 * out of the while console.log list
 * finaly the clearListData method
 * clear the this._head set it to null
 * set the this._length to zero
 * 
 * to test
 * const list = new LinkedList();
 * list.insertFirst(100);
 * list.insertFirst(200);
 * list.insertFirst(300);
 * list.insertLast(50);
 * list.insertLast(10);
 * list.insertAt(500, 2);
 * list.insertAt(600, 4);
 * list.removeAt(2);
 * ist.removeAt(0);
 * list.clearListData();
 * list.printListData();
 * list.getAt(2);
 * list.getAt(0);
 * 
 * 
 * 
 */