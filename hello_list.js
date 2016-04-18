// takes a number as parameter and returns a list of "hello world"
// entries equal to the number supplied
module.exports = function(num) {
  var helloList = [];
  for (var i = 0 ; i < num ; i++) {
    helloList.push("hello world");
  }
  console.log(helloList);
  return helloList;
}
