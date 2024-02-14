function* roundRobin(gen1, gen2) {
  let currentValue;

   while(true) {   
     currentValue = yield gen1.next(currentValue).value;
     currentValue = yield gen2.next(currentValue).value;
   }
  
}

// ===== UTILITIES =================================================================================
  // SAMPLE GENERATORS:
  function* countUp() {
    for (let n = 0;;) {
      const num = yield n
      n = (num !== undefined) ? num : n + 1
    }
  }


  function* splitString() {
    for (let s = [''];;) {
      for (const c of s) {
        const newStr = yield c
        if (newStr !== undefined) {
          s = [...newStr]
          break
        }
      }
    }
  }


  // =====================================================================================================

const factoryLine = roundRobin(countUp(), splitString());
console.log(factoryLine);

// -
const yielded = factoryLine.next('hey').value;
console.log(yielded);

const next10Elems = slice(factoryLine, 10);
console.log(next10Elems);