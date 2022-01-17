function insertionSort(arr) {
  let currentElement;
    for(let i = 1; i < arr.length; i++) {
        currentElement = arr[i];
          
        for(let j = i-1; j >= 0; j--) {
//             console.log('currentElement : ', currentElement + ' a[j] ', arr[j]);
               if(currentElement < arr[j]) {
//                console.log('CE: ', currentElement + ' arr[j+1] -> '+ arr[j+1] +' arr[j] -> '+ arr[j] )
                   let temp = arr[j+1];
                   arr[j+1] = arr[j];
                   arr[j] = temp;
//                    console.log('One SWAP done!!!', arr) 
               }
        }
    }
//     return arr
}

insertionSort([5,3,4,1,2]);