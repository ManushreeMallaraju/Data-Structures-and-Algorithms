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

    /**
     * Method to insert new Node to the Binary Tree
     * @param {*} value new value to insert into the BST
     * @returns the updated tree
     */
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

    /** Contains psuedocode and code to insert a new Node into Binary Tree 
    insert(value) {
        //Step 1: Create a new Node
        var newNode = new Node(value);
        //Step 2: Starting at the root:
        //2a: Check if there is a root, if not - the root now becomes that new Node!
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        //2b: If there is a root, check if the value of the newNode is greater that or less than the value of the root.
        else {
            var current = this.root;
            //using while true, break out of the loop, once we insert the Node;
            while (true) {
                if (value === current.value) return undefined;
                //Step 3: If it is less: 
                if (value < current.value) {
                    //3a: Check to see if there is a node to the left
                    //3b: If there is not, add that node as the left property;
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    //3c: If there is, move to that node and repeat the steps
                    else {
                        //moving the current to compare that node
                        current = current.left;
                    }
                }
                //Step 4: If it is greater:
                else if (value > current.value) {
                    //4a: Check to see if there is a node to the right
                    //4b: If there is not, add that node as the right property;
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    //4c: If there is, move to that node and repeat the steps
                    else {
                        current = current.right;
                    }
                }
            }
        }
    }
    */
}

//Valid Binary Tree
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(13);

// Visual Representation
//          10
//    5           13
// 2     7     11     16