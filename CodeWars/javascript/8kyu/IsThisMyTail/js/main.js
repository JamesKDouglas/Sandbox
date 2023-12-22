function correctTail(body, tail){
    console.log(`body ${body}`);
    console.log(`tail ${tail}`);
    
    let sub = body.substring(body.length-1);
    console.log(`sub ${sub}`);
    if (sub === tail){
      return true;
    }
    else {
      return false;
    }
  }
  