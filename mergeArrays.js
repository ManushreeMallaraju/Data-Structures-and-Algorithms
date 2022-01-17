function mergeArrays(arr1, arr2) {
    let result = [];
    let i=0, j=0;
    while( i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }  
    }
    while( i < arr1.length) {
//         console.log(arr2.slice(j));
         result.push(arr1[i]);
         i++;
    }
    while( j < arr2.length) {
            result.push(arr2[j]);
            j++;
     }
    return result;
}

mergeArrays([1,10,50],[2,14,19,100]);









// let arr1 = [1,10,50];

// console.log(arr1.length);