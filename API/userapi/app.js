const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const newsArticleRoute = require('./routes/newsArticle'); 
const weatherRoute = require('./routes/weather');         

mongoose.connect(
    'mongodb://localhost:127.0.0.1:27017/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => err ? console.log('something got wrong', err) : console.log('db connected')
)

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/newsArticle', newsArticleRoute);
app.use('/weather', weatherRoute);    

module.exports = app;

