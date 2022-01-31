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
        //create a new Node with the value passsed to the function
        var newNode = new Node(val);

        //if head property is null, set the head and tail to be the newly created node
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        //if not, set the next property of the tail to be that node
        else {
            this.tail.next = newNode;
            //set the previous propertu of the newly created node to be the tail.
            newNode.prev = this.tail;
            //set the tail property to be the new Node
            this.tail = newNode;
        }
        //increment the length & return the list
        this.length++;
        return this;
    }
    /**
     * Pop operation, remove at the end
     * @returns the popped Node
     */
    pop() {
        //if there is no head, return undefined
        if (!head) return undefined;

        //store the current tail in a varaible to return later
        var temp = this.tail;
        //if the length is 1, set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        // update the tail to be the previous node
        //set the newTail's next to null
        //decrement the length
        // return the value removed
        else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;

        }
        this.length--;
        return temp;
    }
}