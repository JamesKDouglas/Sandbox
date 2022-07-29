// parameters: Input a number N. This will be the size of the rectangular array.
// return: A 2 dimensional array, square, with increasing numbers arranged
// example
// for N=3:
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// which is represented also this way,
// 1    2    3    
// 8    9    4    
// 7    6    5   
// pseudocode:
// How about a wayfinder sort of algorithm - always turn right when you bump into something.
// Or, instead 4 operation: right, down, left, up. This is filling the array. Keep a count of the position/status - how many times have I gone down? Left? Up?
// The square being filled basically get smaller with each circle.
// 1   2   3   4
// 12  13  14  5
// 11  16  15  6
// 10  9   8   7



function createSpiral(N) {
    let circleLevel = 0;

    let x = 0; //current position
    let y = 0;

    let counter = 1;//number of positions filled

    // let arr = new Array(N);

    // for (let i=0;i<N;i++){
    //     arr.push(new Array(N));//declare an empty array of NxN.
    // }

    let arr = new Array(N).fill(0).map(() => new Array(N).fill(0));
    console.log(arr);

    let firstCircleFlag = true;//The first circle round has no "tail" so the right movement starts 1 position to the right further than all other times when using the circlecounter technique

    for (let i=0;i<Math.sqrt(N);i++){//cycle through right, down, left up. That's one 'circle'. The 'circle' is completed when we -start- going up.
        console.log(`begin a "circle". circleLevel: ${circleLevel} i: ${i}`)
        for (let j=0;j<=3;j++){
            console.log(`direction changed, with j as ${j}`);
            if (j==0){
                console.log(`time to move right`);
                moveRight();
            } else if (j==1){
                console.log(`time to move down`);
                moveDown();
            } else if (j==2){
                console.log(`time to move left`);
                x--;
                y--;
                console.log(`x is ${x}. y is ${y}`);
                moveLeft();
            } 
            else if (j==3){
                console.log(`time to move up`);
                x++;
                y--;
                moveUp();
            }
        }
        
    }

    function moveRight(){
        let noTail = 0;
        if (firstCircleFlag = true){
            noTail = 1;//shift start position 1 to the right if this is the beginning.
        }

        for (let k=circleLevel+noTail;k<(N-circleLevel);k++){
            console.log(`filling position x: ${x}, y: ${y}`)
            arr[y][x] = counter;
            x++;
            counter++;
            firstCircleFlag = false;
        }
    }
    function moveDown(){
        for(let k=circleLevel;k<(N-circleLevel);k++){
            arr[y][x] = counter;
            y++;
            counter++;
        }
        
    }
    function moveLeft(){
        console.log(`Moving left. N is ${N} circleLevel is ${circleLevel}`);
        for(let k=N-circleLevel-1;k>circleLevel;k--){
            console.log(`fill a spot going left! x is ${x}. y is ${y} counter is ${counter}`);
            arr[y][x] = counter;
            x--;
            counter++;
        }
    }
    function moveUp(){
        console.log(`moving up! circleLevel is ${circleLevel} N is ${N}`)
        let startCircleLevel = circleLevel;//I want to start at y is the 
        circleLevel++;
        console.log(`k will start at ${N-startCircleLevel-1} and decrease until it is outside the continue condition, ${circleLevel}`)
        console.log(`circleLevel is ${circleLevel}`)
        for(let k=N-startCircleLevel-1;k>circleLevel;k--){
            console.log(`fill a spot going up! x is ${x}. y is ${y} counter is ${counter}`);
            arr[y][x] = counter;
            y--;
            counter++;
        }
        x++;
        y++;
    }
    return arr;
}

let n=4;
console.log(createSpiral(n));

// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 32, 33, 34, 35, 36, 37, 38, 39, 10 ],
//   [ 31, 56, 57, 58, 59, 60, 61, 40, 11 ],
//   [ 30, 55, 72, 0, 0, 0, 62, 41, 12 ],
//   [ 29, 54, 71, 0, 0, 0, 63, 42, 13 ],
//   [ 28, 53, 70, 0, 0, 0, 64, 43, 14 ],
//   [ 27, 52, 69, 68, 67, 66, 65, 44, 15 ],
//   [ 26, 51, 50, 49, 48, 47, 46, 45, 16 ],
//   [ 25, 24, 23, 22, 21, 20, 19, 18, 17 ] ] 
//   to deeply equal
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 32, 33, 34, 35, 36, 37, 38, 39, 10 ],
//   [ 31, 56, 57, 58, 59, 60, 61, 40, 11 ],
//   [ 30, 55, 72, 73, 74, 75, 62, 41, 12 ],
//   [ 29, 54, 71, 80, 81, 76, 63, 42, 13 ],
//   [ 28, 53, 70, 79, 78, 77, 64, 43, 14 ],
//   [ 27, 52, 69, 68, 67, 66, 65, 44, 15 ],
//   [ 26, 51, 50, 49, 48, 47, 46, 45, 16 ],
//   [ 25, 24, 23, 22, 21, 20, 19, 18, 17 ] ]

  //