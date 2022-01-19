//Node contains -> piece of data - val
// reference to the next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val); // create a new node using the value passed

        if (!this.head) { //If no head property on the list, set head and tails to be newly created node
            this.head = newNode;
            this.tail = this.head;
        }
        //otherwise set the next property on the tail to be the new node and set the tail property on the list,
        // to be the newly created node
        else {
            this.tail.next = newNode; //updating the next reference
            this.tail = newNode;   //updating the tail pointer
        }
        this.length++;
        return this; //returs the whole list
    }
    pop() {
        if (!this.head) return undefined
        var temp = this.head;
        var prev = this.head;

        while (temp.next !== null) { //is same as temp.next

            prev = temp;
            temp = prev.next;


            if (temp === this.tail) {
                prev.next = null;
                this.tail = prev;
                this.length--;
            }
        }
        return temp;
    }
}

//Interface
var list = new SinglyLinkedList()
// list.push("hello"); //this will add on to the end of the list
// list.push("Welcome");
// list.push("Manu");

/**
 *  illustrate how it works.  Imagine this is our list, Push Operation:

45 ---> 78 ---> 99
               TAIL
Suppose we want to insert 104.

The key is that this.tail is just a pointer that will reference a node on the list. It's just a label. We have two steps to make this work...first we add our node to the end of the list, and second we update this.tail to point to the newly added node.

When we call this.tail.next = newNode , we're adding the newNode to the end of the list.  Our list would look like this now:

45 ---> 78 ---> 99 ---> 104
               TAIL
We've added the newNode to the list, but the tail pointer is still incorrect.  If we called this.tail on the list, we still get 99.  So to update it, we run this.tail = newNode.  This moves the "label" to the correct spot.

45 ---> 78 ---> 99 ---> 104
                        TAIL

To access an entire linked list, the only thing you need is the first node.  
From there, the next node is just another property that we happened to call next in our example.  
That node has its own next property, and so on.  
When you work with a linked list, you really only "see" one node at any given time rather than "seeing" the entire list at once.
 */