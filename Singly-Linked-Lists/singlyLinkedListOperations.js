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
    /**
     * Inserts a Node at the end of the Linked List
     * @param {*} val the value of new Node
     * @returns the newly updated List
     */
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
    /**
     * Remove a Node from the end of the LinkedList
     * @returns the Node removed
     */
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
    /**
     * Removes a Node from the beginning of the Linked List
     * @returns The Node removed
     */
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
    /**
     * Inserts a Node at the beginning of the Linked List
     * @param {*} val the value of the new Node
     * @returns the newly updated List
     */
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
    /**
     * Retrives a Node by it's position in the Linked List
     * @param {*} pos, index of the Node
     * @returns a Node in the given position
     */
    get(pos) {
        if (pos < 0 || pos >= this.length) return null;
        var counter = 0;
        var temp = this.head;
        while (pos !== counter) {
            temp = temp.next;
            counter++;
        }
        return temp;
    }
    /**
     * Sets a new value to the Node, at a given index in the Linked List.
     * @param {*} pos, index of the Node
     * @param {*} val, new value to set in the List
     * @returns 
     */
    set(pos, val) {
        var foundNode = this.get(pos);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    /**
     * Adds a Node to the Linked List at a specific position
     * @param {*} pos the index of the newNode
     * @param {*} val the new value to be inserted
     * @returns true if Node inserted
     */
    insert(pos, val) {
        if (pos < 0 || pos > this.length) return false
        if (pos === this.length) return !!this.push(val);  //!! -> double negate -> !2 -> gives false, corse to boolean 
        if (pos === 0) return !!this.unshift(val);         // !!2 -> true : gives opposite 

        var newNode = new Node(val);
        var prev = this.get(pos - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}


//Kind of Interface
var list = new SinglyLinkedList()

