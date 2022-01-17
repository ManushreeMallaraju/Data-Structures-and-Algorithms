function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
//    if(arr.length === 0) {
//      return 0;
//    }
//   let i = 0;
//   let j = 1;
// //   console.log('i value:', i);

//   while(j !== arr.length) {
     
//      if(arr[i] === arr[j]) {
//         j++;
// //         console.log(arr)
//      } 
//      else {
//          arr[i+1] = arr[j];
//          i++;
// //          console.log(arr)
//      }
//   }
//   return i+1;

//Refactored: Solution
 if(arr.length === 0) return 0;
 var i=0;
  for(var j = 1; i < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j]
    }
  }
  return i+1;
}