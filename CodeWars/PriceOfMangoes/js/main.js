function mango(quantity, price){
  let freeMangoes = Math.floor(quantity/3);
  let paidMangoes  = quantity-freeMangoes;
  return paidMangoes*price;
}