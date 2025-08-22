function domainName(url){
  //go from the end. Look for the period.
  //collect the part to the left up to something that is not a letter
  let domain = "";
  let pFlag = false;
  for (let i = url.length-1;i>0;i--){
    if (pFlag == false){
        if (url[i]=="."){
            pFlag = true;
            console.log("found a period!");
            console.log(url[i]);
        }
    }
    console.log(url[i].charCodeAt(0));
    if (pFlag == true && (url[i].charCodeAt(0)>=97 && url[i].charCodeAt(0)<=122)){
      console.log("added a letter!");
      domain +=url[i];
    } else if (pFlag == true){
        return domain.split("").reverse().join("");
    }
  }
}

let url = "http://www.google.com";

console.log(domainName(url));