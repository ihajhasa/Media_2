const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const newsArticleRoute = require('./routes/newsArticle');
const weatherRoute = require('./routes/weather');

mongoose.connect(
        'mongodb://localhost:27017/test',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => err ? console.log('something went wrong') : console.log(`server is running`))

app.use('/newsArticles', newsArticleRoute);
app.use('/weather', weatherRoute)

module.exports = app;