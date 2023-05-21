function hoursAt4525(){
    fetch('./2023_allUpToMay18.json')
    .then((response) => response.json())
    .then((json) => {
        //What we have is an array of objects. The first level property is the name of the object. We can
        //filter that using .filter. That's whether it is an activity or a location. 
        //But filter array method cannot reach inside the object.

        //
        let activities = json.timelineObjects.filter(el => el.activitySegment);
        let locations = json.timelineObjects.filter(el => !el.activitySegment);
        console.log(json);
        // let activitiesArr = Object.entries(activities);

        // console.log(activitiesArr);
        console.log(activities);
        console.log(locations);

        // for (i of activities){
        //     // console.log(i.activitySegment.activityType);
        //     if (i.activitySegment.activityType ==="STILL"){
        //         console.log(i)
        //     };
        // }
        let lastEnd = new Date(locations[0]);

        let day = "";
        let hours = 0;
        let arr = [];
        for (i of locations){
            let start = new Date(i.placeVisit.duration.startTimestamp);
            let end = new Date(i.placeVisit.duration.endTimestamp);
            // console.log(i.activitySegment.activityType);
            //Vancouver is UTC-7. 
            //ok we do cross savings time so that's a bit confusing.
            //but utc 5 is 10pm in vancouver, apparently. 15 is 9am.
            //Ok so I want to list all locations where I was at 10pm to 9am. 
            //so arrive before 10pm, leave after 9am

            //I used this to generate the table of overnight locations not at 4525 st george st
            // if (lastEnd.getDate() !== end.getDate()){
            //     // console.log(i);
            //     console.log(start, ";", i.placeVisit.location.address, ";" , i.placeVisit.location.name , ",");
            // }
            //This helps singulate to show the first entry of the day (where I woke up)
            lastEnd = end;

            // Now, can I generate a table showing the hours at 4525 st george st?
            
            day = `${(start.getMonth() +1)}/${start.getDate()}`;
            hours = ((((Math.abs(end-start)/1000))/60)/60).toFixed(2);
            if (i.placeVisit.location.address === "4525 St George St, Vancouver, BC V5V 4A6, Canada" && i.placeVisit.visitConfidence>93){
                arr.push([day, hours]);
                // console.log(`${(start.getMonth() +1)}/${start.getDate()} ${((((Math.abs(end-start)/1000))/60)/60).toFixed(2)}`);
                console.log(day, i);
            } else {
                arr.push([day, 0]);
            }
            // if (start.getUTCHours() == 15){
            //     console.log(start);
            // }
        }
        // console.table(arr);

        //collapse array like a pivot table
        let pivot = [];
        let sum = 0;
        for (let i=0;i<arr.length-1;i++){
            sum = sum + +arr[i][1];

            if (arr[i][0]===arr[i+1][0]){
                continue;
            } else {
                pivot.push([arr[i][0], +sum.toFixed(2)]);
                sum = 0;
            }
        }
        console.table(pivot);
    }
    );


}

function overnight(){
    fetch('./2023_allUpToMay18.json')
    .then((response) => response.json())
    .then((json) => {
        //What we have is an array of objects. The first level property is the name of the object. We can
        //filter that using .filter. That's whether it is an activity or a location. 
        //But filter array method cannot reach inside the object.

        //
        let activities = json.timelineObjects.filter(el => el.activitySegment);
        let locations = json.timelineObjects.filter(el => !el.activitySegment);
        console.log(json);
        // let activitiesArr = Object.entries(activities);

        // console.log(activitiesArr);
        console.log(activities);
        console.log(locations);

        // for (i of activities){
        //     // console.log(i.activitySegment.activityType);
        //     if (i.activitySegment.activityType ==="STILL"){
        //         console.log(i)
        //     };
        // }
        let lastEnd = new Date(locations[0]);

        let day = "";
        let hours = 0;
        let arr = [];
        for (i of locations){
            let start = new Date(i.placeVisit.duration.startTimestamp);
            let end = new Date(i.placeVisit.duration.endTimestamp);
            // console.log(i.activitySegment.activityType);
            //Vancouver is UTC-7. 
            //ok we do cross savings time so that's a bit confusing.
            //but utc 5 is 10pm in vancouver, apparently. 15 is 9am.
            //Ok so I want to list all locations where I was at 10pm to 9am. 
            //so arrive before 10pm, leave after 9am

            // I used this to generate the table of overnight locations not at 4525 st george st
            if (lastEnd.getDate() !== end.getDate()){
                console.log(i);
                console.log(start, ";", i.placeVisit.location.address, ";" , i.placeVisit.location.name , ",");
            }
            //This helps singulate to show the first entry of the day (where I woke up)
            lastEnd = end;

            // Now, can I generate a table showing the hours at 4525 st george st?
            
            // day = `${(start.getMonth() +1)}/${start.getDate()}`;
            // hours = ((((Math.abs(end-start)/1000))/60)/60).toFixed(2);
            // if (i.placeVisit.location.address === "4525 St George St, Vancouver, BC V5V 4A6, Canada" && i.placeVisit.visitConfidence>93){
            //     arr.push([day, hours]);
            //     // console.log(`${(start.getMonth() +1)}/${start.getDate()} ${((((Math.abs(end-start)/1000))/60)/60).toFixed(2)}`);
            //     console.log(day, i);
            // } else {
            //     arr.push([day, 0]);
            // }
            // if (start.getUTCHours() == 15){
            //     console.log(start);
            // }
        }
        // console.table(arr);

        // //collapse array like a pivot table
        // let pivot = [];
        // let sum = 0;
        // for (let i=0;i<arr.length-1;i++){
        //     sum = sum + +arr[i][1];

        //     if (arr[i][0]===arr[i+1][0]){
        //         continue;
        //     } else {
        //         pivot.push([arr[i][0], +sum.toFixed(2)]);
        //         sum = 0;
        //     }
        // }
        // console.table(pivot);
    }
    );


}
// hoursAt4525();
overnight();