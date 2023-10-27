const mangle = (integers) => {
  let lostNum = integers.pop();
  for (let i=0;i<lostNum;i++){
    console.count();
  }
  return integers;
};

const guess = (mangled) => {
  console.log(mangled);
  return console.count();
}

console.log(guess(mangle([-23,12,-46,13,1,7])), 7);