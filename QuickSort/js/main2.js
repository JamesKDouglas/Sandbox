// parameters: 
// return:
// example:
// pseudocode:

let n=100;//size of practice array.
let A= [];
A = JSON.parse(localStorage.getItem(`dataset size ${n}`));

console.log(A);
quickSort(0,A.length-1);
console.log(A);

function genData(n){
    let dataSet = [];
    for (let i=0;i<n;i++){
        dataSet.push(Math.floor(Math.random()*1000));
    }
    localStorage.setItem(`dataset size ${n}`, JSON.stringify(dataSet));
}

function quickSort(l,h){
    if (l<h){
        j=partition(l,h);
        quickSort(l,j);
        quickSort(j+1,h);
    }
}

function partition(l, h){
    let pivot = A[l];
    console.log(`begin with pivot ${pivot} at ${l}`);
    i=l;
    j=h;
    
    while (i<j){
        do{
            console.log(`increment i ${i}`)
            i++;
        } while (A[i]>=pivot);

        do{
            j--;
        } while (A[j]>pivot);
    }

    if (i<j){
        swap(A[i],i,A[j],j);
    }
    swap(A[l],l,A[j],j);
    console.log(`set new pivot, val ${A[l]} index ${l}`)
    return j;
}
function swap(X,x,Y,y){
    console.log(`swap! ${Y} at index  ${y} and ${X} at index ${x} `);
    A[y] = X;
    A[x] = Y;
}
