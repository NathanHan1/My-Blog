var express = require('express');
var app = express();
var Model = require('./mongodb.js');
var formidable = require('formidable');

app.use(express.static('../www'));

app.use(express.static('../www/dist'));

app.listen(7900, function(err) {
    console.log('成功');
});

//查找全部

app.get('/blog', function(req, res) {
    Model.article.find().exec(function(err, data) {
        res.json(data);
    });
});

app.delete('/blog/:time', (req, res) => {
    const time = req.params.time;
    Model.article.remove({ time: time }, function(err, data) {
        res.send('ok');
    });
});

app.post('/blog', function(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, data) {
        //这个data解析了吗
        const newData = new Model.article(data);
        newData.save();
        res.send('ok');
    });
});

app.post('/account', function(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, data) {
        Model.account.find(data).exec(function(err, data) {
            if (data.length == 0) {
                res.send('account or password is wrong');
            } else if (data.length == 1) {
                res.send('ok');
            }
        });
    });
});
