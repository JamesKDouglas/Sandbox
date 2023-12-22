function rgb(r, g, b){
    // First, round the values - up if the are negative, down if they are more than 255.
    if (r<0){
        r=0;
    }
    if (r>255){
        r=255;
    }
    if (g<0){
        g=0;
    }
    if (g>255){
        g=255;
    }if (b<0){
        b=0;
    }
    if (b>255){
        b=255;
    }

    //Then, work on conversion.

    r_hex = r.toString(16).toUpperCase();
    g_hex = g.toString(16).toUpperCase();
    b_hex = b.toString(16).toUpperCase();

    //This works ok except that there is no leading zero when the number is less than 16. Let add that.
    //This isn't very DRY. I could refactor into an array I guess. Or functions. But the whole thing is pretty short, easy to read, and simple.
    if (r<16){
        r_hex = 0 + r_hex;
    }
    if (g<16){
        g_hex = 0 + g_hex;
    }
    if (b<16){
        b_hex = 0 + b_hex;
    }
    return r_hex + g_hex + b_hex;
    
}