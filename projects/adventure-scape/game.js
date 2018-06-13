// Assign readline sync to a variable for easier use. 
const rs = require('readline-sync');

// Console asks player whether or not they want to play the game. 
// If they do want to play then greet them with a fun message.

if (!rs.keyInYN('Are you ready to play?')) {
  console.log('Aww that\'s too bad! See you next time. :)')
}
console.log('Great! I\'m happy you want to play this crappy Game.');