var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('voo/index', { title: 'Gerenciar Voos', subtitle: 'Cadastre e consulte voos' });
});

router.get('/cadastrar', function(req, res) {
    res.render('voo/cadastrar', { title: 'Cadastrar Voos', subtitle: 'Adicionar um novo voo para nossa base' });
});

router.get('/consultar', function(req, res) {
    res.render('index', { title: 'Listar voos', subtitle: 'Verificar voos cadastrados e tratar suas informações' });
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
