var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.get('/community', function(req, res, next) {
  res.render('community');
});

router.get('/group_detail', function(req, res, next) {
  res.render('group_detail');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/individual_detail', function(req, res, next) {
  res.render('individual_detail');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/makeCommunity', function(req, res, next) {
  res.render('makeCommunity');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

module.exports = router;
