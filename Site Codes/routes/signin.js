var express = require('express');
var router = express.Router();

const page = 'signin'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signin', { page: page });
  next()
});

module.exports = router;
