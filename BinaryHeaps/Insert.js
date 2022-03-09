class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(element) {

        //Push the newElement to the End of Values array
        this.values.push(element);

        //Before swap
        //console.log('Values Array', this.values);

        this.bubbleUp();
        return this;
    }

    //bubble the values up to its correct spot
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIndex = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIndex];

            if (element <= parent) break;
            //swap
            this.values[parentIndex] = element;
            this.values[idx] = parent;
            idx = parentIndex;
        }
    }
}

var heap = new MaxBinaryHeap();
heap.insert(55);

//Initial Array:
//[41, 39, 33, 18, 27, 12, 55];
//  0   1   2   3   4   5   6

// Here: 41 - parent
//       0 -> parentIndex
//       39, 33 -> children of 41

//insert(55);
//       33 -> parent
//       12 - L-child
//       55 - R-child
//bubbleUP() =>
//       33 < 55 ? swap : keep same
//[41, 39, 55, 18, 27, 12, 33];

//      41 -> parent
//      39 - L-child
//      55 - R-child
//bubbleUP() =>
//      41 > 55 ? swap : keep same
//End of array(index > 0)
//Expected Output: [55, 39, 41, 18, 27, 12, 33];