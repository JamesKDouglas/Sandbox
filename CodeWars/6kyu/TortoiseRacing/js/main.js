// parameters: 
// return:
// example:
// pseudocode:
//
//
function race(v1, v2, g) {
    if (v1>v2) return null;
  
  //time passes at the same rate for both turtles. The distance they 
  //are from the start is d = t*v+lead. lead for turtle B is zero.
  //so dA = t*vA + leadA, dB=t*VB. solve for t when dA = dB.
  // t = (dA-leadA)/vA. t = dB/vB. (dA-leadA)/vA = dB/vB
  
  // also note that this can be visualized by two lines on a chart with the form
  // y=mx+b. Find x where they intersect. m is the speed, b is the start distance
  
  //t*vB = t*vA + leadA
  //vB = vA + leadA/t
  //vB-vA = leadA/t
  //t = leadA/(vB-vA)
    let t = 0;
    let leadA = g;
    let vA = v1;
    let vB = v2;
  
    t = leadA/(vB-vA);
  
    //this will give the lead in hours. Convert to hh:mm:ss
    var n = new Date(0,0); 
    n.setSeconds(+t * 60 * 60); 
    //slice off the actual date then convert to an array with numbers using map(Number) .
    return n.toTimeString().slice(0, 8).split(":").map(Number);
    
}
