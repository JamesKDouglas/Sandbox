const https = require('https')

let url = "https://www.codewars.com/users/leaderboard"

const getLeaderBoardHonor = async (url) => {
    https.get(url, res => {
        let data = [];
        //when the 'data' event gets fired, that means a chunk was recieved. Add it to the array.
        res.on('data',chunk => data.push(chunk))
        res.on('end', ()=> {
            const page = Buffer.concat(data).toString()
            //in regex . is a wildcard, * is 'matches previous element zero or more times ? is "matches the previous element zero or one times"
            const regex = new RegExp(/<td class="honor">(.*?)</gi);
            const matches = page.match(regex)
            //\D is anything that is not a digit. So globally remove all things that are not digits.
            const array = matches.map(string => Number(string.replace(/\D/g, "")))
            //This doesn't print anything. Why not? My goal is to actually do something with the data..
            console.log(array);
            try{
                resolve(array)
            } catch(e){
                reject(e.message)
            }
        })
    })
    .on('error', err => reject(`Got error: ${err.message}`))

}