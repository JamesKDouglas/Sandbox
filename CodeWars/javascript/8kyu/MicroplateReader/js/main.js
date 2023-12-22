import fs from 'fs'
import path from 'path'

let text = fs.readFileSync(path.resolve(__dirname, '2023_09_06.text'), 'utf8')

console.log(text);
// function findAverage(array) {
//     // your code here
//     let avg = array.reduce((a,c)=>a+c,0)/array.length || 0;
//     return avg;
//   }