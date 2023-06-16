//We have an input of date in dd,mm,yyyy format.

//the goal is to report the number of days 
//since jan 1, of that year.

//So that's the julian date minus the julian date of jan 1 of that year.


//This may involve calculating whether it is a leap year or not - 
//that is, are there are 29 days in Feb rather than 28. A leap year has 366 days.

//Timeouts, edge cases? not expected. Valid inputs. No bigInts.

function toDayOfYear(arr) {
    //first, decide if it's a leap year.
    //and we'll set up an array with days per month.
    //then count them!
    let days = [
      [1, 31],
      [2, 28],
      [3, 31],
      [4, 30],
      [5, 31],
      [6, 30],
      [7, 31],
      [8, 31],
      [9, 30],
      [10, 31],
      [11, 30],
      [12, 31],
    ];
    
    if (arr[2]%4 ===0 && arr[2]%100 !== 0){
      //leap year!
      days[1] = [2, 29];
    } else if (arr[2]%4 === 0 && arr[2]%100 === 0 && arr[2]%400 === 0){
      //leap year!
      days[1] = [2, 29];
    } else {
      //not a leap year!  
    }
    
    let fullMonths = arr[1]-1;
    
    let daysPassed = 0;
    for (let i=0;i<fullMonths;i++){
      daysPassed += days[i][1];
    }
    daysPassed += arr[0];
    
    return daysPassed;
  }
  
  console.log(toDayOfYear([25, 12, 2017]), 359);
  console.log(toDayOfYear([31, 10, 1991]), 304);
  console.log(toDayOfYear(toDayOfYear([1, 5, 3000]), 121);
  
  
  