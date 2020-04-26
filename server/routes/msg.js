var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'hello world!'
  });
});
router.get('/getlist', function (req, res, next) {
  connection.query("select * from message", function (err, results, fields) {
    if (err) {
      console.log('数据库连接错误'+ err.message);
    }
    res.json(results);
    // console.log(results)
    connection.end
  })
});
router.post('/addmsg', function (req, res, next) {
  console.log(req.body);
  var addSql = 'INSERT INTO message(uid, uname, msgtime, msg) VALUES(null, ?, ?, ?)'; // 创建一个通用的sql，并预留出填补的空位
  var addSqlParams = [req.body.uname, req.body.msgtime, req.body.msg];
  connection.query(addSql, addSqlParams, (err, results) => {
    if (err) {
      console.log('数据库连接错误'+ err.message);
    }
    // console.log(results);
    connection.end
  })
  connection.query("select * from message", function (err, results, fields) {
    if (err) {
      console.log('数据库连接错误'+ err.message);
    }
    res.json(results);
    // console.log(results)
    connection.end
  })
})
module.exports = router;
