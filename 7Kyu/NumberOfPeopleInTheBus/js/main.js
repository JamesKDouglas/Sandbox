var number = function(busStops){
    let status =0;
    for (let i =0;i<busStops.length;i++){
      status += busStops[i][0];
      status -= busStops[i][1];
    }
    return status;
  }