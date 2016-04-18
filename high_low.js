//takes a list of numbers as a parameter and returns the highest and lowest numbers in the list
module.exports = function(inputStr) {
  var lowest = inputStr[0];
  var highest = 0 ;

  inputStr.forEach (function (numStr) {
    if (numStr < lowest) {
      lowest = numStr;
    }
  })

  inputStr.forEach (function (numStr) {
    if (numStr > highest) {
      highest = numStr ;
    }
  })
  console.log("The string of numbers are :" + inputStr);
  console.log("The lowest number is :" + lowest + " The highest number is:" + highest);
  return [lowest , highest];
}
