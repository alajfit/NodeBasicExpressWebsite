var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', 
        { 
            page: 'Home',
            title: 'The Art of Hacks',
            author: 'Alan Fitzpatrick',
            lastUpdated: '08/05/2015'
        });
});

module.exports = router;
