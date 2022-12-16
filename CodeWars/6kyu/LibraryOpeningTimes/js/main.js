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
	//use date() object, together with date.getDay.
    //We do have to put the library schedule in somehow.
    //Lets do it with a objects using day of the week names:
    //Also, we will do it with events - opening and closing with an object for each type.

    //Date object uses 0 to 6 Sunday-Sat
    //getHour reports just the hour, dropping the minutes. So how can we handle that for 16:30? What I would like is a way to parse the hour of the day into an integer like 16.5.

    //How about getHour + getMinute/60. That should convert the time object to an integer time of day.

    //Ok the format is not sufficient to use the Date() object properly because it lacks the year. The year isn't relevant though. We could fix up the formatting, add a dummy year then use parse() or we could parse ourselves.

    //I'll try parsing it myself. I'm using the standard date formats as much as possible though.
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
        6:10,
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

    let query = str.split(" ");
    let queryObj = {};

    queryObj.day = decodeDays[query[0].toLowerCase()];//Now it's an integer.
    queryObj.TOD = query[1].split(":");
    queryObj.hour = Number(queryObj.TOD[0]);//hour 
    queryObj.minutes = Number(queryObj.TOD[1]/60);//fractional hour
    queryObj.TOD = Number(queryObj.hour+queryObj.minutes);//I want like 16.5 for "16:30".

    let msg = "";

    if (queryObj.TOD > openingSchedule[queryObj.day] && queryObj.TOD<closingSchedule[queryObj.day]){
        //then the library is open now.
        msg = `Library closes at ${closingScheduleStr[queryObj.day]}`;
    } else {
        //Does it open later today or the next day?
        if(queryObj.TOD<openingSchedule[queryObj.day]){
            //Later today
            msg = `Library opens at ${closingScheduleStr[queryObj.day]}`;
        } else if (queryObj.TOD>closingSchedule[queryObj.day]){
            console.log(queryObj.TOD, openingSchedule[queryObj.day]);
            //Already closed for today. Next time it opens is tomorrow
            msg = `Library opens at ${closingScheduleStr[((queryObj.day+1)%7)]}`;
        }
    }

    return msg;

}

console.log(openingTimes("Monday 12:35"),'Library closes at 20:00');
console.log(openingTimes("Monday 21:00"), 'Library opens: Tuesday 08:00');
console.log(openingTimes("Friday 07:00"), 'Library opens: today 08:00');
console.log(openingTimes("Fiday 07:00"), 'Invalid time!');
console.log(openingTimes("fRiday 07:00"), 'Library opens: today 08:00');