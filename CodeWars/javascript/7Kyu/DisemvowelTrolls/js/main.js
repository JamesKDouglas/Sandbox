function disemvowel(str) {

    let chars = str.split('');
    let vowels = ['a','e','i','o','u'];
    for (let i=0;i<chars.length;i++){
        console.log(`inspecting ${chars[i]}`)
       for (j in vowels){
           console.log(`inspecting for ${vowels[j]}`)
           if (chars[i].toLowerCase() == vowels[j]){
               chars.splice(i,1);
               console.log(`removed an ${vowels[j]}`);
               i--; //This is important if there are more than one vowels in a row.
               break;
            }
       }
    }
    let vowelsRemoved = chars.join('');
    return vowelsRemoved;
}
//once I'm done with for loops I'll try it with map or foreach.
msg = "read";
console.log(disemvowel(msg));