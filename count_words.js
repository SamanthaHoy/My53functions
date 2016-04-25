// takes a sentence as a parameter and returns the number of words in the sentence

module.exports = function(inputStr) {
  var splitSentence = inputStr.split(" ");
  return splitSentence.length;
  // var count = 0;
  // splitSentence.forEach(function(a){
  //   count++;
  // })
  // console.log("The input string is : " + inputStr + " | The no of words in the sentence is :" + count);
  // return count;
}
