// parameters: Input an array with any elements. However, note that this function will be a method attached to an object. So it will operate on this rather than recieve an array through round brackets.
// return: The reversed version of the array.
// example: [1,2,3,4] is returned as [4,3,2,1]
// pseudocode: 

// use a for loop and a temporary variable. We're not allowed to just construct a new array. The original must be mutated.
// Pop the end off and put it in the temporary variable.
// splice the temporarily held value into position i.

//add a second dimension then sort by that? Certainly possible.

let arr = new Array();
arr = [1,2,3,4];

Array.prototype.reverse = function() {
    console.log(this);
    let temp;
    for (let i=0;i<this.length;i++){
        temp = this.pop();
        this.splice(i,0,temp);
    }
    return this;
};

console.log(arr.reverse());