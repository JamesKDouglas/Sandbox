var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears;
    let dogYears;
    
    if (humanYears===1){
      catYears = 15;
      dogYears = 15;
    } else if (humanYears===2){
      dogYears = 24;
      catYears = 24;
    } else if (humanYears >2){
      dogYears = 24 + (humanYears-2)*5;
      catYears = 24 + (humanYears-2)*4;
    }
    return [humanYears,catYears,dogYears];
  }
  