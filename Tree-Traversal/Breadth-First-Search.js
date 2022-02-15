class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        else {
            var current = this.root;
            //using while true, break out of the loop, once we insert the Node;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
                else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    /**
     * visit every single Node on the same level(siblings) -> horizontally
     * @returns the array of values stored
     */
    BFS() {
        var node = this.root,

            //Step 1: Create a queue (this can be an array) and a variable(data) to store the values of nodes visited
            data = [],
            queue = [];
        //Step 2: Place the root node in the queue
        queue.push(node);

        //Step 3: Loop as long as there is anything in the queue
        while (queue.length) { //to obtain truthy value, until the queue is empty

            //Step 4: Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
            node = queue.shift();
            data.push(node.value);

            //Step 5: If there is a left property of the node Dequeued - add it to the queue
            if (node.left) queue.push(node.left);

            //Step 6: If there is a right property of the node Dequeued - add it to the queue
            if (node.right) queue.push(node.right);
        }
        //Step 7: return the vaiable that stores the values
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//      10
//   6      15
// 3   8       20

//data:[10, 6, 15, 3, 8, 20]
//BFS(10, 6, 15, 3, 8, 20)