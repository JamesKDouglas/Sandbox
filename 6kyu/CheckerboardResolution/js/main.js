// p inputs are height, width and resolution. By this they mean with a resolution of 1 there would be a 1xwidth squares wide board. So there is a normalization there. There are no actual units in place. The resolution is just normalized to 1 like that.
// The parameters are integers but they can be very large so we will have to use BigInt -up to 10^32
// return the number of black 'squares'. That is, when the board is cut up into the slices described by width and height, that creates a grid of squares. Count the black ones. 
// example:
// W: 11
// H: 6
// R: 1
// return 33 
//
// W: 11
// H: 6
// R: 2
// return 32 
//
// W: 11
// H: 6
// R: 5
// return 31

// pseudocode
// We'll be using modulo because the number of black 'full squares' is equal to half the modulo.
//then, there is often a fraction remaining and we have to decide if that is black or white. 
// scan the lines? ya that could work. Scan and keep track of the starting color on the right hand side. 
// The line scanning will be a bit cumbersome for large boards.
// really for most of the board we can calculate just by area and straight up divide. It is the edges that are a bit complicated.
// So how about we deal with most of the board just through division, and create a rightEdge and bottomEdge? These edges will basically be sub-boards? Well, yes they are but maybe not white in the top right.
//Well, based on the outcome of the modulo we'll get either odd or even. That sets the upper left color for the edge board. 

//Ok lets try that - really by division and modulo with bigInt. Calculate the main board then do the edges.
//I guess the return better be in bigInt format although codewars does not specify that.

function countCheckerboard(width, height, resolution) {
    // All inputs are BigInts. As far as the method goes this makes no difference. It just means we cannot use Math functions, mostly.
    // I'm going to call 1 resolution block a "pixel" as in an image on the screen. The width and height is like the hardware of the screen - imagine each one is an LED. Let's literaly just call them LEDs because the 'square' description is ambiguous. So we are counting the black LEDs.

    //early returns. Weeding out simple cases like this simplies the math later.
    if (width<resolution && height<resolution){
        return 0n;//we always start with white in the top left. So in this case there will be only white leds.
    };

    //Now deal with the "main board" or image. That is, the board that is described by an integer number of pixels.  
    
    //For this board, if the width is an even number of pixels for every row of pixels there is a balanced number of black and white LEDs.
    //A) However, if the width is an odd number of pixels then there is only a balanced number of black and white pixels when there are an even number of rows.
    // for example imagine an image which is 5 pixels wide. the top row is white black white black white. That's only 2 black and 3 white. 
    
    let mainBoardWidth = width/resolution;//this calculates the width of the main board in pixels because as a bigInt the decimal is dropped, as if we were using Math.floor().
    let mainBoardHeight = height/resolution;

    if (mainBoardWidth%2 == 0){
        let mainBoardBlackCount = mainBoardWidth * mainBoardHeight/2n; //this takes care of most of the board. That's important for large boards.
    } else {
        let mainBoardBlackCount = mainBoardWidth * mainBoardHeight/2n - 1;//this seems silly for large boards because the error is so small, but it's true.
    }
    //Is it possible to take care of this odd number of pixels thing by just allowing the bigInt to round down? No because you could have an even number of white squares and odd number of black ones.

    //that calculates the number of black pixels. We still need to multiply that by the number of LEDs per pixel. It's true that we divide then multiply by the resolution, which seems pointless but it's because bigInts drop the decimal when we do that.
    mainBoardBlackCount = mainBoardBlackCount*resolution;//# of leds


    //Now the right edge:
    //In the main board we know it is an integer value of pixels, because we arrange that. Then multiply at the end. That saves computing power for a large main board. Here, we just work directly with LEDs. In a situation where the resolution is small and the width and height large, there could still be a lot of computing involved ( many leds ). So we will try to handle that by keeping things as pixels as long as possible.

    let rightEdgeWidth = width%resolution;//width, not in pixels but in LEDs. This is the same as width-mainBoardWidth.
    let rightEdgeHeight = mainBoardHeight*resolution;//so I don't count the corner twice. 
    

    if (mainBoardWidth%2 == 0n){//there are an even number of squares in the width of the main board. So the upper left for the right edge is white.
        //This right edge is an integer number of pixels tall. With regards to height, we face the same issue as A for even/odd.

        if ((rightEdgeHeight/resolution)%2 ==0 ){
            let rightEdgeBlackCount = rightEdgeWidth*rightEdgeHeight/2n; //count in leds not pixels. 
        } else {
            let rightEdgeBlackCount = (rightEdgeWidth*rightEdgeHeight/2n) - rightEdgeWidth*resolution;//subtract one fraction of a black pixel.
        }
    } else {//the upper left of right edge is black
        if ((rightEdgeHeight/resolution)%2 ==0 ){//If the # squares is even then it's the same
            let rightEdgeBlackCount = rightEdgeWidth*rightEdgeHeight/2n; //count in leds not pixels. 
        } else {//if the # squares is not even then +1 not -1
            let rightEdgeBlackCount = (rightEdgeWidth*rightEdgeHeight/2n) + rightEdgeWidth*resolution;//subtract one fraction of a black pixel.
        }
    }

    //Then the bottom edge:
    let bottomEdgeWidth = width-rightEdgeWidth;//in leds.
    let bottomEdgeHeight = height%resolution;//same as height-mainBoardHeight. in Leds.

    //finally, the corner

}

let W = BigInt(11);
let H = BigInt(6);
let R = BigInt(2);

countCheckerboard(W,H,R);