var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('definiciones_basicas', { title: 'La Mafia del Poder' });
});

module.exports = router;
