//Input is a string and a value, n which is the offset for the first transform:

//The goal is to transform the string with 4 successive transformations
//1 circular letter shift
//2 9 compliment
//3 downcase each odd letter, upcase each even one
//4 reverse

//ex

//BORN IN 2015!
//1: CPSO JO 2015!
//2: CPSO JO 7984!
//3: CpSo jO 7984!
//4: !4897 Oj oSpC

//return !4897 Oj oSpC

//return the transformed string.

//edge cases? Large shift? well just go around? Negative shift? 
//timeouts? not expected.

function playPass(s, n) {
  s = s.split("");//make it an array
  
  let aCode = "a".charCodeAt(0);
  let zCode = "z".charCodeAt(0);
  
  let ACode = "A".charCodeAt(0);
  let ZCode = "Z".charCodeAt(0);
  //
  //Circular letter shift
  for (let i=0;i<s.length;i++){
    //is it a letter
    let code = s[i].charCodeAt(0);
    if (code>=aCode && code<=zCode || code>=ACode && code<=ZCode){
      if (code>aCode && code<zCode){
        //lowercase
        //do the shift
        code += n;
        //rollover/circularity
        if (code>zCode){
          code = aCode + (zCode -code);
        }
        s[i] = String.fromCharCode(code);
      } else {
        //uppercase
        //do the shift
        code += n;
        //rollover/circularity
        if (code>ZCode){
          code = ACode + (ZCode -code);
        }
        s[i] = String.fromCharCode(code);
      }
    }
    //if it's a letter
    //is it uppercase or lowercase?
    //shift it by n
    //If we're over the value then go around
  }
  
  for (let i=0;i<s.length;i++){
    //is the character a number?
    if (s[i].charCodeAt(0)>="0".charCodeAt(0) && s[i].charCodeAt(0)>="9".charCodeAt(0)){
      s[i] = 9 - +s[i];
      s[i].toString();
    }
  }
  
  //complement of 9
  //Downcase/upcase
  for (let i=0;i<s.length;i++){
    if (i%0){
      s[i] = s[i].toUpperCase();
    }else {
      console.log(typeof(s[i]))
            console.log((s[i]))
      s[i] = s[i].toLowerCase();
    }
  }
  
  //reverse
  return s.reverse().join("");
}

console.log(playPass("BORN IN 2015!",1), "!4897 Oj oSpC");
console.log(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J");
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2), 
    "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO");
