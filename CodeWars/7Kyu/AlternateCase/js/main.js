//input will be a string.
//The goal is to invert the capitalization.

//ex: Hello World => hELLO wORLD


function alternateCase(s) {
  let arr = s.split("");
  let arr2 = [];
  for (let i=0;i<s.length;i++){
    if (arr[i].toUpperCase() === arr[i]){
      arr2.push(arr[i].toLowerCase());
    } else {
      arr2.push(arr[i].toUpperCase());
    }
  }
  return arr2.join("");
}