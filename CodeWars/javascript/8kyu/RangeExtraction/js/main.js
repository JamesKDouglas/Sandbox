console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

function solution (arr){
    let start;
    let finish;
    let newArr = [];
    let rangeEl;

    for(i=0;i<arr.length;i++){//Examine the array one by one.
        
        //Look for a sequence. If you find it, mark the start and end indexes
        start = i;
        if(arr[i] == arr[i+2]-2){//We only want sequences at least 3 long, hence the 2 instead of 1. After than I want to go one by one to detect the sequence length.
            while(arr[i] == arr[i+1]-1){ 
                i++;
            }
        }
        finish = i;
        //if a sequence is found, then assemble a string and stick it on newArr
        if(start!=finish){
            rangeEl = `${arr[start]}-${arr[finish]}`;
            newArr.push(rangeEl);
        } else {
            newArr.push(arr[i]);
        }
    }
    let numString = newArr.join(',');//turn that array into a string
    return(numString);
}