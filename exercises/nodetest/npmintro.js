const rs = require('readline-sync');

let userName = rs.question('Hi, what is your user name?');
console.log('Hi ' + userName + ' Welcome to Narnia!');

let ways = ['north', 'south', 'west', 'east'];
let direction = rs.keyInSelect(ways, "Which way is the best way?");

console.log(direction);