// parameters: Input an object with single character elements, either number or string character.
// return: An object containing subobjects where each subobject is a unique set. Report all the possible unique sets.
// example:

// The example offered is,
// set numbers = {1, 2, 3, 4}

// {{1}, {2}, {3}, {4}, {1,2}, {1,3}, {1,4}, {2,3}, {2,4}, {3,4}, {1,2,3}, {1,2,4}, {1,3,4}, {2,3,4}, {1,2,3,4}}

// However that is incorrect because the syntax is wrong. Curly braces are for objects, and key value pairs would be required.
// the correct syntax for an example is to use angle brackets, and that is what is actually used in the test code.

//Note that the order does not matter. [2,3] is considered the same as [3,2] so only one of them is reported.

// pseudocode:
// Can I use sets for this to make it easier?
// Well, the advantage of the set object in JS is that lookup and changing is fast. We don't need that here so it's really worth working through the complexit of using Set.

// so use arrays. Even though we are supposed to be studying strings and this exercise is labeled 'strings' I'm tired of making long difficult pieces of code to satisfy that requirement. Arrays make more sense.

//First, clean up the input by removing duplicates. Ok it turns out Set is useful for that!

//Go by number of elements, generating all combinations. Then use Set to remove duplicates.
// This isn't the most effecient, but they do specify that the job size is small.

//From what I see from the example, we could sort this program into the lengh of the generated arrays. The elements of the set are either 1, 2,3 or 4 numbers long. 

//So can't we generate the elements on that basis?

//An outter loop counts upwards to set the number of elements long. An inner loop builds the element.

//The thing is, how many times does it go around? For the 1 number section it's easy, but how many elements are present for the 3 number one? How do you know all combinations have been generated? Not by the number of combos generated. Well, you could use that but you still need the algorithm for generating them.

//For that reason this will not work. Even though seeing the set you can analyze it that way, there needs to be a more inductive way of generating the elements of the set.

//One algorithm uses "holding digit constant".  Perhaps this could be combined with the length:
// Hold the start and end digits constant. 
// append digits from start, skipping ones already added until the length is reached. 
// Then change the start and end digits that are held.

// 1,2,3,4

// 1 digit long (1 digits held constant).

// initialize start and end index at 0 and 0.
// is the end past the end of the array?
// no. Carry on then.

// active index is 0.
// 1 is the constant. (That's the start and end index inclusive.)
// push "1" to the element being built.
// check length
// length is 1, which is the limit  -- so the active actually gets skipped the first time.
// end and add element to collection ([1]).
//

// change constant because the length was met? Nope.

// increment start and end index both by 1.
// active index is 1;
// is the end past the end of the array?
// no. Carry on then.
// 2 is the constant.
// push "2" to the element being built
// check length
// length is 1, which is the limit
// end and add element to collection.

// change constant because the length was met.

// 
// increment start and end index both by 1.
// index start is 2, index end is 2;
// is the end past the end of the array?
// no. Carry on then.
// 3 is the constant.
// push "3" to the element being built
// check length
// length is 1, which is the limit
// end and add element to collection.
//
// increment start and end index both by 1.
// index start is 3, index end is 3;
// is the end past the end of the array?
// no. Carry on then.
// 4 is the constant.
// push "4" to the element being built
// check length
// length is 1, which is the limit
// end and add element to collection.

// increment start and end index both by 1.
// index start is 4, index end is 4;
// is the end past the end of the array?
// Yes. 
// exit the loop.
// Increase the length by 1.

//2 digits long (1 digits held constant)

// set constant: Initialize start and end index as 0 and 0
// index start is 0, index end is 0;
// is the end past the end of the array?
// no. Carry on then.
// 1 is the constant.
// push "1" to the element being built
// check length
// length is 1, so the element is too short. Keep building it.
// 
// Initialize active: one more than the constant.
// active index is 1
// is the end past the end of the array?
// no. carry on.

// push array element from active index, "2" to the element being built
// length is 2, so the element is done being built.
// end loop and add element to collection.([1,2])

// set constant: don't increment start and end index. Constant remains the same.

// 1 is the constant.
// push "1" to the element being built
// check length
// length is 1, so the element is too short. Keep building it.
// 
// set active: increment active index both by 1.
// active index is 2.
// is the end past the end of the array?
// no. carry on.

// push "3" to the element being built
// length is 2, so the element is done being built.
// end and add element to collection. ([1,3])
// 
// 
// 
// 
// 

let numbers = [1, 2, 3, 4, 4];

console.log(estSubsets(numbers));

function estSubsets(arr) {
    //remove duplicates
    let unique = Array.from(new Set(arr));
    console.log(`${arr.length-unique.length} items removed to make unique set!: ${unique}`);

    let combos = [];
    let entry = [];
    
    //now make all possible combinations?


    //then use set again to filter out duplicates
    console.log(` sets generated: ${JSON.stringify(combos)}`);
    
}

