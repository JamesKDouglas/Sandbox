
//Input of . P or O as a string. P is button push (go or pause) O is obstacle (reverse) and . is carry on whether it was moving or stopped.

//There are a few scenarios, which we can completely describe:

//paused is a boolean we'll use with multiplication so I'm saying it's zero or 1. 
//Direction is up or down so -1 or 1 and we'll add that directly to the previous history to update the position.

//1) Input char: "P".

//A) Common language: Door was closed and we're opening it.
//State: paused is 0. History is terminated with 0. Direction is -1.
//Response: change direction to 1, pause to 1. Change position.

//B) Common language: Door was moving (up or down) and button was pushed. 
//State: Paused is 1. Direction is -1 or 1. 
//Response: Change pause to 0. Change position.

//C) Common language: Door was open and we're closing it.
//State: paused is 0. History is terminated with 5. Direction is 1.
//Response: change direction to 1, pause to 1.

//2) Input char: "."
//A) Common language: Door was moving and it just keeps moving.
//State: paused is 1 (not pause). History is not 5 and not 0.
//Response: Add to history by updating latest entry. If it reaches terminal position then set pause to 0.

//B) Common language: Door is at terminal position.
//State: pause is 0. History is 5 or 0. 
//Response: do nothing. Note that multiplying by pause will handle this. 

//3) Input char: "O" 
//A) Common langugae: Door was moving and encountered an obstacle. 
//State: Direction is -1 or 1, change direction.
//4) Door is open and button is pushed. 

//First address the state. Then make the change to the history according to the state

function door(events) {
    //We'll begin in a pused state with direction 1, which is closing.
    //direction is either 1 or zero forward or advance.
    let state = {
        "direction":1,
        "pause":true,
        "history":[],
    };


}

console.log(door("..P...O....."), "001234321000");