
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
//A) Common language: Door was moving and encountered an obstacle. 
//State: Direction is -1 or 1, change direction.

//First address the state. Then make the change to the history according to the state

function door(events) {
    console.log(events);
    //We'll begin in a paused state with direction 1, which is closing.
    
    //direction is either 1 or zero forward or advance.
    //pause is 1 if the door is not moving - open, closed or has been paused by a button push
    //history contains the position for every second in the time frame. That can extend to before the first button push, or after. The last history entry is the current position of the door.
    let state = {
        "direction":1,
        "pause":1,
        "history":[0],
    };

    //event loop
    let position = 0;
    for (let i=0;i<events.length;i++){
        console.log("start")
        console.log("i:",i)
        console.log("event:", events[i]);
        console.log(state.direction, state.pause, state.history.slice());

        position = state.history[state.history.length-1];

        console.log("start position:", position);

        if (events[i]==="P"){
            console.log("button pushed!")
            //button push, door is closed. start opening
            if (position === 0){
                //set direction to opening
                state.direction = 1;
                //permit moving
                state.pause = 1;
            } 

            //button push, door is open. start closing.
            if (position === 5){
                //set direction - closing
                state.direction = -1;
                //actually move
                state.pause = 1;
            } 
            
            //button push while door is in progress moving
            if (state.pause === 1 && position>0 && position<5){
                console.log("button push causes door to pause");
                //don't change direction, just pause
                state.pause = 0;
            } else if (state.pause === 0 && position>0 && position<5){//button push while door is paused mid-position. Resume moving in the same direction.
                //resume moving
                state.pause = 1;
            } 

        }
        if (events[i]==="."){
            //carry on in the current state - but we do need to watch to see if the door is completely open or closed.
            if (position===5 ||position === 0){
                state.pause = 0;//direction is set upon button push.
            }            
        }

        if (events[i]==="O"){
            //If we hit an obstacle, immediately reverse direction
            state.direction = state.direction*(-1); 
        }

        //general history update - make the move
        console.log("done examining input and updating state")
        console.log("direction:", state.direction);
        console.log("pause status:", state.pause);
        console.log("direction*pause:", state.direction*state.pause);

        state.history.push(position + state.direction*state.pause);
    }
    
    //I use a 0 to initialize, but have to remove it after.
    state.history.shift();
    return state.history.join("");

}

// console.log(door("..P...O....."), "001234321000");
console.log(door("P.P.."), "12222")