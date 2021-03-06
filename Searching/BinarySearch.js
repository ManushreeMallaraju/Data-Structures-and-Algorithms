function binarySearch(arr, val) {

//     let left = 0;
//     let right = arr.length - 1;

//     while ( left <= right) {
        
//         let middle = Math.floor((left + right) / 2);
// //     console.log(middle);
//         if(val < arr[middle]) {
//             right = middle - 1;
//         }
//         else if(val > arr[middle]) {
//             left = middle + 1;
//         }
//         else 
//            return middle;
//     }
//     return -1;

    //Refactored Solution:
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) /2);
    while ( arr[middle] !== val && left <= right ) {
        if( val < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right) /2);
    }
    return arr[middle] === val ? middle : -1;
}