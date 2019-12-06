var router = require('express').Router();
const Crud = require('../models/Crud')
const _ = require('lodash')

router.get('/', async (req, res) => {
  const relatorio = new Crud('vwRelatorio')
  res.render('relatorio/index', { title: 'Relatórios', subtitle: 'Relatório de vendas', relatorio: { dias, aviao, acento} });
});

module.exports = router;