var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//注册
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{title:'注册'});
});
router.post('/reg', function(req, res, next) {
  res.redirect('/');
});

//登录
router.get('/login', function(req, res, next) {
  res.render('user/login',{title:'登录'});
});
router.post('/login', function(req, res, next) {
  res.redirect('/');
});

//退出
router.get('/logout', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
