function check(a, x){
    //return  a.map(elem=>elem ===x?true:false);
    let searchResult = a.find(elem => elem === x);
    
    if (searchResult == 0){
        return true;
    }

    if (searchResult){
        return true;
    } else {
        return false;
    }

}