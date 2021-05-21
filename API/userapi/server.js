const http = require('http')
const app = require('./app')
const path = require('path');
const express = require('express');
 
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000

const server = http.createServer(app).listen(PORT, (err) => {
  if(!err) {
    console.log('Server Started :: ' + PORT)
  } else {
    console.log('Something went wrong', err)
  }
})

//UPON LOAD UP, chat loads
const io = require('socket.io')(server);

io.on('connection',  (socket) => {

    console.log('socket connecting');

    // nick event
    socket.on('nick', (nickname) => {
        console.log("nick => nickname : ", nickname)
        socket.nickname = nickname
    });

    // chat event
    socket.on('chat', (data) => {
        console.log("chat => nickname : ", socket.nickname)
        const d = new Date()
        const ts = d.toLocaleTimeString()
        console.log("ts : ", ts)
        const response = `${socket.nickname} @ ${ts}:: ${data.message}`
        console.log("rs : ", response)
        io.emit('chat', response)
    });
});