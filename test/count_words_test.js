var count_words = require ('../count_words');
var assert = require ('assert');

describe ("count_words", function(){
  it("should return the number of words in a sentence", function(){
    var inputstring = "The cow jumped over the moon";
    var result = count_words(inputstring);
    assert.equal(result,6);
  });
});
