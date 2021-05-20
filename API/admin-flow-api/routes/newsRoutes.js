const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');

const News = require('../models/news')

router.get('/',(req,res) => {
  let headerInfo = req.headers.authorization;
  const decoded = headerInfo ? verifyJwtToken(headerInfo): undefined;
  if(decoded){
    News.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
  }
  else{
    res.send(null);
  }
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  let headerInfo = req.headers.authorization;
  const decoded = headerInfo ? verifyJwtToken(headerInfo): undefined;
  if(decoded){
  News.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
  } else {
    res.send(null);
  }
})

router.delete('/:id', (req, res) => {
  // const { id } = req.params
  const id = req.params.id
  let headerInfo = req.headers.authorization;
  const decoded = headerInfo ? verifyJwtToken(headerInfo): undefined;
  if(decoded){
  News.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
  } else {
    res.send(null);
  }
})

router.post('/', (req, res) => {
  let headerInfo = req.headers.authorization;
  const decoded = headerInfo ? verifyJwtToken(headerInfo): undefined;

  if(decoded){
  const newsModel = new News(req.body)
  newsModel.save()
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))
} else {
  res.send(null);
}
})

router.put('/:id', (req, res) => {
  let headerInfo = req.headers.authorization;
  const decoded = headerInfo ? verifyJwtToken(headerInfo): undefined;

  if(decoded){
  const { id } = req.params
  const { title, description, url, imageUrl } = req.body;

  News.findById(id)
    .then(news => {
      news.title = title;
      news.description = description;
      news.url = url;
      news.imageUrl = imageUrl;
      news.publishedAt = news.publishedAt;
      news.category = news.category;
      return news.save()
    })
    .then(updatednews => res.json(updatednews))
    .catch(err => res.status(500).json(err))
  } else {
    res.send(null);
  }
})

function verifyJwtToken(headerInfo) {
    let token = headerInfo.replace('Bearer ', '');
    let decoded = jwt.verify(token, 'secret1234');
   return decoded;
}

module.exports = router
