//Having a Binary Tree, search to find a node
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
     * Method to find a node in the BST and return the found Node
     * @param {*} searchValue value to find in the BST
     * @returns the found Node
     */
    find(searchValue) {

        if (this.root === null) return false;
        var current = this.root,
            found = false;

        //while there is a current and not found
        while (current && !found) {

            if (searchValue < current.value) {
                current = current.left;
            }
            else if (searchValue > current.value) {
                current = current.right;
            }
            else {
                //when current.value === searchValue, the Node will be found
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    /**
     * Method to check whether the BST contains a searchValue/not. If it contains, return true: else return false 
     * @param {*} searchValue value to find in the BST
     * @returns a boolean value: true/false
     */
    contains(searchValue) {

        if (this.root === null) return false;
        var current = this.root;

        //while there is a current and not found
        while (current) {

            if (searchValue < current.value) {
                current = current.left;
            }
            else if (searchValue > current.value) {
                current = current.right;
            }
            else {
                //return true if the value is found
                return true;
            }
        }
        return false;
    }

    //recursive and compact find solution
    findRec(val, node = this.root) {
        if (node === null) return false;
        if (val === node.value) return true;
        return val < node.value ? this.findRec(val, node.left) : this.findRec(val, node.right);
    }
}