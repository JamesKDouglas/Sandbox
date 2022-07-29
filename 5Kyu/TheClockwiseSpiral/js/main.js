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

    for (let i=0;i<Math.sqrt(N);i++){//cycle through right, down, left up. That's one 'circle'.
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
        circleLevel++;
    }

    function moveRight(){
        for (let k=circleLevel;k<(N-circleLevel);k++){
            arr[y][x] = counter;
            x++;
            counter++;
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
        for(let k=N-circleLevel;k>circleLevel;k--){
            console.log(`fill a spot going left! x is ${x}. y is ${y} counter is ${counter}`);
            arr[y][x] = counter;
            x--;
            counter++;
        }
    }
    function moveUp(){
        console.log(`moving up! circleLevel is ${circleLevel}`)
        for(let k=N-circleLevel-1;k>circleLevel+1;k--){
            console.log(`fill a spot going up! x is ${x}. y is ${y} counter is ${counter}`);
            arr[y][x] = counter;
            y--;
            counter++;
        }
    }
    return arr;
}

let n=4;
console.log(createSpiral(n));