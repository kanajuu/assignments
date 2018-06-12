const rs = require('readline-sync');

let play = false;

while (!play) {
  play = rs.keyInYN('To play or to not to play?');
}
console.log('Great! I\'m happy you want to play this crappy Game.');

let hasKey = false;
let choices = ['Put your hand in a strange hole in the wall.', 'Step outside onto a creaky, old looking balcony.', 'Look under the carpet.', 'Try to open the blue door.'];
let savedChoice = rs.keyInSelect(choices, "What will you do now?");

if (choices[savedChoice] === choices[0]) {
  console.log('Oh no, you lost a hand!');
}
if (choices[savedChoice] === choices[1]) {
  console.log('The balcony floor immediately breaks and you fall through into the abyss!');
}
if (choices[savedChoice] === choices[2]) {
  console.log('You found a rusty old key almost ready to crumble.');
  hasKey = true;
}
if (choices[savedChoice] === choices[3]) {
  if (hasKey) {
    console.log('You opened the door! You beat the game! So fun, right? Give me 5 starts on Google Review k thanks.')
  } else {
    console.log('The door is locked. It won\'t budge.');
  }
}