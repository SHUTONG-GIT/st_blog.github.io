var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');

/* GET users listing. */
router.get('/getNote', function (req, res, next) {
  res.send('this is getNote');
});
router.get('/getNotelist', function (req, res, next) {
  findNodelist('./note', function (data) {
    res.json(data);
  })
});
router.get('/getNoteName/:name', function (req, res, next) {
  //   console.log(req.params.name);
  var filename = req.params.name;
  fs.readFile('./note/' + filename + '.md', function (err, data) {
    if (err) {
      res.send('文件不存在')
    } else {
      var htmlstr = marked(data.toString());
      res.json(htmlstr);
    }
  })
});

function findNodelist(path, callback) {
  let result = [];
  let files = fs.readdirSync(path);
  files.forEach(val => {
    let nodeobj = {}
    if (val.endsWith('.md')) {
      nodeobj.name = val.split('.md')[0];
      let time = fs.statSync(path + '/' + val).ctime;
      nodeobj.ctime = getDateTime(time);
      readStream = fs.createReadStream(path + '/' + val, {
        highWaterMark: 400
      });
      readStream.setEncoding('utf8');
      readStream.once('data', function (chunk) {
        nodeobj.content = chunk;
        result.push(nodeobj);
      })
    }
  })
  //   console.log(result);
  readStream.on('end', function () {
    callback(result);
    // console.log(result)
  })
}

function getDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};

module.exports = router;
