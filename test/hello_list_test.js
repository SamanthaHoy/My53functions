var hello_list = require('../hello_list');
var assert = require('assert');

describe ("hello_list", function() {
  it("should return a list of Hello world depending on the number passed", function() {
      var result = hello_list(3);
      // var result2 = [ "hello world", "hello world"];
      // console.log("in test file:" + result2);
      assert.deepEqual(result,[ "hello world", "hello world","hello world"]);
  });
})
