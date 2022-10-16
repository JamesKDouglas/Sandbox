function sevenAte9(str) {
    //str comes in as a sequence of numbers.
    let strArr = str.split('');
    // console.log(strArr);
    for ( let i = 0 ; i<strArr.length;i++){
        // console.log(`examining ${strArr[i]}`);
        if (strArr[i] == 7 && strArr[i+1] == 9 && strArr[i+2] == 7){
            // console.log(`found a sequence!`);
            strArr.splice(i+1,1);//remove the 9
            // console.log(`removed a 9`);
        }
    }
    // console.log(strArr);
    return strArr.join('');
}

console.log(sevenAte9("79712312"));