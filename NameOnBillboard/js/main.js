function billboard(name, price = 30){
  let sum =0;
  for (i in name){
    sum += price;
  }
  return sum;
} 