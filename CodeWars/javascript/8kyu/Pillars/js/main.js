//input is three numbers: number of pillars, distance between them and the 
//width of them

//Determine the distance between the first and last pillar.
//If there's only 1 then of course that will be 0
function pillars(numPill, dist, width) {
  if (numPill === 1) return 0;
  
  let distanceBetween = (numPill-1)*dist*100 + (numPill-2)*width;
  return distanceBetween;
}

console.log(pillars(1,10,10),0);