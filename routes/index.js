var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Otherbirds' });
});

router.get('/about', function(req, res) {
	res.render('about', { title: 'Aboutbirds'});
});

module.exports = router;
