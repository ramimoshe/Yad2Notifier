var searchRequest = {};


searchRequest.getLastSync = function (){
	return new Date(2012, 1, 30, 10, 30, 0, 0);
}

searchRequest.getSearchRequest = function (requestId){
	var request = {};
	request.lastSyncDatetime = new Date(2012, 1, 30, 10, 30, 0, 0);
	request.requestId = 10;
	request.query = "aaa&bbb&ccc";

	return request;
}

module.exports = searchRequest;