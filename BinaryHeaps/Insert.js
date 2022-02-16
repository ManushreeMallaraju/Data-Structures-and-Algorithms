class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(element) {
        this.values.push(element);

        //Before swap
        //console.log('Values Array', this.values);

        this.bubbleUp();
        return this;
    }

    // bubbleUp() {
    //     let index = this.values.length - 1;
    //     const element = this.values[index];

    //     var parentIndex = Math.floor(((index - 1)/2));

    //     while(this.values[parentIndex] < this.values[index]) {

    //             //swap
    //             var temp = this.values[parentIndex];
    //             this.values[parentIndex] = this.values[index];
    //             this.values[index] = temp;

    //             index = parentIndex;
    //             parentIndex = Math.floor(((index - 1)/2));
    //         }
    // }

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


//[41, 39, 33, 18, 27, 12, 55];
//  0   1   2   3   4   5   6