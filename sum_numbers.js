// takes a number as a parameter (n) and returns the sum of numbers from 1 to n
module.exports = function(n){
    var sumOfNumbers = 0;
    if (n){
      for(var i = 0; i < n+1 ; i++){
        sumOfNumbers += i;
      }
    }
    return sumOfNumbers;
}
