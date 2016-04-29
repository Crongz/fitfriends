var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.get('/community', function(req, res, next) {
  res.render('community');
});

router.get('/edit_community', function(req, res, next) {
  res.render('edit_community');
});

router.get('/group_detail', function(req, res, next) {
  res.render('group_detail');
});

router.get('/individual_detail', function(req, res, next) {
  res.render('individual_detail');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/create_community', function(req, res, next) {
  res.render('create_community');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.get('/create_competition', function(req, res, next) {
  res.render('create_competition');
});

router.post('user', function (req, res) {
  res.render('dashboard');
});

module.exports = router;
