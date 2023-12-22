//Intake an integer as pounds or pence
//calculate some sort of change:
//as 20 and 10p coins. The minimum number of coins.
//return a string describing the change
function changeMe(moneyIn){
    console.log(moneyIn);
    let penceTotal =0;
    if (moneyIn.includes("£")){
        penceTotal = Number(moneyIn.slice(1))*100; //100 pence in a pound
    } else {
        penceTotal = Number(moneyIn.slice(0,-1));
    }
    
    console.log(penceTotal);
    
    let twentypStr = "20p ";
    
    if (penceTotal === 20) {
      return `10p 10p`;//special case
    }
      else if (penceTotal%20===0){
      return `${twentypStr.repeat(penceTotal/20).trim()}`;
    } else if (isNaN(penceTotal)){
      return moneyIn;
    } else {
      return `${twentypStr.repeat(Math.floor(penceTotal/20)).trim()} 10p`;
    }
  }