function findJewels(jewels, stones){
    const map = {};
    let count = 0;
    for (const jewel of jewels){
        map[jewel] = true;
    }

    for (const stone of stones){
        if (map[stone]){
            count++;
        }
    }
    return count;
}

console.log(findJewels("aA","aAAbbb"), "3");
console.log(findJewels("bB","aAAbbb"), "3");
console.log(findJewels("ab","aAAbbb"), "4");
