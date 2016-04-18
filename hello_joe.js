// takes a username as a parameter and returns "Hello, USERNAME!".
// If the username is Joe or Bob only say "Hello!"

module.exports = function(username){
  if (['Joe','Bob'].indexOf(username) > -1){
    return ("Hello!")
  }
  else {
    return ("Hello, "+ username.toUpperCase() + "!")
  }
};
