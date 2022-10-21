// param passing in seconds as integer up to 
// return time in HH:MM:SS
// example 359999 should return 99:59:59
// pseudocode:
//declare a variable for hours, min and s.
// Hours: divide by 60*60 then use math.Floor on that.
// Minutes: take original seconds and subtract hoursS Then divide by 60 and use math.floor.
// seconds: take original seconds and subtract hourS and minutes S. Then divide by 60.
// Use `` join them together and return.


function humanReadable (seconds) {
    let h, m, s =0;
    h = Math.floor(seconds/(60*60));
    m = Math.floor((seconds-h*3600)/60);
    s = (seconds-h*3600-m*60);

    if (h<10){
        h = `0${h}`;
    }
    if (m<10){
        m = `0${m}`;
    }
    if (s<10){
        s = `0${s}`;
    }

    return (`${h}:${m}:${s}`);
}

  //99:59:59
console.log(humanReadable(359999));