// takes a number as a parameter (n) and returns a list of numbers from 1 to n

module.exports = function(n){
  var numList = [];
  if (n){
      for (var i = 1 ; i < n+1 ; i++) {
        numList.push(i);
      }
  }
  console.log(numList);
  return numList;
};
