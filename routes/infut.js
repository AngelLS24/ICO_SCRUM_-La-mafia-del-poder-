var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('infut', { title: 'La Mafia del Poder' });
});

module.exports = router;
