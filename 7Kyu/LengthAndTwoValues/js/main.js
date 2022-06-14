function alternate(n, firstValue, secondValue){
    let arr = [];
    for (i=0;i<n;i++){
        if (i%2 ==0){
            arr.push(firstValue);
        } else {
            arr.push(secondValue);
        }
    }
    return arr;
}

console.log(alternate(5, true, false));