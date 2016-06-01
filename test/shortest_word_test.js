// takes a sentence as a parameter and returns the shortest word of the length of shortest word in it

var shortest_word = require('../shortest_word');
var assert = require('assert');

describe("Shortest_word test", function(){
  it("should take a string as a parameter and return the shortest word and the length of the word", function(){
    var str = "She sells seashells on the seashore";
    var result = shortest_word(str);
    assert.deepEqual(result,["on",2]);
  })
})
