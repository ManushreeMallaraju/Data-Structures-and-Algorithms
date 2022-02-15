class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
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
     * Function to perform PreOrder of DFS
     * @returns the array of values visited
     */
    DFSPreOrder() {
        //Step 1: Create a varaible to store the values of the nodes visited
        var data = [];

        //Step 2: helper function accepts a node and called recursively 
        function traverse(node) {

            //Step 3: Push the value of the node to the varaible that stores the values
            data.push(node.value);
            if (node.left) traverse(node.left); //Step 4:recursively repeat for the every left property of every node
            if (node.right) traverse(node.right); //Step 5:recursively repeat for the every right property of every node
        }

        //Step 6:invoke the helper function with the root
        traverse(this.root);
        return data;
    }
    DFSPostOrder() {
        var data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        var data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinaryTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
//      10
//   6      15
// 3   8       20

//data:[10, 6, 3, 8, 15, 20]
//DFSPreOrder(10, 6, 3, 8, 15, 20)

//DFSPostOrder(3, 8, 6, 20, 15, 10);

//DFSInOrder(3, 6, 8, 10, 15, 20);