const router = require('express').Router()
const Crud = require('../models/Crud')

router.get('/', (req, res) => {
  res.render('voo/index', { title: 'Gerenciar Voos', subtitle: 'Cadastre e consulte voos' });
});

router.get('/cadastrar', async (req, res) => {
    const aviao = new Crud('aviao')
    res.render('voo/cadastrar', { title: 'Cadastrar Voos', subtitle: 'Adicionar um novo voo para nossa base', voo: {}, avioes: await aviao.find() });
});

router.post('/cadastrar', (req, res) => {
    const voo = new Crud('voo')

    voo.insert(req.body)
    res.render('voo/cadastrar', { title: 'Cadastrar Voos', subtitle: 'Voo cadastrado com sucesso', voo: {}, avioes: [] })
});

router.get('/consultar', async (req, res) => {
    const voo = new Crud('voo')
    res.render('voo/listar', { title: 'Listar voos', subtitle: 'Verificar voos cadastrados e tratar suas informações', voos: await voo.find() });
});

router.get('/editar/:numeroVoo?', async (req, res) => {
    const voo = new Crud('voo')
    const aviao = new Crud('aviao')

    res.render('voo/cadastrar', {
        title: 'Editar voo',
        subtitle: `Edite o voo de nº ${req.params.numeroVoo}`,
        voo: await voo.findOne({numeroVoo: req.params.numeroVoo}),
        avioes: [...await aviao.find({ registro: voo.aviao }), ...await aviao.find()]
    })
})

router.post('/editar', async (req, res) => {
    const voo = new Crud('voo')

    await voo.update("numeroVoo", req.body)
    res.render('voo/listar', { title: 'Listar Voos', subtitle: 'Voo editado com sucesso', voos: await voo.find() })
})

router.get('/excluir/:numeroVoo?', async (req, res) => {
    const voo = new Crud('voo')

    await voo.remove({numeroVoo: req.params.numeroVoo})
    res.render('voo/listar', { title: 'Listar Voos', subtitle: 'Voo removido com sucesso', voos: await voo.find() })
})
module.exports = router;
