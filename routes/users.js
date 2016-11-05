var express = require('express');
var router = express.Router();
// auth check
var config = require('../scripts/globalScripts');
var isLoggedIn = config.isLoggedIn;
// require passport module
var passport = require('passport');
// link to the Account model
var Account = require('../models/account');

/* GET users listing. */
router.get('/',isLoggedIn, function(req, res, next) {
  // use Game model to run a query
  Account.find(function(err, accounts) {
      if(err) {
        console.log(err);
        res.render('error');
      }
      else {
        // load the games view
        res.render('users', {
            title: 'Accounts',
            accounts: accounts,
            user: req.user
        });
      }
  });
});

// router.get('/', isLoggedIn, function(req, res, next) {

// });

module.exports = router;
