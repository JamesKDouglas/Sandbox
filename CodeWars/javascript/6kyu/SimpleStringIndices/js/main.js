//Input of string type and also an integer.
//It will have ascii characters only.

//The goal is to find the closing bracket, given the index of an opening bracket.

//If there is no opening bracket at the indicated position then 
//return -1.

//timeouts, edge cases? 12 000 ms. No edge cases.

function solve(str,idx){
  //early return
   //is there a bracket there at idx ?
   if (str.charAt(idx) !== "(") return -1;
   
   //iterative.
   //Keep track of open brackets/closing ones after the idx.
   
   //Use a counter. Start at 1.
   //Increment if there is another ( encountered.
   //decrement if there is a ),
   //When the counter gets to 0, return the index.
   
   let counter = 1;
   for (let i=idx+1; i<str.length;i++){
     if (str.charAt(i) === "(") counter++;
     if (str.charAt(i) === ")") counter--;
     if (counter === 0) return i;
   }
 }
 
 console.log(solve("((1)23(45))(aB)", 0), 10);
 console.log(solve("((1)23(45))(aB)", 1), 3);
 console.log(solve("((1)23(45))(aB)", 2), -1);
 console.log(solve("((>)|?(*'))(yZ)", 11), 14);