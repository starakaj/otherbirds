var express = require('express');
var router = express.Router();
var tutorials = require('../public/js/tutorials');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Otherbirds' });
});

router.get('/about', function(req, res) {
	res.render('about', { title: 'Aboutbirds'});
});

router.get('/projects/one-amp', function(req, res) {
	res.render('one-amp', { title: 'One-Amp Wonder'});
});

router.get('/projects/tecton', function(req, res) {
	res.render('tecton', {title: 'Tecton'});
});

router.get('/projects/mira', function(req, res) {
	res.render('mira', {title: 'Mira'});
});

router.get('/projects/breath', function(req, res) {
	res.render('breath', {title: 'Breath'});
});

router.get('/projects/viz1', function(req, res) {
	res.render('viz1', {title: 'Vizuals 1'});
});

router.get('/tutorials', function(req, res) {
	console.log("Fuck");
	res.render('tutorials', {title: 'Max Tutorials',
							tutorials: tutorials.get()});
});

module.exports = router;
