
// function bouncyRatio(percent) {
//     percent = percent*100; //The Codewars author mistakenly calls a decimal a percent! What is passed in is not a percent but a decimal.
//     if (percent<0 || percent>99){
//         return "error. percent cannot be under 0 or over 99";
//     }
//     // console.log(percent);
//     let nonBouncyCount = 99; //no number up to 99 is bouncy so why check, we will begin here.
//     let bouncyCount = 0;
//     let bouncyCountPrime = 0;
//     let ratio;

//     for (let i=100;i<100000;i++){ //I might change this to a while loop? for testing just use for. Nothing is bouncy below 100
        
//         //is i bouncy?

//         bouncyCountPrime = bouncyCount;
//         // console.log(`inspecting ${i}`);

//         let counter = 0; //This is to detect the bounce. If counter goes up then down again we achieved bouncy!
//         let counterPrime = 0;

//         let iArr = i.toString().split('');

//         for (let j=0;j<iArr.length-2;j++){//the -2 is just because a bounce takes 3 figures so if we get to the last 2 and there has been no bounce, there cannot be.
//             // console.log(`iArr[j]: ${iArr[j]}`);
//             counter = +iArr[j+1] - +iArr[j];//If this is positive then we're going upwards
//             // console.log(`counter: ${counter}`);
//             counterPrime = +iArr[j+2] - +iArr[j+1]; //One issue with this method is if you get something like 4335 no bounce is detected. It can only detect 3 digit bounces.
//             // console.log(`counterPrime: ${counterPrime}`);
//             if (counter>0 && counterPrime<0){
//                 //bounce detected!
//                 // console.log(`upwards bounce detected!`)
//                 bouncyCount++;
//                 break;//carry on to next i;
//             } else if (counter<0 && counterPrime>0){
//                 //bounce detected!
//                 // console.log(`downwards bounce detected!`)
//                 bouncyCount++;
//                 break;//carry on to next i;
//             }
//         }

//         if (bouncyCount == bouncyCountPrime){
//             nonBouncyCount++;
//             //no bounce detected so count this as a nonBouncy
//         }
//         // console.log(`bouncyCount: ${bouncyCount} nonBouncyCount: ${nonBouncyCount}`)
    
//         if (nonBouncyCount>0){//I don't want to get a premature return.
//             ratio = bouncyCount/(nonBouncyCount+bouncyCount);
//             // console.log(`percentage bouncy is : ${ratio*100}`);
//             if (ratio*100 >= percent){
//                 // console.log(`time to return`);
//                 return i;
//             }                       
//         }   
//     }
// }

//Haha ok so the above doesn't work at all for 4 digit numbers


function bouncyRatio(percent) {
    percent = percent*100; //The Codewars author mistakenly calls a decimal a percent! What is passed in is not a percent but a decimal.
    if (percent<0 || percent>99){
        return "error. percent cannot be under 0 or over 99";
    }
    // console.log(percent);
    let nonBouncyCount = 99; //no number up to 99 is bouncy so why check, we will begin here.
    let bouncyCount = 0;
    let bouncyCountPrime = 0;
    let ratio;

    for (let i=100;i<100000;i++){ //I might change this to a while loop? for testing just use for. Nothing is bouncy below 100
        
        //is i bouncy?

        bouncyCountPrime = bouncyCount;
        // console.log(`inspecting ${i}`);

        let counter = 0; //This is to detect the bounce. If counter goes up then down again we achieved bouncy!
 
        let upFlag = null;
        let downFlag = null;

        let iArr = i.toString().split('');

        for (let j=0;j<iArr.length;j++){//the -2 is just because a bounce takes 3 figures so if we get to the last 2 and there has been no bounce, there cannot be.

            // console.log(`iArr[j]: ${iArr[j]}`);
            counter = +iArr[j+1] - +iArr[j];//If this is positive then we're going upwards
            // console.log(`counter: ${counter}`);
            
            if (counter>0){
                upFlag = true;
                // console.log(`going up!`);
            }
            if (counter<0){
                downFlag = true;
                // console.log(`going down!`);
            }
            // console.log(`upflag: ${upFlag} downFlag: ${downFlag}`)
            if (upFlag == true && downFlag == true){
                //bounce detected!
                // console.log(`bounce detected!`)
                bouncyCount++;
                break;
            }
        }

        if (bouncyCount == bouncyCountPrime){
            nonBouncyCount++;
            //no bounce detected so count this as a nonBouncy
        }
        // console.log(`bouncyCount: ${bouncyCount} nonBouncyCount: ${nonBouncyCount}`)
    
        // if (nonBouncyCount>0){//I don't want to get a premature return.
            ratio = bouncyCount/(nonBouncyCount+bouncyCount);
            // console.log(`percentage bouncy is : ${ratio*100}`);
            if (ratio*100 >= percent){
                // console.log(`time to return`);
                return i;
            }                       
        // }   
    }
}


console.log(bouncyRatio(0.9));