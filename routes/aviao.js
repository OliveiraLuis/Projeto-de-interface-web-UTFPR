const express = require('express')
const router = express.Router()
const Aviao = require('../models/aviao')

router.get('/', function(req, res) {
  res.render('aviao/index', { title: 'Gerenciar Aviões', subtitle: 'Cadastre e consulte aviões' });
});

router.get('/cadastrar', function(req, res) {
    res.render('aviao/cadastrar', { title: 'Cadastrar Aviões', subtitle: 'Adicionar um novo avião para nossa base' });
});

router.get('/consultar', async (req, res) => {
    const aviao = new Aviao()
    
    res.render('aviao/listar', { title: 'Listar Aviões', subtitle: 'Verificar aviões cadastrados e tratar suas informações', avioes: await aviao.find() });
});

router.post('/cadastrar', function(req, res) {
    const aviao = new Aviao()

    aviao.insert(req.body)
    res.render('aviao/cadastrar', { title: 'Cadastrar Aviões', subtitle: 'Avião cadastrado com sucesso' });
});

router.put('/editar', function(req, res) {
    res.send('Not implemented yet');
});

router.delete('/excluir', function(req, res) {
    res.send('Not implemented yet');
});
module.exports = router;
