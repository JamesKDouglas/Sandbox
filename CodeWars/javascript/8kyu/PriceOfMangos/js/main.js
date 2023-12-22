//Imagine there is a grocery store selling mangoes. They have a deal on that you can buy
// 3 mangos for the price of  2.

// the input will be the number of mangos the customer is buying and the price of each
// if someone only gets 2 mangos they just get those 2, and don't bother with collecting their free one.

//ex
//mango(2,3) => 6
//mango(5,3) => 12
//mango(9,5) => 30

function mango(num, price){
    let freeMangos = Math.floor(num/3);
    let paidMangos = num - freeMangos;

    return paidMangos*price;
}

console.log(mango(2,3), 6);
console.log(mango(5,3), 12);
console.log(mango(9,5), 30);