var express = require('express');
var router = express.Router();

const page = 'livro-page'
const livros = require('../public/javascripts/database/livros')

/* GET home page. */
router.get('/', function(req, res, next){
  res.redirect('/livros')
  next()
})
router.get('/:livroUrl', function(req, res, next) { 
  const livro = getlivro(req.params['livroUrl'])
  res.render('livro-page', { page: page, livro: livro});
});

module.exports = router;

function getlivro(url){
  for(livro of livros){
    if(livro.url === url) {return livro}
  }
}