function bubbleSort(arr) {
    for(let i = arr.length ; i>0; i--) {
        for(let j=0 ; j < i-1;j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                //SWAP -> could be made a separate function
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
    }
    return arr;
}

//Optimized with noSwaps
function bubbleSort(arr) {
    var noSwaps;

    for(let i = arr.length ; i>0; i--) {
        noSwaps = true;
        for(let j=0 ; j < i-1;j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
//                 SWAP
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
        console.log('ONE PASS complete!!')
    }
    return arr;
}

// bubbleSort([37,45,29,20]);
bubbleSort([5,1,2,3,4]);