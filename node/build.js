var express = require('express');
var app = express();
var Article = require('./mongodb.js');
var formidable = require('formidable');

app.use(express.static('../www'));

app.listen(7900, function(err) {
    console.log('成功');
});

//查找全部

app.get('/blog', function(req, res) {
    Article.find().exec(function(err, data) {
        res.json(data);
    });
});

app.delete('/blog/:time', (req, res) => {
    const time = req.params.time;
    Article.remove({ time: time }, function(err, data) {
        res.send('ok');
    });
});

app.post('/blog', function(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, data) {
        //这个data解析了吗
        const newData = new Article(data);
        newData.save();
        res.send('ok');
    });
});
