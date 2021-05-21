const express = require('express');
const request = require('request');
const router = express.Router();

const LocalStorage = require('node-localstorage').LocalStorage;
let localStorage = new LocalStorage('./models');
const iplocate = require('node-iplocate');
const publicIp = require('public-ip')

var location = localStorage.getItem('userlocal')


function getWeather(url) {
    var options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };
    return new Promise(function(resolve, reject) {
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}

router.get('/', (req, res) =>{
    
    publicIp.v4().then(ip => {
        iplocate(ip).then(function(results) {
            let respo = JSON.stringify(results.city, null, 2)
            localStorage.setItem('userlocation',respo)
       });
    });
    location = localStorage.getItem('userlocation').replace(/"([^"]+(?="))"/g, '$1');
    var url = 'http://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid=0e2b9776b743a95a999b6b8a744efb5c';
    var dataPromise = getWeather(url);
    dataPromise.then(JSON.parse)
               .then(function(weatherData){
                   res.send(weatherData)        //access in angular as "weatherData"
                   
                   /*
                    weatherData.name = london
                    weatherData.list[x].dt = day of week
                    weatherData.list[x].temp.day = temperature during the day
                    weatherData.list[x].temp.max = max temperature of day
                    weatherData.list[x].temp.min = minimum temperature of day
                    weatherData.list[x].weather[0].main = type (rain, sunny, ect)
                    */

                })
})

module.exports = router;