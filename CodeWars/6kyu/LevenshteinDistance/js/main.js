// input will be 2 strings.

//The goal is to find how many edits - insertions, deletions or substitutions
//are required to change one string into the other. Report the minimum.


// "kitten", "sitting" => 3
// substitute k with an s, e with an i, add a g. 2 substitutions, 1 insertion.

// hello world, goodbye world 
// this is the same as
// hello, goodbye.
// substitute all 5
// hello to goodb. 
// then add ye.
// that's 7 changes. 5 sub 2 add
//There are only 7 letters. So sub most of them, add or delete the rest.
// These word have no common order to the letters. 

//deletion and insertions are the same in the sense that they are opposite direction.
//so all we have to worry about is common letters in the same order and the total length.

//Common letter in the same order are kept. The rest are substituted as much as possibe.
//then the final step is to add or subtract letters.

//levenshtein, gravenstein 
//lev sub to gra. 
//insert a v.
//delete the h
//that's 5.


//timeouts? 12 000 ms
//edge cases? empty strings? well, return 0 then. 
//special characters? yes they can exist.

function levenshtein(str1,str2)
{
  console.log(str1, str2);
  const edits = []
  for(let i = 0; i < str2.length + 1; i++){
    const row = []
    for(let j = 0; j < str1.length + 1; j++){
      row.push(j)
      // console.log(row.slice())
    }
    row[0] = i
    edits.push(row)

    //the spread operator allows me to see the current version of the array.
    //otherwise the console will print the final version
    // console.log("edits so far:", ...edits); 
  }

  console.log(edits);
  for(let i = 1; i < str2.length + 1; i++){
    for(let j = 1; j < str1.length + 1; j++){
      if(str2[i - 1] === str1[j - 1]){
        edits[i][j] = edits[i - 1][j - 1];
      }else{
        edits[i][j] = 1 + Math.min(edits[i - 1][j], edits[i-1][j-1], edits[i][j-1])
      }
    }
  }
  return edits[str2.length][str1.length]
}


console.log(levenshtein("kitten", "sitting"), 3)
// console.log(levenshtein("hello world", "goodbye world", 7))
// console.log(levenshtein("levenshtein", "gravenstein"), 5)