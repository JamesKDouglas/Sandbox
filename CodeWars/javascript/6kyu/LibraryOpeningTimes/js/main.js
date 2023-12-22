//Return a  string indicating when the library will close, if it's open. Or when it will open next if it is closed.

//The string will be in the format,
//"Library opens: today XX:XX"
//Where today is the weekday, if it is not in fact this day.

//or:
//"Library closes at XX:XX" if it's currently open.

//The current time is submitted as a parameter, string ex:
//"Monday 12:35"

//"Monday 12:35 => 'Library closes at 20:00'"
//"Monday 21:00"=> 'Library opens: Tuesday 08:00'" //do we use this leading zero? Yes - XX:XX
//"Friday 07:00 => Library opens: today 08:00"


//edge cases: invalid time return "Invalid time!"
//case insensitive.

function openingTimes(str) {
    // console.log(str);
    //Date object uses 0 to 6 Sunday-Sat
    //The input lacks a year.
    //So the format is not sufficient to use the Date() object properly. The year isn't relevant though. 
    
    //We could fix up the formatting, add a dummy year then use parse() or we could parse ourselves.

    //I'll try parsing it myself.

    //parsing, in this case, means converting the day, hour string into a numerical value that I can compare to other numerical values.

    //I do need to convert it back again afterwards, since we report a string.

    //What if the query is right on the dot of closing time? Then the library is closed, report next opening time.

    function parseStr(str, decodeDays){

        let query = str.split(" ");
        let queryObj = {};

        queryObj.day = decodeDays[query[0].toLowerCase()];//Now it's an integer.
        queryObj.TOD = query[1].split(":");
        queryObj.hour = Number(queryObj.TOD[0]);//hour 
        queryObj.minutes = Number(queryObj.TOD[1]/60);//fractional hour
        queryObj.TOD = Number(queryObj.hour+queryObj.minutes);//I want like 16.5 for "16:30".
        console.log(queryObj);

        //error checking for invalid inputs
        if (queryObj.day===undefined || queryObj.hour===undefined || queryObj.minutes>=1 || queryObj.hour>=24){
            return "Invalid time!";
        }

        return queryObj;
    }

    let decodeDays = {
        'sunday':0,
        'monday':1,
        'tuesday':2,
        'wednesday':3,
        'thursday':4,
        'friday':5,
        'saturday':6,
    };
    let openingSchedule = {
        6:10,
        5:8,
        4:8,
        3:8,
        2:8,
        1:8,
        0:12,
    }
    let closingSchedule= {
        6:18,
        5:20,
        4:20,
        3:20,
        2:20,
        1:20,
        0:16.5,
    }

    let openingScheduleStr = {
        6:"10:00",
        5:"08:00",
        4:"08:00",
        3:"08:00",
        2:"08:00",
        1:"08:00",
        0:"12:00",
    }

    let closingScheduleStr = {
        6:"18:00",
        5:"20:00",
        4:"20:00",
        3:"20:00",
        2:"20:00",
        1:"20:00",
        0:"16:30",
    }
    //Create an object with a quantified time
    let queryObj = parseStr(str, decodeDays);
    // console.log(queryObj);

    if (queryObj === "Invalid time!"){
        return "Invalid time!";
    }

    let msg = "";

    if (queryObj.TOD > openingSchedule[queryObj.day] && queryObj.TOD<closingSchedule[queryObj.day]){
        //then the library is open now.
        msg = `Library closes at ${closingScheduleStr[queryObj.day]}`;
    } else {
        //Does it open later today or the next day?
        if(queryObj.TOD<openingSchedule[queryObj.day]){
            //Later today
            msg = `Library opens: today ${openingScheduleStr[queryObj.day]}`;
        } else if (queryObj.TOD>=closingSchedule[queryObj.day]){
            //Already closed for today. Next time it opens is tomorrow. Lookup the day string based on the key
            let nextDay = Object.keys(decodeDays).find(key => decodeDays[key] === (queryObj.day+1)%7);
            
            //make first letter of day uppercase
            nextDay = nextDay[0].toUpperCase()+nextDay.slice(1,nextDay.length);

            msg = `Library opens: ${nextDay} ${openingScheduleStr[((queryObj.day+1)%7)]}`;
        }
    }
    return msg;
}

//This problem needs a large amount of error checking because apparently all possible absurd inputs have to be anticipated?

// console.log(openingTimes("Monday 12:35"),'Library closes at 20:00');
// console.log(openingTimes("Monday 21:00"), 'Library opens: Tuesday 08:00');
// console.log(openingTimes("Friday 07:00"), 'Library opens: today 08:00');
// console.log(openingTimes("Fiday 07:00"), 'Invalid time!');
// console.log(openingTimes("fRiday 07:00"), 'Library opens: today 08:00');
// console.log(openingTimes("Saturday 00:00"), "Library opens: today 10:00");
// console.log(openingTimes("Tuesday 20:00"), "Library opens: Wednesday 08:00");
// console.log(openingTimes("Tuesday 13:61"), "Invalid time!");
// console.log(openingTimes("Sunday 12:15"), "Library closes at 16:30");
// console.log(openingTimes("Sunday 24:00"), "Invalid time!");