var readlineSync = require('readline-sync');
var CharaterOne = readlineSync.question('May I have your name?', function(Superman) {
let IsAlive = true;

console.log(Superman);

});

const intro = 'Weclome to Esacpe Room Superman!';

console.log(intro);

const gameMenuOptions = readlineSync.keyIn('Press the number keys to enter an option: /n 1. Put hand in hole /n 2. Find the key, or /n 3. Open the door', {limit: '$<1-3>'});

if (gameMenuOptions == 1)
{
console.log('You Died! ${CharterOne}, Its a trap You are Dead!');
IsAlive = false;
}
else if (gameMenuOptions == 2)
{
console.log('You Found the key ${CharterOne}, You have a key!');
isAlive = true;
}
else if (gameMenuOptions == 3)
{
console.log('Open the door ${CharterOne}, You Won!');    
}