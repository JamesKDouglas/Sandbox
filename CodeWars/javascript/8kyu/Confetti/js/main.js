// parameters: 
// return:
// example:
// pseudocode:
const MyPromise = require('some-promise-lib');
const confetti = require('canvas-confetti');
confetti.Promise = MyPromise;

var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});
myConfetti({
  particleCount: 100,
  spread: 160
  // any other options from the global
  // confetti function
});