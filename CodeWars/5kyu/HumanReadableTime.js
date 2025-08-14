function humanReadable (seconds) {
    console.log(seconds);
    let hrs = Math.trunc(seconds/3600);
    seconds -= hrs*3600;
    let min = Math.trunc(seconds/60);
    seconds -= min*60;

    if (hrs<10) hrs = "0"+hrs;
    if (min<10) min = "0"+min;
    if (seconds<10) seconds = "0"+seconds;
    console.log(seconds);
    let timeEl = hrs+":"+min+":"+seconds;

    return timeEl;
}

let s = 60;
console.log(humanReadable(s));