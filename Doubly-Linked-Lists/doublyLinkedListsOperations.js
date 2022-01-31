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
            this.head.next = null;
            this.head.prev = null;
            this.tail.next = null;
            this.tail.prev = null;
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
}