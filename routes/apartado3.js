var express = require('express');
var router = express.Router();

router.get('/TPS', function(req, res, next) {
  	res.render('paginas/apartado3/sistemas_de_información_transaccionales', { title: 'TPS' });
});

router.get('/CRM', function(req, res, next){
	res.render('paginas/apartado3/CRM', { title: 'CRM' });
});

router.get('/MIS', function(req, res, next){
	res.render('paginas/apartado3/CRM', { title: 'CRM' });
});

module.exports = router;
