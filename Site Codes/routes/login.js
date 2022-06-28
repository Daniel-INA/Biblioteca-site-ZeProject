var express = require('express');
var router = express.Router();

const page = 'login'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { page: page });
  next()
});

module.exports = router;
