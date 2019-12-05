var router = require('express').Router()
const Crud = require('../models/Crud')

router.get('/', function(req, res) {
  res.render('passagem/index', { title: 'Gerenciar Passagens', subtitle: 'Compre e gerencie suas passagens' });
});

router.get('/buscarVoo/:dtViagem?', async (req, res) => {
    const voo = new Crud('voo')

    res.render('passagem/comprar', { title: 'Comprar passagem', subtitle: 'Comprar passagem para um voo', voos: await voo.find({ dtViagem: req.query.dtViagem }) });
})

router.get('/comprar', function(req, res) {
    res.render('passagem/comprar', { title: 'Comprar passagem', subtitle: 'Comprar passagem para um voo', voos: [] });
});

router.post('/comprar', function(req, res) {
    let passagem = new Crud('passagem')

    passagem.insert(req.body)
    res.render('passagem/comprar', { title: 'Comprar passagem', subtitle: 'Passagem comprada com sucesso', voos: [] });
});

router.get('/consultar', function(req, res) {
    res.render('passagem/consultar', { title: 'Consultar passagem comprada', subtitle: 'Verificar voos cadastrados e tratar suas informações' });
});

router.get('/checkin', function(req, res) {
    res.render('passagem/checkin', { title: 'Check-in', subtitle: 'Confirmar a compra de uma passagem' });
});

router.put('/editar', function(req, res) {
    res.send('Not implemented yet');
});

router.delete('/excluir', function(req, res) {
    res.send('Not implemented yet');
});
module.exports = router;
