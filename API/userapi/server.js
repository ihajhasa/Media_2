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


//upon start up of the backend; chat starts up
const io = require('socket.io')(server);

io.on('connection',  (socket) => {

    socket.on('nick', (nickname) => {
        socket.nickname = nickname
    });

    socket.on('chat', (data) => {
        const d = new Date()
        const ts = d.toLocaleTimeString()
        const response = `${socket.nickname} @ ${ts}:: ${data.message}`
        io.emit('chat', response)
    });
});