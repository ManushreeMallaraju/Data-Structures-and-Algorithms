//Skeleton for DLL

// Node
// val
// next
// prev

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null; //with DLL Node
    }
}

//DLL
// head
// tail
// length
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * Method to push new node, at the end of the Doubly Linked List
     * @param {*} val, new value to insert into the list
     * @returns the updated doubly linked list
     */
    push(val) {
        // create a new Node with the value passsed to the function
        var newNode = new Node(val);

        // if head property is null, set the head and tail to be the newly created node
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        // if not, set the next property of the tail to be that node
        else {
            this.tail.next = newNode;
            // set the previous propertu of the newly created node to be the tail.
            newNode.prev = this.tail;
            // set the tail property to be the new Node
            this.tail = newNode;
        }
        // increment the length & return the list
        this.length++;
        return this;
    }
    /**
     * Pop operation, remove at the end
     * @returns the popped Node
     */
    pop() {
        // if there is no head, return undefined
        if (!this.head) return undefined;

        // store the current tail in a varaible to return later
        var temp = this.tail;
        // if the length is 1, set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        // update the tail to be the previous node
        // set the newTail's next to null
        // decrement the length
        // return the value removed
        else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    /**
     * Method to remove elemnet from the beginning of the List
     * @returns the removed node
     */
    shift() {
        // if length is 0, return undefined
        if (this.length === 0) return undefined;

        //store the current head property in a variable, called old head.
        var oldHead = this.head;

        // if the length is 1, set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        // update the head to be the next of the oldHead node
        // set the Head's previous property to null
        //set the old head's next to null
        // decrement the length
        // return the old Head
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    /**
     * Method to perform unshift(), adding an element to the beginning of the DLL
     * @param {*} val element to add to the list
     * @returns the updated list
     */
    unshift(val) {
        var newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    /**
     * Method to access a node in a DLL by it's index
     * @param {*} pos, index of the list
     * @returns the value found in the given index
     */
    get(pos) {
        //If index is invalid return null
        if (pos < 0 || pos >= this.length) return null;

        var counter, temp;

        //if the index is in hte first half of the list, loop through the list from the head towards the middle
        if (pos <= Math.floor(this.length / 2)) {
            // console.log('Entered 1st half..')
            counter = 0;
            temp = this.head;
            while (counter !== pos) {
                temp = temp.next;
                counter++;
            }
        }
        //if the index is in the second half of the list, loop through the list from the tail towards the middle
        else {
            // console.log('Entered 2nd half..')
            counter = this.length - 1;
            temp = this.tail;
            while (counter !== pos) {
                temp = temp.prev;
                counter--;
            }
        }
        // console.log('Position: ', counter);
        //return the node once found
        return temp;
    }
    /**
     * Method to replace a value of a Node at a given index of the DLL
     * @param {*} index the index where value should be updated
     * @param {*} newValue the newValue to be updated
     * @returns 
     */
    set(index, newValue) {
        //Using get() to find the Node at a given position
        var foundNode = this.get(index);

        if (foundNode !== null) {
            foundNode.val = newValue;
            return true;
        }
        return false;
    }
    /**
     * Inserts a new Node at the given index
     * @param {*} index the position to insert new Node
     * @param {*} value the value of the Node to insert in the list
     * @returns 
     */
    insert(index, value) {
        //if the index is invalid, return false
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(value); //using !! -> coare it to boolean here, if success returns true not the list
        if (index === this.length) return !!this.push(value);  // valid because we can insert at the end of the list

        var newNode = new Node(value);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    /**
     * Method remove a node at a given index 
     * @param {*} index the position in the list
     * @returns removed node from the list
     */
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        var removeNode = this.get(index);
        var beforeNode = removeNode.prev;
        var afterNode = removeNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // removeNode.prev.next = removeNode.next; can also do this way
        // removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}

var list = new DoublyLinkedList();
list.push(10); //pos = 0
list.push(20); //pos = 1
list.push(30); //pos = 2
list.push(40); //pos = 3
list.push(50); //pos = 4
list.push(60); //pos = 5
console.log(list);