const router = require('express').Router()
const Crud = require('../models/Crud')

router.get('/', (req, res) => {
  res.render('voo/index', { title: 'Gerenciar Voos', subtitle: 'Cadastre e consulte voos' });
});

router.get('/cadastrar', (req, res) => {
    res.render('voo/cadastrar', { title: 'Cadastrar Voos', subtitle: 'Adicionar um novo voo para nossa base' });
});

router.get('/consultar', async (req, res) => {
    const voo = new Crud('voo')
    res.render('voo/listar', { title: 'Listar voos', subtitle: 'Verificar voos cadastrados e tratar suas informações', voos: await voo.find() });
});

router.post('/cadastrar', (req, res) => {
    const voo = new Crud('voo')

    voo.insert(req.body)
    res.render('voo/cadastrar', { title: 'Cadastrar Voos', subtitle: 'Voo cadastrado com sucesso', voo: {} })
});

router.put('/editar', (req, res) => {
    res.send('Not implemented yet');
});

router.get('/excluir/:numVoo?', async (req, res) => {
    const voo = new Crud('voo')

    await voo.remove({numeroVoo: req.params.numVoo})
    res.render('voo/listar', { title: 'Listar Voos', subtitle: 'Voo removido com sucesso', voos: await voo.find() })
})
module.exports = router;
