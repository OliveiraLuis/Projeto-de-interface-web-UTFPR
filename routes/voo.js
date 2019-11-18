const router = require('express').Router()
const Crud = require('../models/Crud')

router.get('/', (req, res) => {
  res.render('voo/index', { title: 'Gerenciar Voos', subtitle: 'Cadastre e consulte voos' });
});

router.get('/cadastrar', (req, res) => {
    res.render('voo/cadastrar', { title: 'Cadastrar Voos', subtitle: 'Adicionar um novo voo para nossa base', voo: {} });
});

router.get('/consultar', async (req, res) => {
    const voo = new Crud('voo')
    res.render('voo/listar', { title: 'Listar voos', subtitle: 'Verificar voos cadastrados e tratar suas informações', voos: await voo.find() });
});

router.get('/editar/:numeroVoo?', async (req, res) => {
    const voo = new Crud('voo')

    res.render('voo/cadastrar', {
        title: 'Editar voo',
        subtitle: `Edite o voo de nº ${req.params.numeroVoo}`,
        voo: await voo.find({numeroVoo: req.params.numeroVoo})
    })
})

router.post('/editar', async (req, res) => {
    const voo = new Crud('voo')

    await voo.update(req.body)
    res.render('voo/listar', { title: 'Listar Voos', subtitle: 'Voo editado com sucesso', voos: await voo.find() })
})

router.get('/excluir/:numeroVoo?', async (req, res) => {
    const voo = new Crud('voo')

    await voo.remove({numeroVoo: req.params.numeroVoo})
    res.render('voo/listar', { title: 'Listar Voos', subtitle: 'Voo removido com sucesso', voos: await voo.find() })
})
module.exports = router;
