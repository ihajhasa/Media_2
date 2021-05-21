const express = require('express');
const path = require('path');
const http = require('http');
 
const app = express();
//app.set('port', process.env.PORT || 4300);
app.use(express.static(path.join(__dirname, 'public')));

const io = require('socket.io')(4300);

io.on('connection',  (socket) => {

    // nick event
    socket.on('nick', (nickname) => {
        console.log("nick => nickname : ", nickname)
        socket.nickname = nickname
    });

    // chat event
    socket.on('chat', (data) => {
        console.log("chat => nickname : ", socket.nickname)
        const d = new Date()
        const ts = d.toLocaleString()
        console.log("ts : ", ts)
        const response = `${ts} : ${socket.nickname} : ${data.message}`
        console.log("rs : ", response)
        io.emit('chat', response)
    });
});

module.exports = app;