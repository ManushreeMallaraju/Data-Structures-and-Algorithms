extractMax() {

    var newParent = this.values[this.values.length - 1],
        oldRoot = this.values[0];

    //console.log(oldRoot);
    // console.log(newParent);
    //swap 
    this.values[this.values.length - 1] = oldRoot;
    this.values[0] = newParent;

    //pop
    oldRoot = this.values.pop();
    this.sinkDown(newParent);

    return oldRoot;
}

sinkDown(newParent) {
    var newParentIdx = 0,
        leftChildIdx = 2 * newParentIdx + 1,
        rightChildIdx = 2 * newParentIdx + 2;
    // console.log(leftChildIdx);
    // console.log(rightChildIdx);

    while (newParentIdx < this.values.length - 1) { //until the end of the values property
        var leftChid = this.values[leftChildIdx],
            rightChild = this.values[rightChildIdx];

        if (newParent < leftChid || newParent < rightChild) {

            if (leftChid > rightChild) {
                this.values[newParentIdx] = leftChid;
                this.values[leftChildIdx] = newParent;
                newParentIdx = leftChildIdx;
                // console.log(this.values);
            }
            else {
                this.values[newParentIdx] = rightChild;
                this.values[rightChildIdx] = newParent;
                newParentIdx = rightChildIdx;
            }

            leftChildIdx = 2 * newParentIdx + 1,
                rightChildIdx = 2 * newParentIdx + 2;
        }
    }
}