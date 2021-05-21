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
    var url = 'http://api.openweathermap.org/data/2.5/forecast?q='+location+'&mode=json&units=imperial&cnt=5&&appid=0e2b9776b743a95a999b6b8a744efb5c';
    var dataPromise = getWeather(url);
    dataPromise.then(JSON.parse)
               .then(function(weatherData){
                   res.send(weatherData)       
                })
})

module.exports = router;