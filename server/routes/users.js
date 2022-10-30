
/*
File Name: app.js
Name: Sandip Mishra
Id: 301235936
Date: 30 October 2022
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
