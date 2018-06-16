// Assign readline sync to a variable for easier use. 
const rs = require('readline-sync');

// Welcome message
let welcomeMsg = console.log('Welcome to the curious world of Adventure Scape!\n');

// Console asks player whether or not they want to play the game. 
// If they do want to play then greet them with a fun message.
if (!rs.keyInYN('Are you ready to slay monsters and get rich?\n')) {
  console.log('Aww that\'s too bad! See you next time. :)\n')
} else {
  console.log('Great! I\'m happy you want to play this crappy Game.\n');
}

// Ask the player to select a username, and display another message with their name. 
let userName = rs.question('What is your name? \n');
console.log('Hi ' + userName + '! \n Your epic journey is about to unfold. \n You had better get going!');

// Set a variable to true that can be changed later to stop the game loop.
let isAlive = true;

// Set up an enemy constructor function with hp and attack power and other info. 
let enemies = [

];

// Create a loop that continues while isAlive is true and prompt the user to either explore or go to the shop. 
while (isAlive) {
  let baseChoices = ["Explore the Jungle\n", "Go to the City"]
  let playGame = rs.keyInSelect(baseChoices);
  if (baseChoices[playGame] === baseChoices[0]) {
    // Try to encounter an enemy.
    // if false go back to base choices 
    // if true generate new enemy
    // display the name of enemy 
    // select run or fight
    // if run then there is a chance to escape. If successfully escaped then there is another chance to take escape damage.
    // if fight then start fight instance
    // select attack or block 
    // if enemy reaches 0 hp then end fight and add gold and/or items, and return to baseChoices.
    // if player reaches 0 first then set isAlive to false and end the game. Display a game over message just beforehand.

  } else if (baseChoices[playGame] === baseChoices[1]) {
    // Display message " You are in the city, what would you like to do?"
    // select rest at inn (recover hp), read encountered enemies info, or go back to main menu. 
    // if rest at inn then set hp to max and return to city selection. 
    // if read info then display how many and what type of enemies you have killed. Return to city selection.

  }

}