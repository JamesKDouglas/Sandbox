let years=0;
let pop =0;
  
function nbYear(p0, percent, aug, p) {
  pop = p0;
  percent = percent/100;
  console.log(`${p0}, ${percent}, ${aug}, ${p}`)

  while (pop<=p){
    pop = pop*(1+percent) + aug;
    years++;
  }
  return years;
}
// 1500000, 2.5, 10000, 2000000 should give 10 but ugives 25

console.log(nbYear(1500000, 2.5, 10000, 2000000));