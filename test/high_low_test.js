//takes a list of numbers as a parameter and returns the highest and lowest numbers in the list

var high_low = require('../high_low');
var assert = require('assert');

describe("high_low", function() {
    it("should return the highest and lowest number in a parsed string" , function(){
      var result = high_low([18,7,3,20,100,78]);
      assert.deepEqual(result,[3,100]);
    });
});
