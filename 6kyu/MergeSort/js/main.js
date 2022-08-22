
function arrListGen(n){
    let arr = [];
    for (let i=0;i<n;i++){
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}

let n = 100;//list length
localStorage.setItem('arrList', JSON.stringify(arrListGen(n)));
let list = JSON.parse(localStorage.getItem('arrList'));

let startStep = 1;
console.log(mergeSort(list, startStep));
function mergeSort(list){

}