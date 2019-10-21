var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('aviao/index', { title: 'Gerenciar Aviões', subtitle: 'Cadastre e consulte aviões' });
});

router.get('/cadastrar', function(req, res) {
    res.render('aviao/cadastrar', { title: 'Cadastrar Aviões', subtitle: 'Adicionar um novo avião para nossa base' });
});

router.get('/consultar', function(req, res) {
    res.render('index', { title: 'Listar Aviões', subtitle: 'Verificar aviões cadastrados e tratar suas informações' });
});

router.post('/cadastrar', function(req, res) {
    res.send('Not implemented yet');
});

router.put('/editar', function(req, res) {
    res.send('Not implemented yet');
});

router.delete('/excluir', function(req, res) {
    res.send('Not implemented yet');
});
module.exports = router;
