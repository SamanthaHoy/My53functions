// takes a sentence as a parameter and returns the sum of the length of words in it

var longest_word = require('../longest_word');
var assert = require('assert');

describe("Longest_word test", function(){
  it("should take a string as a parameter and return the longest word and the length of the word", function(){
    var str = "She sells seashells on the seashore";
    var result = longest_word(str);
    assert.deepEqual(result,["seashells",9]);
  })
})
