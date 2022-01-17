function sameFrequencyCheck(int1, int2) {

// Here we typecasting the int1
// Splitting the int1, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers
    var intArray1 = String(int1).split("").map((num) => {
        return Number(num);
    });

    var intArray2 = String(int2).split("").map((num) => {
        return Number(num);
    });

    if(intArray1.length !== intArray2.length) return false

    let frequencyCounterIntArray1 = {};
    let frequencyCounterIntArray2 = {};
    
    for(let val of intArray1) {
        frequencyCounterIntArray1[val] = (frequencyCounterIntArray1[val] || 0 ) +1
    }
    
    for(let val of intArray2) {
        frequencyCounterIntArray2[val] = (frequencyCounterIntArray2[val] || 0) +1
    }

    for(let key in frequencyCounterIntArray1) {
        if( !(key in frequencyCounterIntArray2)) {
           return false;
        }
        if( frequencyCounterIntArray1[key] !== frequencyCounterIntArray2[key]) {
            return false;
        }
    }
//     console.log(frequencyCounterIntArray1);
//     console.log(frequencyCounterIntArray2);
    return true;
}

console.log(sameFrequencyCheck(222, 222));

//Refactored solution

