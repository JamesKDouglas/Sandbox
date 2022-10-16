
function nbYear(p0, percent, aug, p) {
    let years=0;
    let pop =0;
  
    pop = p0;
    console.log(`${p0}, ${percent}, ${aug}, ${p}`)
    percent = percent/100;

    while (pop<p){
        pop = Math.floor(pop*(1+percent) + aug);//you can't have a fractional person so I guess this makes sense to require.
        years++;
        console.log(years);
        console.log(`${p0}, ${percent}, ${aug}, ${p}, ${pop}`)
    }

    return years;   
}
// 1500000, 2.5, 10000, 2000000 should give 10 but ugives 25?

// console.log(nbYear(1500000, 2.5, 10000, 2000000));

// console.log(nbYear(1500000, 0, 10000, 2000000));//here the pop reaches exactly the limit on the dot. If the while loop uses pop<=p then an extra year is appended and Codewars doesn't like that.

// 1000, 2, 50, 1214
// console.log(nbYear(1000, 2, 50, 1214));
// This returns 3 but codewars wants 4. The difference is only 0.2. But I guess you can't have .2 of a person so I should use Math.floor.
