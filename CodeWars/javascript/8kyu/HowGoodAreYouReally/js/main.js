function betterThanAverage(classPoints, yourPoints) {
    let avg = classPoints.reduce((a,c)=>a+c,0)/classPoints.length;
    console.log(avg);
    console.log(yourPoints);
    if (yourPoints>avg){
      return true;
    } else {
      return false;
    }
  }
  