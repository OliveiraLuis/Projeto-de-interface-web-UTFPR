var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Home Page', subtitle: 'Conheça nossos serviços' });
});

module.exports = router;
