var countWords = require ('../count_words');
var assert = require ('assert');

describe ("count_words", function(){
  it("should return the number of words in a sentence", function(){
    str = "The cow jumped over the moon";
    var result = count_Words(str);
    assert.equal(result,6);
  })
})
