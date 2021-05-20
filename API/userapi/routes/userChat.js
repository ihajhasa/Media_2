const express = require('express');
const request = require('request');
const path = require('path');
const http = require('http');
 
let io = require('socket.io');
const app = require('../app');
let router = express.Router();

router.configure(() =>{
    router.set('port', process.env.PORT || 3000);
    router.use(express.static(path.join(__dirname, 'public')));
})

r



module.exports = router;