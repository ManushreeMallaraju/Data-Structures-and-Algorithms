//Given two strings, return true if they are anagrams of one another
var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord);

function isAnagram(firstWord, secondWord) {

    var a = firstWord.toLowerCase();
    var b = secondWord.toLowerCase();

    a = a.split('').sort().join("");
    b = b.split('').sort().join("");

    // console.log(a + ' ' + b);

    return a === b;
}
