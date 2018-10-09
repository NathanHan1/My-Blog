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

const accountSchema = mongoose.Schema(
    {
        user: String,
        password: Number
    },
    { collection: 'account' }
);

const Model = {
    article : mongoose.model('article', articleSchema, 'article'),
    account: mongoose.model('account', accountSchema, 'account')
};

module.exports = Model;
