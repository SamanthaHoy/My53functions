// takes a sentence as a parameter and returns the shortest word the length of the shortest word

module.exports = function(inputStr) {
  var splitSentence = inputStr.split(" ");
  var shortestWord = splitSentence[0];
  var shortestWord_count = shortestWord.length;

  splitSentence.forEach(function(word) {
    if (word.length < shortestWord_count) {
      shortestWord_count = word.length;
      shortestWord = word;
    }
  });
  console.log("Input sentence : " + inputStr + " | shortestWord : " + shortestWord);
  return [shortestWord , shortestWord_count];
};
