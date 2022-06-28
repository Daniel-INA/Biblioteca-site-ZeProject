var express = require('express');
var router = express.Router();

const page = 'readpage'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('readpage', { page: page });
  next()
});

module.exports = router;
