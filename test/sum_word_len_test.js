// takes a sentence as a parameter and returns the sum of the length of words in it

var sum_word_len = require('../sum_word_len');
var assert = require('assert');

describe("Sum_word_leng test", function(){
  it("should take a string as a parameter and return the sum of the length of words in it ", function(){
    var str = "She sells seashells at the seashore";
    var result = sum_word_len(str);
    assert.equal(result,30);
  })
})
