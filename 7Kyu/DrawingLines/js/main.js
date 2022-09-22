// parameters: Input a 2D array of points.
// return: a drawn object on the screen that connects all the points with a red line
// example:
//This should give an equilateral triangle: [[50,10],[20,80],[80,80],[50,10]];
// pseudocode:
//access a canvas element in the html by id
// Generate the image:
//create context in the canvas with getContext
//fill it with a color
//set the line color
//set context to beginPath.
//use moveTo and lineTo to draw the points using a for loop.
//stroke along the path with context.stroke()
//return the generated image to the HTML tag.
function drawLines(points) {
    var canvas = document.getElementById("myCanvas");
//
  //  var canvas = new Canvas(100,100)  //Create a 100 x 100 canvas
    var ctx = canvas.getContext('2d'); 
    ctx.fillStyle="#ffffff"
    ctx.fillRect(0,0,100,100)  //Draw background
    ctx.strokeStyle="#ff000f"  //Set pen's color
    ctx.beginPath()

    //Don't delete or modify the code above
    //Your code starts here:
    
    for (let i=0;i<points.length-1; i++){
      ctx.moveTo(points[i][0],points[i][1])
      ctx.lineTo(points[i+1][0],points[i+1][1])  
    }
    
    //Don't delete or modify the following code
    ctx.stroke()              //Draw the path you made above
    return canvas.toDataURL() //Returns the image data
  }
let points = [[50,10],[20,80],[80,80],[50,10]];
drawLines(points);