var areAnagrams = function (wordOne, wordTwo){
  return wordOne.split("").sort().join("") === wordTwo.split("").sort().join("");
}

// console.log(areAnagrams('team','meat'));


var strip = function (word){
  return word.trim();
}
// console.log(strip('   hello   '));
