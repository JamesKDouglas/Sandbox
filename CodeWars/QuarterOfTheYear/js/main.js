//input will be an integer from 1 to 12.

//decide what quarter it is in and return it as an integer/

//ex 1 is jan so that is the 1st quarter. So is 2 (Feb)

//edge cases or computation size?
//"Jan"? not expected.
//decimal?
//Job size modest.

const quarterOf = (month) => {
    if (month <= 3 && month >= 1){
      return 1;
    } else if (month <= 6 && month >= 4){
      return 2;
    } else if (month <= 9 && month>= 7){
      return 3;
    }if (month <= 12 && month >= 10){
      return 4;
    }
    
  }
  
  console.log(quarterOf(4), 1);
  console.log(quarterOf(11), 4);
  console.log(quarterOf(5), 2);