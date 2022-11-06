//three arguments come in : Price card, price of an A ticket, fraction of normal ticket. Number types. 

// Nulls or zeros? Zero is just a zero. We don't divide so that's fine. Null becomes zero.

//System A and System B. System B involves a card/discount per ticket. Return first n where system B becomes cheaper overall.

//no timeouts/large numbers expected.
function movie(card, ticket, perc) {
    //how about an algebraic solution?
    //systemBCost = card + ticket*perc**numT;
    //systemACost = ticket*numT;
  
    //solve numT for systemACost=systemBCost.
    //card + ticket*perc**numT = ticket*numT
    //card = ticket*numT - ticket*perc**numT 
    //card = ticket(numT - perc**numT);
  
    //wolfram alpha shows us that for this form, 
    //numT = W(-log(perc))/log(perc)
    //where is the Omega function. So this is actually a bit difficult via the algebraic route.
    
    var card = card || 0;
      var ticket = ticket || 0;
      var perc = perc || 0;
    
      //declare number of tickets
      let numT = 0;
    
      let systemBCost = card;
      let systemACost = 0;
      
      //While loop: try each number of tickets. Do the calculation.
      while (Math.ceil(systemBCost)>=systemACost) {  
        numT++;
        systemBCost += ticket*((perc)**numT);
        systemACost += ticket;
        //console.log(systemBCost, systemACost);
      };
      // return # tickets.
      return numT;
  };
  
  console.log(movie(500, 15, 0.9), 43);
  console.log(movie(100, 10, 0.95), 24);
  