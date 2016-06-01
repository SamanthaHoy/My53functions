// takes a sentence as a parameter and returns the sum of the length of words in it

module.exports = function(inputStr) {
  var splitSentence = inputStr.split(" ");
  var wordCount = 0;

  splitSentence.forEach(function(word){
    wordCount += word.length
  })
  console.log("Input sentence : " + inputStr + " | Sum total length count of words : " + wordCount);
  return wordCount;
}
