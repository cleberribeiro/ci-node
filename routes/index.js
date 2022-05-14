var express = require('express');
var router = express.Router();
var statusServer = require('../services/statusServer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json(statusServer());
});

module.exports = router;
