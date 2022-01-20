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
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined
        var temp = this.head;
        var prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = prev.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    shift() {
        if (!this.head) return undefined

        var temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }
}


//Kind of Interface
var list = new SinglyLinkedList()

