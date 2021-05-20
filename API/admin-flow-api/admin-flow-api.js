const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const newsRoutes = require('./routes/newsRoutes')
const userRoutes = require('./routes/userRoutes')

mongoose.connect(
    'mongodb://localhost:27017/test',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err) => err ? console.log('Something got wrong', err) : console.log('DB Connected')
)

const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/news', newsRoutes)
app.use('/', userRoutes)

const PORT = 3001

const server = http.createServer(app)

server.listen(PORT, (err) => {
  if(!err) {
    console.log('Server Started :: ' + PORT)
  } else {
    console.log('Something went wrong', err)
  }
})
module.exports = app
