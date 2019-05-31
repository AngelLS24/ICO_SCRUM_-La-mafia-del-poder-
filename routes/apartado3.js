var express = require('express');
var router = express.Router();

router.get('/que_es_scrum', function(req, res, next) {
  	res.render('paginas/apartado3/que_es_scrum', { title: '¿Qué es SCRUM?' });
});

router.get('/CRM', function(req, res, next){
	res.render('paginas/apartado3/CRM', { title: 'CRM' });
});

router.get('/MIS', function(req, res, next){
	res.render('paginas/apartado3/CRM', { title: 'CRM' });
});

router.get('/roles', function(req, res, next){
	res.render('paginas/apartado3/roles_scrum', { title: 'Roles' });
});
module.exports = router;
