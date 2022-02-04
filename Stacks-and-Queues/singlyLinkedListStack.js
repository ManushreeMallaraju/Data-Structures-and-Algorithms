//Implementing Stack operation via Singly Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // in order to have constant time for pushing & popping in Singly Linked List, we have to insert/remove from the beginning of the list.
    // i.e, using unshift() and shift() operation calling as -> as push() and pop() because it's a stack

    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.size === this.last) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.next;
        }
        this.size--;
        return temp.value;
    }
}