function narcissistic (value){
    let arr = Array.from(String(value), Number);
    let narcMath = 0; //if this is not initialized the code fails. I thought that JS takes care of that kind of stuff but I guess not.

    for (i=0; i<arr.length; i++){
        narcMath += Math.pow(Number(arr[i]),arr.length);
    }

    if (narcMath === value){
        return true;
    } else {
        return false;
    }
}