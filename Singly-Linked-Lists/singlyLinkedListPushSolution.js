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
        if(head === null) {
            this.head = new Node(val);
            this.tail = this.head;
            length++;
        }
        else {
            this.tail = new Node(val);
            length++;
        }
    }
}

// var first = new Node("Hi");
// first.next = new Node("Manu");
// first.next.next = new Node("how"); //Bad way of adding data like this -> can use push() methods



//Interface
var list = new SinglyLinkedList()
list.push("hello"); //this will add on to the end of the list