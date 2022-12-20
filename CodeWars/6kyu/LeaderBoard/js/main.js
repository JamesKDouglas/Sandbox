// const https = require('https')
const getLeaderboardHonor = async () => {
    return new Promise((resolve, reject) =>
        https
            .get('https://www.codewars.com/users/leaderboard', res => {
                let data = []
                res.on('data', chunk => data.push(chunk))
                res.on('end', () => {
                    const page = Buffer.concat(data).toString()
                    const regex = new RegExp(/<td class="honor">(.*?)</gi)
                    const matches = page.match(regex)
                    const array = matches.map(string => Number(string.replace(/\D/g, '')))
                    try {
                        resolve(array)
                    } catch (e) {
                        reject(e.message)
                    }
                })
            })
            .on('error', err => reject(`Got error: ${err.message}`))
    )
}
