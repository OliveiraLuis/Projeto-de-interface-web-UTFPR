var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('passagem/index', { title: 'Gerenciar Passagens', subtitle: 'Compre e gerencie suas passagens' });
});

router.get('/comprar', function(req, res) {
    res.render('passagem/comprar', { title: 'Comprar passagem', subtitle: 'Comprar passagem para um voo' });
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
