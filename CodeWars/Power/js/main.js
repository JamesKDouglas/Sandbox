function numberToPower(number, power){
    console.info(Math.log2(1024));
    let output = 1;
    for (let i=0;i<power;i++){
      output = output*number;
    }
    return output;
  }