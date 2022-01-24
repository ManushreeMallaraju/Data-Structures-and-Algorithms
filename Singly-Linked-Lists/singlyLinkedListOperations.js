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
    /**
     * Remove a Node from the Linked List at a specific position.
     * @param {*} pos, index of the Node to be removed
     * @returns 
     */
    remove(pos) {
        if (pos < 0 || pos > this.length) return undefined
        if (pos === this.length - 1) return this.pop();
        if (pos === 0) return this.shift();

        var previousNode = this.get(pos - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    /** 
     * print() helps to trase reverse()
    */
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
    /**
     * Reverses the Nodes in the Linked List in place.
     * @returns the reversed linked list
     */
    reverse() {
        //Step 1: Initialize three pointers prev as NULL, curr as head and next as NULL.
        //STep 2: Swap head and tail
        var current = this.head;
        this.head = this.tail;
        this.tail = current;

        var prev = null;
        var next = null;


        //Step 3: Iterate trough the linked list. In loop, do following.

        for (var i = 0; i < this.length; i++) {
            //Before changing next of current,
            // store next node
            next = current.next;

            //Now change next of current
            // This is where actual reversing happens
            current.next = prev;

            //Move prev and curr one step forward
            prev = current;
            current = next;
        }
        return this;
    }
}


//Kind of Interface
var list = new SinglyLinkedList()

