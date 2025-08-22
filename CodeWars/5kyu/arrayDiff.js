function arrayDiff(a, b) {

  for (let i = 0;i<a.length;i++){
    for (let j = 0;j<b.length;j++){
      if (a[i] == b[j]){
        //remove item
        a.splice(i,1);
        //It can be that the item exists more than once though, so we have to remove it more than once.
        i--;
      }
    }
  }
  return a;
}

let a = [11,-14,-19,-5,10,18,8,-14,-18,15,14,4,-10,-8,-1];
let b = [11,-14,-19,-5,10,18,8];

// expected [ -14, -18, 15, 14, 4, -10, -8, -1 ] to deeply equal [ -18, 15, 14, 4, -10, -8, -1 ]
console.log(arrayDiff(a,b));

// Yes the -14 exists in both lists and isn't removed. Why? Well because it appears twice. 