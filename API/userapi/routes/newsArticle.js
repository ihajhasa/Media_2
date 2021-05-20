const express = require('express');
const router = express.Router();

const newsArticle = require('../models/newsArticle');

router.get('/', (req, res) =>{
    newsArticle.find((err, result) =>{
        if(err) throw err;
        else res.send(result);
    })
})

router.post('/',(req, res)=>{
    const { title, description, url, urlToImage, publishedAt, category} = req.body;
    const news = new newsArticle;

    news.title = title;
    news.description =  description;
    news.url = url;
    news.urlToImage = urlToImage;
    news.publishedAt = publishedAt;
    news.category = category

    news.save()
        .then(data=>res.json(data))
        .catch(err => res.status(500).json(err))
})

module.exports = router;