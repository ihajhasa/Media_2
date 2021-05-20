const express = require('express');
const http = require('http');
const path = require('path');
let io = require('socket.io');
let app = express();


app.set('port', process.env.PORT || 3300);
app.use(express.static(path.join(__dirname, 'public')));


// Set up express
server = http.createServer(app).listen(app.get('port'),function(){
    console.log("Express server listening on port " + app.get('port'));
});

io = require('socket.io')(server);

io.sockets.on('connection',(socket)=>{
    var list = io.sockets.sockets;
    var users = Object.keys(list);

    socket.on('nick',(nick) =>{
        socket.set('nickname',nick);
        socket.emit('userlist',users);
    });

    socket.on('chat', (data)=>{
        socket.get('nickname',(err,nick) => {
            let nickname = err ? 'anonymous' : nick;
        })
    })
})


module.exports = app;