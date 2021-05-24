const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String},
  urlToImage: { type: String},
  publishedAt: { type: String},
  category: { type: String}
}, {
  versionKey: false
})

const News = mongoose.model('news', NewsSchema)

module.exports = News
