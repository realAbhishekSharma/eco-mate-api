var express = require('express');
var router = express.Router();
const User = require("../models/User")
const House = require("../models/House")
const sqlConnection = require("../config/sql-connection")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
