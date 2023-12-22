// parameters are just a positive integer array that represents the stock price. 
// return the max money that can be made from trading in this simplified trading environment.
// example: ideal_trader([1.0, 1.0, 1.2, 0.8, 0.9, 1.0]) -> 1.5 
//The trader here sells from 1 to 1.2. Then takes that amount and sells again from 0.8 to to 1.0. Note that he does not sell at 0.9, buy then sell at 1.0. He waits until 1.0.
//So that means selling before a drop as well as selling right before the end if things have gone up.
// pseudocode

//Keep track of the money he has in the bank and in the market. It starts as 1.0 in the market, 0 in the bank.
// The trader examines the elements one by one. If the value goes up, do nothing. If you can see it's about to go down, then sell - update the money in the bank. If the end is nigh, then sell. 

//Note that this trader never gets stuck in a down cycle because they always sell on the cusp - they can predict the next fall and there is no cost to the transaction.
//during buy in to the market the trader always puts all their money in. They know the market will go up and that is the only time they put money in, putting all of it. It will be helpful therefore to record the number of stocks they hold. 

//normally in a market if the array represents stock prices you would get a situation like: invest at 1.0. it goes up to 1.2, then down to 1.1. You sold at 1.2 so you have 1.2 now. It continues to go down to 0.8. Then it goes up to 0.9, So you bought at 0.8 and sold at 0.9. Alright. But you don't have 0.9 now. You have more than that. 

//So really it's easier to work with fractions. 

//We do not have to model behavior. Just count the increments when the price goes up, then combine them.

function ideal_trader(prices){

    let money = prices[0]; //This seems to be an assumption, that you start with the value of the first index?
    let pricePaid = prices[0];//So they literally begin by owning 1 stock. After that any fraction of stocks can be purchased.

    for (let i=0;i<prices.length;i++){
        console.log(`pricePaid: ${pricePaid}, money held: ${money}, current price: ${prices[i]} next price: ${prices[i+1]}`)
        if (prices[i] <= pricePaid){
            //prices went down or were the same so count no increase
            //but record that this is the new price this clairvoyant would have paid.
            pricePaid = prices[i];
            continue;
        }
        if (prices[i]>pricePaid && prices[i+1] < prices[i]){//It's larger than what you paid for it, and also about to decrease. Or, it's larger than what you paid for it and trading is about to end.
            console.log(`sell becauses we are at a peak!`)
            money = money*(1+(prices[i] - pricePaid)/pricePaid);
        }
        if (prices[i]>pricePaid && i == prices.length-1){
            console.log(`sell because we are about to stop trading!`)
            money = money*(1+(prices[i] - pricePaid)/pricePaid);
            pricePaid = prices[i];
        }
    }
    return money;
}

sPrices = [1.09, 1.09, 1.09, 1.09];
console.log(ideal_trader(sPrices));

//Oops this is in Codewars only in languages other than Javascript. So I can't actually submit it there.