function countAmountOfEachCharacter(inputString) {

    let inputString = [...input];

    // NOTE: Ways to convert string..
    //  var inpString = inputString.split("");
    //  let inputString = input.split("");
    //  let inputString = Array.from(input);

    //console.log(intArray1);

    let frequencyCounterOfString = {};

    for (let val of inpString) {
        frequencyCounterOfString[val] = (frequencyCounterOfString[val] || 0) + 1
    }
    return frequencyCounterOfString;
}

console.log(countAmountOfEachCharacter("bee"));
console.log(countAmountOfEachCharacter("mississippi"));

// {b: 1, e: 2}
// {m: 1, i: 4, s: 4, p: 2}