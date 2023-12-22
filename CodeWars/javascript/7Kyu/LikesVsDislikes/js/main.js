// Like, Dislike, Nothing come from Preloaded
// parameters input are a sequence of button pushes - either the like or dislike button. Does it come in as a string?
// return the state: "like", "dislike" or "nothing". Nothing occurs if a button is clicked a second time in a row.
// examples:
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing

// pseudo
// keep a state. Initial state is Nothing.
// Loop through the input array.
// If the state is the same as the action, set to Nothing.
// If the state is not the same as the action, change the state to the action.
// report end state.

function likeOrDislike(buttons) {
    let state = "Nothing";
    // console.log(buttons.length);

    for (i in buttons){
        // console.log(i);
        if (state == buttons[i]){
            // console.log(`set state to nothing`)
            state = "Nothing"
        } else {
            // console.log(`set state to ${buttons[i]}`)
            state = buttons[i];
        }
    }
    
    return state;
  }
  
  let clicks = ['Dislike']

  console.log(likeOrDislike(clicks));