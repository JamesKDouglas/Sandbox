// Parameters - 2 locations ('nodes') and 1 array of connections (arcs). The connections are one way.
// Return - true or false. Can you travel from one node to the next?
// Example - 
// var arcs [{ start : "a", end : "b" },
// { start : "a", end : "a"}];
// solve_graph("a", "b", arcs);
// return true. b can be reached from a - in fact it's very easy.

// Pseudocode -
// Early returns first:
// If the nodes are the same return true.
// Check single connections - return true if one arc has a matching start/end pair.
// If the node location, either start or end, does not exist then return false.

// Then the complicated bit - actual searching through what could be a large graph with loops and dead ends.
// What sort of search should we do?
// Here is what I suggest this. I call it "circle search" because we move from node to node, searching around the node for the destination. Arcs explored are recorded to prevent infinite looping and progress the search in a systematic manner. At some point as we reach the end of a branch the end points are marked as dead ends or loops by being added to the array of arcsAlreadyExplored. If those arcs show up again in the search they are either ignored or removed before further searching happens.

//perhaps I need 4 arc collections: 
//alreadyExplored: a record of dead ends and loops, /
//activelyExploring : arcs connected to current node. 
//exploreMap: a working array that contains more of a history. This is a multidimensional array.
//Of course there is also the original, arcs.

// 1) Search the arc collection for arcs that have the start node. Put these arcs into arcsBeingExplored. 
// 1a) (doesn't need to run the first time) Remove arcs that have already been explored (in arcsAlreadyExplored) from arcsBeingExplored. Note that I don't want to give up on a whole branch just because a single arc leads there. However, the way the algorithm works righ now that isn't possible. If there is an arc that leads to a group, the arc is traversed then the group is explored. So I can just add arcs to an array of ones that are already explored, then not explore them a second time.
// 1b) (doesn't need to run the first time) If arcsBeingExplored has length zero then either no edges are found with this origin and this is a dead end. Or I've already tried it and it's a loop. Move on to the next edge to explore if there is one. Here we have to 'collapse the path' and go backwards, to see if there are things to explore that we previousy breezed past.
// 2) Collect, into a second array, all the arcs that contain the origin as the start position. Replace the arcsBeingExplored -element- with this second array. Note that this will initially be a multidimensional array containing arcs - so 1x2 dimensions (form [[a,b],[b,c]]. Later, each arc will be replaced with connecting arcs as the node connected to is explored (ex form [[[b,e],[b,g]], [b,c]]). This creates an increasingly large multidimensional array as the graph is explored. Whether I want to perform cleanup as we explore or not is a separate issue. Normally as we explore outwards from a start position the 
// 3) Record that these indexes have been explored, in an array. This is important to prevent going around in a loop
// Search through that collection for the destination in the second position (position 1 in the array).

// 4) Check the second position of the array for the destination.
// 5) If you find it, return true - job is complete and the route is found.
// 6) If you don't find it, take the destination of the first element in the array. This becomes the new origin. Carry from 1.
// This involves recursion. 

//Example:
// origin: b destination: d;
// var arcs [
// { start : "a", end : "b" },
// { start : "a", end : "e"},
// { start : "a", end : "c"},
// { start : "c", end : "d"},
// { start : "b", end : "c"},
// { start : "c", end : "a"},
//];
//There is a loop here - a b, b c, c a.
//There is a solution here a b, c d.

