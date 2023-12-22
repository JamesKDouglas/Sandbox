//The input will be a number of handshakes that takes place at a meeting. 

//The goal is to estimate the number of people at the meeting.
//Some people/pairs don't shake hands so the number will be smaller than the real
//number of attendees. It's just an estimate.

//No two pairs shake hands twice. They only shake hands one time.

//Of course someone from that pair may shake hands with someone else.
//So we can't just double the handshakes. There is no way to track if the person has been counted already.

//Return the minimum number of people required to perform the handshakes counted.


//ex:
// 0 => 0
// 1 => 2
// 3 => 3
// 7 => 5

//edge cases? none.
//timouts? numbers are modest.


function getParticipants(handshakes){
  //What I'm envisioning is that if a group of people stand in a circle,
  //The handshakes are connections in a mesh network. The people are the points.
  //So search for node estimation mesh network
  
  //borrowing from mesh network, the physical links required for each node
  //are (n-1) for the first node. Then (n-1) for the second node. Each node requires
  //n-1 connections.
  //the number of physical links required is n(n-1)/2, apparently.
  //ex 15 = n(n-1)/2
  // 6(5)/2 = 15
  // n = 6
  
  //for our examples, does that check out?
  //0 handshakes 0 = n(n-1)/2. 0 people n=0. or 1 person. But we report the min.
  //1 handshakes 1 = n(n-1)/2. if n=2 it is solved => 2(1)/2. so 2 people.
  //2 handshakes 2 = n(n-1)/2. if n=3 it is not solved. You cannot have a mesh network with only 2 connections.
  //So the mesh network metaphor isn't that helpful.
  
  //How about combinatorics then.
  //If you have 2 handshakes you could have a max of 4 people.
  //You could also have only 3 because 1 person shakes hands twice.
  //So you have the set [a,b], [a,c] from [a,b,c]. [b,c] handshake does not occur.
  
  //So the problem is, given the number of pairs, find the minimal set length.
  //pairs do not repeat.
  
  //we could find the combinations possible for any length of set
  //ex set length=>combos:  1 => 0, 2 => 1, 3 => 3. Then go to the highest. For example,
  //there is no set length that gives 2 handshakes so go to 3. 3 people.
  //I think that would work. It seem a bit clunky.
  //Well, you have to calculate the combinatorics. 
  //Number of unique combinations of length k possible from a set of length n 
  //is n!/(k!(n-k)!)
  //k is always 2 for us. 2! is 2.
  
  //first, find the set length that gives the number of unique combinations 
  //equal to at least the number of handshakes plus 1.
  //start at the number of handshakes+1 and search down.
  //Report the length of the set that gives enough.

  //the factorial function
  
  //early return to avoid dividing by 0
  if (handshakes === 0){
    return 0;
  }
  
  function getFact(n){
    let fact = 1;
    for (let i=1;i<=n;i++){
      fact *= i;
    }
    return fact;
  }
  
  let k=2;
  let maxSetLength = handshakes;
  
  for (let i=maxSetLength;i>0;i--){
    let combos = getFact(i)/(k*getFact(i-k));

    if (combos === handshakes ){
      return i;
    } else if (combos < handshakes ){
      return i+1;
    }
  }
}

console.log(getParticipants(0), 0);
console.log(getParticipants(1), 2);
console.log(getParticipants(3), 3);
console.log(getParticipants(7), 5);
