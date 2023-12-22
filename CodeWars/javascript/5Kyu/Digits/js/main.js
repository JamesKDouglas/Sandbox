//There is a 4 digit code. The goal is to find what the code is.
//It's a 4 digit number (base 10)
//ex: 1234
//The digits are unique. So you cannot have repeats like a code that is 1111

//The function will get an input describing how many digits are correct from it's last
//output.

//When it first begins the function will get a -1. It returns a 4 digit number that 
//represents the "guess" for what the code is. The code is then assessed
//This is an "attempt"
//and a number will be returned by the tester
//saying how many digits are correct.
//That then gets fed into the function again.

//No invalid inputs are expected.
//The code must be cracked in 16 attempts.


function game(matches){
    //Sounds to me like we should use a generator? 
    //The function should remember what it returned last time.
    //The rule about no repeat digits is important.
      
      //In the beginning, we must hazard a guess. 1234 is fine.
      
      //Then, we need to search to get at least one digit right.
      //We must hazard the guesses as efficiently as possible, so each digit must change
      //each time
      //That could involve shuffling like 4123 or incrementing like 2345
      //perhaps both. Go from 1234 to 6789 then shuffle 7891, 8912, 9123
      //So really this is just incrementing with a rollover after 9 back to 1.
      
      //So that could take up to 9 turns. But likely we won't get to the end. 
      //Before that happens we will get a 1 back - which means that at least
      //1 digit is correct.
      
      //But we have no idea which one.
      //So we have to find out by changing each one.
      //That takes up to 4 turns.
      //Note that during those turns if we continue to increment we may get back
      //more than 1. That's useful but confusing.
      //If we decrement all but 1 digit we will just get back the 1 
      //because the lower digits have been 'cleared'.
      
      //This suggests something recursive?
      
      //Suppose we do increment to try to identify which digit is the one. 
      //If we do get back a 2 we know we found a second correct digit, 
      //and which it is as well, which is great.
      //If we get back a 1 then we know that digit we changed isn't correct.
      //If we get back a 0 then we found the digit that is correct.
      
      //Once we find the correct one, we mark it.
    }``