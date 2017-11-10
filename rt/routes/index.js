var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pr', function(req, res, next) {
  request({
    uri: 'https://api.data.gov/regulations/v3/documents.json'
    qs: {
      api_key: 'hEDGLWEULDJF9i24ic68uG0NKda2veflW1DjsVEA',
      query: 'World of Warcraft: Legion'
    }
  }).pipe(res);
});

module.exports = router;
