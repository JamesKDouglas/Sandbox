// Param: a list of notes, as an array. An interval to shift them by - an integer between -12 and 12.
//The notes are in either sharp or flat notation A# is the same as Bb.
// Return: a list of notes shifted by the interval.
// Example: The notes are either a letter like A, a sharp like A# or flat Ab.
//    (['Bb', 'C#', 'E'] , -4) returns ['F#', 'A', 'C'],
//['A#', 'C#', 'D', 'D#', 'A#', 'F#', 'D#'] , -6 RETURNS  ['E', 'G', 'G#', 'A', 'E', 'C', 'A']
//See that notations can be mixed. In the examples they always seem to return in sharp notation.
//if the shift is large enough to push it off the edge, then we move to a different key. So there has to be 'wraparound'

// Pseudocode:
//Set up arrays for sharp and flat notation.
//look at each note one by one.
    // Decide whether it is sharp or flat notation
    // Look up the integer value of the note by using a search function to find it in the array.
    // shift it by the shift parameter.
    // put it into  new array.
// repeat for next note

function transpose(song, interval){
    let sharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    let flat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
  
    let shiftedSong = [];
    let newNotePos;

    for (i in song){
         if (/#/.test(song[i])){//sharp notation
            newNotePos = sharp.indexOf(song[i])+interval;
            newNotePos = wrapNewNotePos(newNotePos);
            shiftedSong[i] = sharp[newNotePos];
        } else if (/b/.test(song[i])){//flat notation
            newNotePos = flat.indexOf(song[i])+interval;
            newNotePos = wrapNewNotePos(newNotePos);
            shiftedSong[i] = sharp[newNotePos];
        } else {    
            //just use sharp
            //console.log(`neither sharp nor flat notation`)
            newNotePos = sharp.indexOf(song[i])+interval;
            //console.log(newNotePos);
            newNotePos = wrapNewNotePos(newNotePos);
            //console.log(newNotePos);
            shiftedSong[i] = sharp[newNotePos];
        }
    }

    function wrapNewNotePos(newNotePos){
        if (newNotePos<0){//oops we fell off the lower end of the array
            return (sharp.length + newNotePos);    //wrap around
        } else if (newNotePos > (sharp.length-1)){//oops we fell off the other end of the array
            return (newNotePos - sharp.length);
        } else{
            return newNotePos;//no wrap required
        }
    }
    return shiftedSong;
}

console.log(transpose(['E'] , 5));

//A more concise solution:
// function transpose(song, interval){
//     const sharps = "A, A#, B, C, C#, D, D#, E, F, F#, G, G#".split(', '),
//           flats  = "A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab".split(', ');
        
//     let notes = song.map((n) => (n[1]=="b" ? flats : sharps).indexOf(n) );
    
//     return notes.map((n) => sharps[(n+12+interval)%12] )
//   }
//Take-aways: a concise way of wrapping using modulo. Here we see the difference between remainder and modulo.
//also using a ternary statement right inside a line to choose the array to use.
//And an easy way to set up the arrays from the problem input - turn strings into an array with split.