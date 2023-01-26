// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

//Create a function that creates objects. That is, a class.
//The object created will represent a user. It will track the user's 'rank'
//The user will have rank between -8 and 8, not including 0 and as an integer.
//The user will also perform activities. The activities have an associated 'rank'
//Performing activities increase the user's rank according to a 
//simple equation that accounts for the difference between the user's rank 
//and the activity's rank.

//Rank of a user has a 'subrank' called progress. Progress is from 0 to 100.
//When a user completes an activity this progress property holds a value that
//tracks their movement to the next rank

//There will be a method that returns the user's current rank and 'progress',
//that is rank and fractional rank.

//The User object will have:
//Properties: Rank, Progress
//Methods: Show rank, increment progress, show progress.

//"show progress" just returns an integer of the progress. It does not do a console log etc.

//new users start at rank -8 with progress 0.

class User {
    //Declare the rank array so we can keep track of the rank just by incrementing an index
    //That helps us to skip 0;
    //Declare all the properties in the constructor
    constructor(){
      this.rankArr = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];
      this.rankLevel = 0;
      this.rank = this.rankArr[this.rankLevel];
      this.progress = 0;
    }
  
    //Then declare methods to modify the properties.
    incProgress(activityRank){
      this.progress += 10*(this.rank-activityRank)**2;
      while (this.progress>=100){
        this.rankLevel++;
        this.progress = this.progress - 100;//It is possible for a user to increase beyond 100: (-8-8)^2 = 256;
      }
      //update state
      this.rank = this.rankArr[this.rankLevel];
    }
    
  }
  
  var user = new User();
  
  console.log(user.rank, -8);
  console.log(user.progress, 0);
  user.incProgress(-7);
  console.log(user.progress, 10);
  user.incProgress(-5) // will add 90 progress
  console.log(user.progress, 0); // progress is now zero
  console.log(user.rankLevel, 1);//Rank was increased.
  console.log(user.rank, -7); // rank was upgraded to -7