// parameters: input an array and an index.
// return: return the array with that index missing.
// example: [1,2,3] index 1 returns [1,3]
// pseudocode:
// The point of this is to illustrate deep vs shallow copy. If you don't perform a copy operation then you will be trying to work with the array via reference. This causes side effects because you are trying to modify the original array inside a function. Ina normal js environment this may work(?) but creating side effects like this is a bad practice.
// in Codewars it may cause the function to not pass testing for some unexplained reason.

function removeNthElemen(arr, n){
	let arrCopy = arr.slice();//was let arrCopy = arr;
	arrCopy.splice(n,1);
	return arrCopy;
}
