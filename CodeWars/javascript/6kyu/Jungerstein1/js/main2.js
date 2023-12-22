//Input of n.

//find n!!. That is difined as:
//if n is even n!! is 2*4*6*etc...n
//if odd n!! is 1, 3, 5... instead of the evens

//edge cases? 0!!? Not expected.
//timeouts? 10 000 ms per request
//big Int? Yes better use that.

//ex: 3!! has 3 zeros at the end. (42849873690624000)

function countZeros(n) {
    //just try calculating using bigInts.
    let m = BigInt(n);
    let start = 1n;
    let product = 1n;
    
    if (n%2 === 0){
  //     console.log("even!")
      start = 2n;  
    }
    
    for (let i=1n;i<m/2n;i++){
      product *= (start+2n*i);
  //     console.log(product);
    }
    
    let prodStr = product.toString();
  //   console.log("prodStr", prodStr);
    let countZeros = 0;
    for (let i=prodStr.length;i>0;i--){
  //     console.log("enter a for loop");
  //     console.log("i",i);
  //     console.log(prodStr.charAt(i-1));
      if (prodStr.charAt(i-1)==0){
  //       console.log("found a zero!");
        countZeros++;
      } else {
        break;
      }
    }
    
    return countZeros;
  }
  
  console.log(countZeros(30), 3);
  console.log(countZeros(8), 0);
  