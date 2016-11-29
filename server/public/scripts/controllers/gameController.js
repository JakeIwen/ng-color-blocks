colorBlocks.controller('GameController', ['$scope', 'DataFactory', function($scope, DataFactory) {

console.log('game controller running');

var self = this;
self.colors = DataFactory.colors;
self.score = 0;
self.highScore = 0;

console.log('colors from factory', self.colors);
// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?'
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    self.score++;
    if(self.score > self.highScore) {
      self.highScore++;
    }
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
    self.score = 0;
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
