const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    url: {type: String, required: true},
    urlToImage: {type: String, required: true},
    publishedAt: {type: String, required: true},
    category: {type: String, required: true},
}, {
    versionKey: false
})

module.exports = mongoose.model('news', newsSchema)