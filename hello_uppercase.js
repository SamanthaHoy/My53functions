// takes a username as a parameter and returns "Hello, USERNAME!".
// If no username is supplied it should return "HELLO!".

module.exports = function(name){
  if(name) {
    return ("Hello, " + name.toUpperCase() + "!") ;
  }
  else { // undefined 
  return ("HELLO!");
  }
}
