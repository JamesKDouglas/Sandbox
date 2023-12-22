function saleHotdogs(n){
    console.log(n);
    
    let price1=100,
        price2=95,
        price3=90,
        price=0;
    
    console.log(5<=n && n<=10);
    n>=10 ? price=price3 : 5<=n && n<=10 ? price=price2 : price=price1;
    console.log(price);
    return price*n;
      
  }
  //A more condensed version from unnamed etc:
//   function saleHotdogs(n){
//     return n*(n<5?100:n<10?95:90);
//   }