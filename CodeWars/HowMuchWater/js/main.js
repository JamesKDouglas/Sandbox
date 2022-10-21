//Parameters Normal amount of water (water). Normal load size (load). Actual load size (clothes).  
//Return how much water is needed. no units. Type? Number not string. rounded to 2 decimals.
//behavior/rules: can only handle double a normal load. "too much clothes" error if it's above that. also cannot do less than load - error "not enough clothes"
//Examples water -10, load -10, clothes -10
//return 10.
//water -10 load -10 clothes 14
//return (14-10)*1.1*(10)
//Pseudocode
//check if too many clothes. err if so.
//check if too few clothes. err if so.
//if we're ok for load size then calculate water needed.
//return water.
function howMuchWater(water, load, clothes){
    if (clothes<load){
        return "Not enough clothes";
    } else if (clothes>2*load){
        return "Too much clothes";
    }
    let extra = clothes-load
    let amount = water*Math.pow(1.1,extra);
    return Number(amount.toFixed(2));
}

console.log(howMuchWater(10,11,20));

//10*(20-11)*1.1
//10*9*1.1