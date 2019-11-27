const express = require('express')
const router = express.Router()
const Crud = require('../models/Crud')

router.get('/', (req, res) => {
  res.render('aviao/index', { title: 'Gerenciar Aviões', subtitle: 'Cadastre e consulte aviões' })
})

router.get('/cadastrar', (req, res) => {
    res.render('aviao/cadastrar', { title: 'Cadastrar Aviões', subtitle: 'Adicionar um novo avião para nossa base', aviao: {} })
})

router.get('/consultar', async (req, res) => {
    const aviao = new Crud('aviao')

    res.render('aviao/listar', { title: 'Listar Aviões', subtitle: 'Verificar aviões cadastrados e tratar suas informações', avioes: await aviao.find() })
})

router.post('/cadastrar', (req, res) => {
    const aviao = new Crud('aviao')

    aviao.insert(req.body)
    res.render('aviao/cadastrar', { title: 'Cadastrar Aviões', subtitle: 'Avião cadastrado com sucesso', aviao: {} })
})

router.get('/editar/:registro?', async (req, res) => {
    const aviao = new Crud('aviao')

    res.render('aviao/cadastrar', {
        title: 'Editar avião',
        subtitle: `Edite o avião de registro nº ${req.params.registro}`,
        aviao: await aviao.findOne({registro: req.params.registro})
    })
})

router.post('/editar', async (req, res) => {
    const aviao = new Crud('aviao')

    await aviao.update("registro", req.body)
    res.render('aviao/listar', { title: 'Listar Aviões', subtitle: 'Avião editado com sucesso', avioes: await aviao.find() })
})

router.get('/excluir/:registro?', async (req, res) => {
    const aviao = new Crud('aviao')

    await aviao.remove({registro: req.params.registro})
    res.render('aviao/listar', { title: 'Listar Aviões', subtitle: 'Avião removido com sucesso', avioes: await aviao.find() })
})
module.exports = router
