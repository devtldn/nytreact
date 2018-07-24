const router = require("express").Router();
const Article = require('../models/article');

router.post("/api/article", function(req, res) {
    Article.create(req.body).then((doc) => {
        res.json(doc);
    }).catch(err => {
        res.json(err);
    });
});

router.get('/api/article', function(req, res) {
    Article.find(req.body).then((docs) => {
        res.json(docs);
    });
});

router.get('/api/article/:id', function(req, res) {
    Article.findOne({
        _id: req.params.id
    }).then(docs => {
        res.json(docs);
    });
});

router.delete('/api/article/:id', function(req, res) {
    Article.deleteOne({
        _id: req.params.id
    }).then(docs => {
        res.json(docs);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;