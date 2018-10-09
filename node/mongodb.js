const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/blog',
    { useMongoClient: true }
);

const articleSchema = mongoose.Schema(
    {
        title: String,
        content: String,
        prev: String,
        date: Object,
        img: String,
        time: Number
    },
    { collection: 'article' }
);

const Article = mongoose.model('article', articleSchema, 'article');

module.exports = Article

