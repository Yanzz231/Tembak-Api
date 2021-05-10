const axios = require("axios");
const fs = require("fs");
let _tembak = JSON.parse(fs.readFileSync(`./tembak.json`))

for(let i = 0; i < 2000; i++){
    
    axios.get(`https://h4ck3rs404-api.herokuapp.com/api/kuis/dareen?apikey=404Api`)
        .then((res) => {
            for (let a of _tembak) {
                if (a.dare === res.data.result) {
                    return
                }
            }
            _tembak.push({
                dare: res.data.result
            })
            fs.writeFileSync(`./tembak.json`, JSON.stringify(_tembak, null, 2))
            console.log('sukses +1 ke databasenya')
    })
}