//1) Search for edgest that contain the desination as a start. Add them into an array (arcsBeingExplored), 
// { start : "a", end : "b" },
// { start : "a", end : "e"},
// { start : "a", end : "c"},
//1a) Elements Explored (arcsExplored) is empty since this is the first check.
//1b) Elements 1, 2, 3 have been explored (well, close enough? They will be explored). Add these to Elements Explored.
//1c) There are 3 edges found, so lets check them out. Add them to the working array.
//2) Do any of these contain the destination d as an end? No.
//3) There are three destinations in the working array right now - b, e, c. Take the first one and look for edges that involve it (activeStart = b). Note that we are doing the same thinga as we did at 1 now, just with a new destination. So 1 can be a function (collectArcs with start of activeStart). Add the edges to the working array, repacing the element that the destination has become the origin. So we will replace element [0] ({ start : "a", end : "b" }) with,
// { start : "b", end : "c"}
//4) Do any of these contain the destination d as an end? No. Obviously this is the same as 2 so it can be a function (lookForDestination).
//5) Take the end and make it the origin (activeStart = c). Collect the arcs and replace the previous array element with the collection (collectArcs).
//{ start : "c", end : "d"},
//{ start : "c", end : "a"},
//6) Look at the arc collection to search for the end. In this case we should find it and return 'true'

//It is possible, if the arc list was in a different order, that we would have gone a-c then c-a. In that case we'd maybe be in a loop and we have to identify that the arc has already been explored then somehow break or move on to the next exploration stage.

function solve_graph(start, end, arcs) {
  let exploreMap = [];
  let activelyExploring = [];
  let alreadyExplored = [];

  let destination = end;
  let origin = start;// end and start are used for the keys for the arcs, so the words get confusing. There is an origin, a destination, current node, start and end to each arc.

  let currentNode = origin; //initialize
  exploreMap = arcs.filter(arc=>arc.start.includes(currentNode));
  
  // loop through exploreMap somehow. Putting a 0 here is just moving along 1 step from pseudocode, like an example really.
  activelyExploring = exploreMap[0];
  for (let j = 0;j<arcs.length;j++){
    for (i in activelyExploring){
      //Check to see if I have been here before and marked it as a dead end, loop, or just thoroughly explored already. 
      if (alreadyExplored.includes(activelyExploring[i])){
        continue;//iterate to the next item.
      } else if (activelyExploring[i].end.includes(destination)) {//If not already explored, is it the solution?
        return true;
      } else {//This isn't the solution end arc but it's a valid arc so add it to the exploreMap
        exploreMap[j].pop(activelyExploring);
      }
    }             
  }

//activelyExploring is always just a 2 dimensional array - it has a list of arcs in it, that's all. 
//Loop through the arcs and look for - 
//1)the destination (end).
//2) if the destination isn't there then detect if this is a dead end. To do that, check the master list (arcs) for arcs that originate from the node. If there are none (filtered array length is 0) then just add the previously travelled arc to alreadyExplored and move on.

  circleSearch()//collect all arcs connected to the current node. Add them to ExploreMap in a way that build that map as a nested array. This array then contains a history of what has been explored.
  findStartArcs();
  return(earlyReturns(start, end, arcs));
}

function earlyReturns(start, end, arcs){
  let foundStarts = arcs.filter(arc=>arc.start.includes(start));
  let numStarts = foundStarts.length;

  let foundEnds = arcs.filter(arc=>arc.end.includes(end));
  let numEnds = foundEnds.length;

  console.log(numStarts);

  if (start == end){
    console.log('start location is already the same as end')
    return true;
  } else if (numStarts === 0){
    console.log('start location missing from graph')
    return false;
  } else if (numEnds == 0){
    console.log('end location missing from graph')
    return false;
  }
}

var arcs = [{ start : "a", end : "b" }, { start : "a", end : "a"}];

console.log(solve_graph('a', 'c', arcs));

//I suppose another way of doing this is to pretend like it's an IP network. Each node is a router. So organize the arc map into a data set that describes the routeres - each node will possess a list of nodes it connects to. The name of the node is like the IP address. So it would be a flat topology TCP/IP router simulator. Imagine functions that call each other in a sort of handshake. One sends a packet out, which in this case has no data but does have  destination. A check function goes through each connecting node and asks "Is this the destination? Does it have an arc to the destination?" If it's then either it's solved or it responds that this is the list of connected nodes.

//That is similar to what I'm doing but the description here is literally two functions talking to each other. I mostly just keep track of things in arrays, in a central location.