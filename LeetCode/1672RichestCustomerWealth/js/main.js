/**
 * @param {number[][]} accounts
 * @return {number}
 */

//Input a two dimensional array. The first dimension is the customer, the second dimension is the amount of money they have, with an index for each bank. 

//data type inside array number integers. No string. All dollars. No dollar signs. 

//return a number integer - the wealthiest customer. No identity for the customer.

// No nulls expected.

//[[1,2,3],[3,2,1]] => 6;
//[[1,5],[7,3],[3,5]] => 10;
//[[2,8,7],[7,1,3],[1,9,5]] => 17;

//no timeouts.

var maximumWealth = function(accounts) {
    let newArr = [];
    let sum=0;
    
    //for loops    
    //Go through each customer. 
    for (let i=0;i<accounts.length;i++){
        sum=0;
        //Add the wealth from all the accounts for the customer.
        for (let j=0;j<accounts[i].length;j++){
            sum += accounts[i][j];
        }
        //Add the wealth to a new array.
        newArr.push(sum);
    }
    
    //Math.max to find largest value.
    return Math.max(...newArr);
};

console.log(maximumWealth([[1,2,3],[3,2,1]]), 6);
console.log(maximumWealth([[1,5],[7,3],[3,5]]), 10);
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]), 17);