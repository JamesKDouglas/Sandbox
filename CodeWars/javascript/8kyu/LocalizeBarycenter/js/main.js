//Input: coordinates of a triangle. That is, an xy value for each vertex. As arrays and... number type integers? Positive integers.

//Output: The coordinates, in [x,y] format, of the barycenter aka centroid. Report to 4 decimal places.

//no BigInts. No expected timeout issues. 

//edge cases: suppose two vertices are the same? Should we error out, 'this is not a valid triangle?
//What about incorrect data types like if someone submits, ["1",2] or ["one", 2] ? Don't expect that and we won't handle it. 

// barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

// barTriang([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]

function barTriang(pA, pB, pC){
    //separate the xy values just to match the equation clearly.
    //use destructured notation for each pair.
    let [xA,yA] = pA,
        [xB,yB] = pB,
        [xC,yC] = pC;
    
    //Then use the formulas to find the centroid
    let xo = (xA+xB+xC)/3,
        yo = (yA+yB+yC)/3;

    //Return as an array!
    return [Number(xo.toFixed(4)),Number(yo.toFixed(4))];
}

console.log(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);
console.log(barTriang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667]);
