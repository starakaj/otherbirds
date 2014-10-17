var express = require('express');
var router = express.Router();
var tutorials = require('../public/js/tutorials');
var url = require('url');
var path = require("path");
var NA = require("nodealytics");

NA.initialize("UA-27386804-1", "otherbirds.com", function() {console.log("Analytics post-initialization...");});

function trackDownloadEvent(filename, pathname, resp) {
	NA.trackPage(filename, pathname, function (err, resp) {
		if (!err && resp.statusCode === 200) {
			console.log('Page ' + pathname + ' has been tracked with Google Analytics');
		} else {
			console.log('Could not track ' + pathname + ' with Google Analytics');
		}
	});
}

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
	res.render('tutorials', {title: 'Max Tutorials',
							tutorials: tutorials.get()});
});

router.get('/tutorials/*', function(req, res, next) {
	var pathname = url.parse(req.url).pathname;
	var pathnameArray = pathname.split("/");
	if (pathnameArray.length >= 2) {
		if (pathnameArray[1].toLowerCase() == "tutorials") {
			var file = __dirname+req.url;
			var filename = path.basename(file);
			trackDownloadEvent(filename, pathname, res);
		}
	}
	next();
});

module.exports = router;
