function length(...word) {
  let longestWord = "";
  for (let i = 0; i < word.length; i++) {
    if (longestWord.length < word[i].length) {
      longestWord = word[i];
    }
  }
  return longestWord;
}
console.log(length("the", "dog", "has", "fleas"));

function fact(n) {
  
}
