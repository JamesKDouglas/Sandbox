function cakes(recipe, available) {
    
    let counter = 0;

    let lengthCounter = Object.keys(recipe).length;

    let numCakes = new Array(lengthCounter);
    //Go through each ingredient in the recipe
    for (var key in recipe) {
        //for each ingredient, divide how much is available by how much is needed.
        //then round down to find the whole number of cakes that can be made with what is available.
        //put this number in an array.
        numCakes[counter] = Math.floor(available[key]/recipe[key]);  
        counter++;
    }
    //Find the minimum number in the array - which ingredient limits the number of cakes that can be made

    if (Math.min(...numCakes)){
        return Math.min(...numCakes); //if more than one cake can be made, return the number
    } else {
        return 0;//if we get a NaN result that means zero cakes can be made So return 0.
    };
}