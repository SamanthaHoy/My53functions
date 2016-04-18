var reverse = require('../reverse');
var assert = require('assert');

describe("reverse", function(){

    it("should return the string parameter with letters in reverse", function(){
        var result = reverse("This is a call");
        assert.equal(result, "llac a si sihT")
    });

});
