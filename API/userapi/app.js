const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const newsArticleRoute = require('./routes/newsArticle'); //adjust to angular route
const weatherRoute = require('./routes/weather');         //adjust to angular route
const chatRoute = require('./routes/userChat');

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
// app.use('/chat', chatRoute);

module.exports = app;

