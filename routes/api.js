const router = require("express").Router();
const Article = require('../models/article');

router.post("/api/articles", function(req, res) {
    Article.create(req.body).then((doc) => {
        res.json(doc);
    }).catch(err => {
        res.json(err);
    });
});

router.get('/api/articles', function(req, res) {
    Article.find(req.body).then((docs) => {
        res.json(docs);
    });
});

router.get('/api/articles/:id', function(req, res) {
    Article.findOne({
        url: req.params.id
    }).then(docs => {
        res.json(docs);
    });
});

router.delete('/api/articles/:id', function(req, res) {
    Article.deleteOne({
        url: req.params.id
    }).then(docs => {
        res.json(docs);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;