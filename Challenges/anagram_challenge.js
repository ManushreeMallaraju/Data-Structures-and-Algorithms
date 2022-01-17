function validAnagram(string1, string2){
  // add whatever parameters you deem necessary - good luck!
   
  if(string1.length !== string2.length) {
      return false;
  }

let frequencyCounterString1 = {}
let frequencyCounterString2 = {}
  
  //Frequency Counter Pattern
  for ( let key of string1) {
      frequencyCounterString1[key] = (frequencyCounterString1[key] || 0) + 1;
  }
  for (let key of string2) {
      frequencyCounterString2[key] = (frequencyCounterString2[key] || 0) + 1;
  }
  console.log(frequencyCounterString1);
  console.log(frequencyCounterString2);

  for(let key in frequencyCounterString1) {
      if(!(key in frequencyCounterString2) ){
          return false;
      }
    if(frequencyCounterString2[key] !== frequencyCounterString1[key]) {
        return false
    }
  }

  return true;

  
}