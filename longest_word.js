// takes a sentence as a parameter and returns the sum of the length of words in it

module.exports = function(inputStr) {
  var splitSentence = inputStr.split(" ");
  var longestWord = null ;
  var longestWord_count = 0;

  splitSentence.forEach(function(word) {
    if (word.length > longestWord_count) {
      longestWord_count = word.length;
      longestWord = word;
    }
  });
  console.log("Input sentence : " + inputStr + " | longestWord : " + longestWord);
  return [longestWord , longestWord_count];
};
