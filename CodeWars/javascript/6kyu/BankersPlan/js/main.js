function fortune(f0, p, c0, n, i) {
    // your code
    //f is the principal. f0 is the initial deposit.
    //c is the amount withdrawn each year. c0 is the initial withdrawal, the first year.
    //p is the percent interest accrued per year.
    //i is inflation
    //n is the number of years the banker has stated that this can continue.
    //fn-1 is  term that is mentioned but not explained. Same for cn-1.
    // fn may refer t the principle at year n.
    //interest, withdrawals etc all happen just once a year and basically at the same time.
    //the timing is actually important so it's too bad that is not explained well.
    //each term is rounded down to the nearest integer, which is just wierd but ok.

    let f = f0;//initialize
    let c = c0;
    let infRate = i/100;
    let interestRate = p/100;
    let interest = 0;
    
    //The way it is described, nothing happens during the entire first year, and that year is 1. So things only happen in year 2.

    for (j=2;j<=n;j++){
        //console.log(`year: ${j}`);
        //console.log(`amount withdrawn this year: ${c}`);

        interest = Math.floor(f*(interestRate));

        //console.log(`amount of interest gathered this year: ${interest}`)
        f = f + interest - c;
        c = Math.floor((1+infRate)*c); //The amount withdrawn the following year is the amount last year multiplied by inflation.

        //console.log(`principal: ${f}`);
    }
    if (f<0){
        return false;
    } else {
        return true;
    }
  }
//f0 = 100000, p = 1 percent, c0 = 2000, n = 15, i = 1 percent

fortune(100000, 1, 9185, 12, 1);