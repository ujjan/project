var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var url = "https://api.github.com/repos/1dv523/aa222zh-examination-3/issues?per_page=100&page=1&sort=created&state=open&access_token=" + process.env.token;
  request(
    {
      url: url,
        headers: {
        'User-Agent': 'request'
      }
    }, function (error, response, body) {
      console.log( JSON.parse(body))
      res.render('index', { issues: JSON.parse(body) });


    })


});

router.post('/', function(req, res) {
  res.io.emit("new-issue", res.req.body);
  res.send('respond with a resource.');
})



module.exports = router;
