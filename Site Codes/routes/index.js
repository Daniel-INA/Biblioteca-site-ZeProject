var express = require('express');
var router = express.Router();

const page = 'index'
const livros = require('../public/javascripts/database/livros')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    page: page,
    livros: livros
  });
});

module.exports = router;
