// parameters: Input a list of courses as an array with each entry having the format coursname-yymm.

//the input has the format, 
// ["web-1305","site-1305","web-1304","site-1304"]

// return: Return the data sorted by date then by course name. 
//note that the course name varies in length.
// example:
// physics-2206
// math-2206
// film--2209
// englishLit-2209

//should return 
// math-2206
// physics-2206
// englishLit-2209
// film-2209

// pseudocode:

//We'll use the sort method for arrays. Then we need to make a custom sort function to provide to it.

//That custom sort method will have an if statement to decide if two items have the same date. If it does, then report the compared string value for sorting. If not, report the sort magnitude calculated from the date. 

//The custom sort method could operate on an array element that is a string, or a 2D element. For strings we could use find for the - character then extract the date, change the type and compare it for both elements to compare the date. Similar for the name - slice out the name by identifying the location of the - and using that address. 

//I prefer 2D element though. We'll just prepare a 2D array by splitting each element at the - then sort that array. Then put the elements back together with spit. I don't know which would be faster computationally but this is easier for me to code and it uses array methods, which is what we are focusing on this week.

// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"

let data = ["web-1305","site-1305","web-1304","site-1304", "site-0304"];
sortme = function( courses ){
    let split = [];
    for(let i=0;i<courses.length;i++){//I tried using courses.map(el => el.split('-')) here but it didn't work.(?)
        split[i] = courses[i].split('-');
    }

    //Now, the date is still as a string. It needs to be a number.
    for (let i=0;i<split.length;i++){
        split[i][1] = +split[i][1];
    }
    console.log(split);

    split.sort(sortFunction);
    function sortFunction(a,b){
        if (a[1] == b[1]){//If the date is the same
            return (a[0] < b[0]) ? -1:1;//then sort by name 
        } else {//Otherwise, sort by date
            return (a[1] < b[1]) ? -1:1;
        }
    }
    
    //they want an array of strings reported so lets make that

    // split.map(el => el.join("-"));//doesn't work. Hm. 
    // split.forEach(el => el.join("-"));//Also does nothing.

    for (let i=0;i<split.length;i++){
        if (split[i][1].toString().length == 3){
            split[i] =  split[i][0] + "-" + "0" + split[i][1];//The zero gets stripped earlier if it's leading so we must add it back.
        } else if (split[i][1].toString().length == 2){
            split[i] =  split[i][0] + "-" + "0" + "0" + split[i][1];
        } else if (split[i][1].toString().length == 1){
            split[i] =  split[i][0] + "-" + "0" + "0" + "0" + split[i][1];//I could have used the repeat string method here to add leading zeros.
        } else {
            split[i] = split[i][0] + "-" + split[i][1];
        }
    }

    return split;
}

sortme(data);

// [
//     [ 'o', 6928 ],
//     [ 'wddqJdbJ', 3707 ],
//     [ 'OO', 2410 ],
//     [ 'pWgJuNo', 2304 ],
//     [ 'TFQHgNb', 8184 ],
//     [ 'CUM', 8150 ],
//     [ 'UtuFWErnr', 3456 ],
//     [ 'OYqh', 890 ]
//   ]

// should be
//[ 'OYqh-890',
// 'pWgJuNo-2304',
// 'OO-2410',
// 'UtuFWErnr-3456',
// 'wddqJdbJ-3707',
// 'o-6928',
// 'CUM-8150',
// 'TFQHgNb-8184' ] to deeply equal [ 'OYqh-0890',
// 'pWgJuNo-2304',
// 'OO-2410',
// 'UtuFWErnr-3456',
// 'wddqJdbJ-3707',
// 'o-6928',
// 'CUM-8150',
// 'TFQHgNb-8184' ]

// expected [ 'fAlHjNbt-77',
//   'uqu-1706',
//   'FlAlqqs-4661',
//   'dgbPJyCbTQ-7906',
//   'cEOIUU-9735' ] 
//to deeply equal [ 'fAlHjNbt-0077',
//   'uqu-1706',
//   'FlAlqqs-4661',
//   'dgbPJyCbTQ-7906',
//   'cEOIUU-9735' ]

//  ['XrT-8',
//   'O-0015',
//   'XlQIu-0421',
//   'JCxZ-0461',
//   'yEeC-0671',
//   'XHlhCq-0752',
//   'ErLjxI-0831',
//   'sXaoGq-2692',
//   'Mw-2751',
//   'ueVesX-3403',
//   'xF-3497',
//   'eQnobrZKe-3590',
//   'zrMcSr-3635',
//   'f-4678',
//   'ToMFH-5828',
//   'sMrpw-6380',
//   'VHrZQEf-6596',
//   'nmRbQhYR-6697',
//   'wKdk-6912',
//   'iWyKWDRBn-7525',
//   'HKPwiVr-7991',
//   'DdLmHoLV-8824',
//   'toADpPdL-9937',
//   'w-9983' ] to deeply equal 
//  ['XrT-0008',
//   'O-0015',
//   'XlQIu-0421',
//   'JCxZ-0461',
//   'yEeC-0671',
//   'XHlhCq-0752',
//   'ErLjxI-0831',
//   'sXaoGq-2692',
//   'Mw-2751',
//   'ueVesX-3403',
//   'xF-3497',
//   'eQnobrZKe-3590',
//   'zrMcSr-3635',
//   'f-4678',
//   'ToMFH-5828',
//   'sMrpw-6380',
//   'VHrZQEf-6596',
//   'nmRbQhYR-6697',
//   'wKdk-6912',
//   'iWyKWDRBn-7525',
//   'HKPwiVr-7991',
//   'DdLmHoLV-8824',
//   'toADpPdL-9937',
//   'w-9983' ]