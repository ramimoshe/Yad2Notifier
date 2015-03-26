var searchRequestsData = require('../Data/searchRequests');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:requestId/:lastSyncDatetime', function(req, res, next) {
  res.send(searchRequestsData.getSearchRequest(req.params.requestId));
});

router.get('/lastSync', function(req, res, next) {
  res.send(searchRequestsData.getLastSync());
});

module.exports = router;
