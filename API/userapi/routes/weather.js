const express = require('express');
const request = require('request');
const router = express.Router();
/*
const iplocate = require('public-ip');
const publicIp = require('node-iplocate');
*/


const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";
//change later down the line (1) create weather account (2) get user iplocation

function getWeather(url) {
    var options = {
        url: weatherUrl, /* change to url if querying for specific IP location*/
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
    /*
    var ipLocation = publicIp.v4().then(ip => {
        iplocate(ip).then(function(results) {
            let respo = JSON.stringify(results.city, null, 2)
            return respo;
       });
    });
    */
    var dataPromise = getWeather(/*API URL + ipLocation*/);
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