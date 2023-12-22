//parameters: input an array of 8. It contains integers that indicate the mass of the balls. 7 are identical in mass. One is heavier.
// return: the index of the heavier one.
// example: [15,11,11,11,11,11,11,11] should return 0.
// [11,11,11,11,11,11,11,14] should return 7.
// pseudocode:
//This would be easy with Math.min and arr.find. But they require the use of a function called scales.getWeight which adds the values in two arrays together, as a scale pan would. The function can only be used 4 times.
//scale.getWeight returns -1 if the left pan is heavier, 0 if they are the same and 1 if the right pan is heavier.
//So imagine we are using a real scale and have 8 balls that look the same and are trying to find the heaviest with a minimal amount of effor/weighing.
//Divide the balls into 2 groups.
//Weigh each group
//Take the heaviest group and split it in two.
//weigh each group
//take the heaviest group and split it in two/
//weigh each group.

//I screwed this up by believing we were looking for the light rather than heavy ball.

//There's a lot of repetition here and I'm sure it could use refactoring. But I don't like this problem, it's annoying with the hidden function and fixed # balls. 

function findBall(scales) {
    //test case heavy ball is in 0
    let leftPan = [0,1,2,3];
    let rightPan = [4,5,6,7];
    let heavyBall;

    let w = scales.getWeight(leftPan, rightPan);//expect -1:left pan is heavier.

    if (w == -1){//left pan is heavier so the heavy ball must be in that pan
        console.log(`I see the left pan is heavier`);
        let leftPanSub = [0,1];
        let rightPanSub = [2,3];
        let ww = scales.getWeight(leftPanSub, rightPanSub);
        
        if (ww == -1){//left pan is heavier so the heavy ball must be in that pan
            let leftPanSubSub = [0];
            let rightPanSubSub = [1];
            let www = scales.getWeight(leftPanSubSub, rightPanSubSub);

            if (www == -1){//The left pan must be the heavy ball
                heavyBall = 0;
            }
            if (www == 1){//The left pan must be the heavy ball
                heavyBall = 1;
            }
        }

        if (ww == 1){//right pan is heavier so the heavy ball must be in that pan
            let leftPanSubSub = [2];
            let rightPanSubSub = [3];
            let www = scales.getWeight(leftPanSubSub, rightPanSubSub);

            if (www == -1){//The left pan must be the heavy ball
                heavyBall = 2;
            }
            if (www == 1){//The left pan must be the heavy ball
                heavyBall = 3;
            }
        }

    }

    if (w == 1){//right pan is heavier so the heavy ball must be in that pan
        console.log(`I see the right pan is heavier`);
        let leftPanSub = [4,5];
        let rightPanSub = [6,7];
        let ww = scales.getWeight(leftPanSub, rightPanSub);
        
        if (ww == -1){//left pan is heavier so the heavy ball must be in that pan
            let leftPanSubSub = [4];
            let rightPanSubSub = [5];
            let www = scales.getWeight(leftPanSubSub, rightPanSubSub);

            if (www == -1){//The left pan must be the heavy ball
                heavyBall = 4;
            }
            if (www == 1){//The left pan must be the heavy ball
                heavyBall = 5;
            }
        }

        if (ww == 1){//right pan is heavier so the heavy ball must be in that pan
            let leftPanSubSub = [6];
            let rightPanSubSub = [7];
            let www = scales.getWeight(leftPanSubSub, rightPanSubSub);

            if (www == -1){//The left pan must be the heavy ball
                heavyBall = 6;
            }
            if (www == 1){//The left pan must be the heavy ball
                heavyBall = 7;
            }
        }

    }

    return heavyBall;

}

// function findBall(scales) {
//     let leftPan = [0,1,2,3];
//     let rightPan = [4,5,6,7];
//     let lightBall;
  
//     let w = scales.getWeight(leftPan, rightPan);

//     if (w == 1){//right pan is heavier so the light ball must be in the left pan
//         let leftPanSub = [0,1];
//         let rightPanSub = [2,3];
//         let ww = scales.getWeight(leftPanSub, rightPanSub);

//         if (ww == 1){//right pan is heavier so the light ball must be in the left pan
//             let leftPanSubSub = [0];
//             let rightPanSubSub = [1];
//             let www = scales.getWeight(leftPanSubSub, rightPanSubSub);

//             if (www == 1){//The left pan must be the light ball
//                 lightBall = 0;
//             }
//             if (www == -1){//The right pan must be the light ball
//                 lightBall = 1;
//             }

//         }
    
//         if (ww == -1){//left pan is heavier so the light ball must be in the right pan
//             let leftPanSubSub = [2];
//             let rightPanSubSub = [3];
//             let www = scales.getWeight(leftPanSubSub, rightPanSubSub);

//             if (www == 1){//The left pan must be the light ball
//                 lightBall = 2;
//             }
//             if (www == -1){//The right pan must be the light ball
//                 lightBall = 3;
//             }
            
//         }
//     }

//     if (w == -1){//left pan is heavier so the light ball must be in the right pan
//         let leftPanSub = [4,5];
//         let rightPanSub = [6,7];
//         let ww = scales.getWeight(leftPanSub, rightPanSub);

//         if (ww == 1){//right pan is heavier so the light ball must be in the left pan
//             let leftPanSubSub = [4];
//             let rightPanSubSub = [5];
//             let www = scales.getWeight(leftPanSubSub, rightPanSubSub);

//             if (www == 1){//The left pan must be the light ball
//                 lightBall = 4;
//             }
//             if (www == -1){//The right pan must be the light ball
//                 lightBall = 5;
//             }
//         }
    
//         if (ww == -1){//left pan is heavier so the light ball must be in the right pan
//             let leftPanSubSub = [6];
//             let rightPanSubSub = [7];
//             let wwww = scales.getWeight(leftPanSubSub, rightPanSubSub);

//             if (www == 1){//The left pan must be the light ball
//                 lightBall = 6;
//             }
//             if (www == -1){//The right pan must be the light ball
//                 lightBall = 7;
//             }

//         }
//     }

//     return lightBall;

// }


// The example loads with:

// // call scales.getWeight() max 4 times
// // return indexOfHeavyBall;
// for (var i = 1; i < 8; i++) {
//     var leftPan = [i - 1];
//     var rightPan = [i];
//     var w = scales.getWeight(leftPan, rightPan);

//     if (w === -1) {// left pan is heavier
//         return leftPan[0];
//     }

//     if (w === 1) {// right pan is heavier
//         return rightPan[0];
//     }
// }