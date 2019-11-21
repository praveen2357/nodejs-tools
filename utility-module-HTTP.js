/*
nodejs http utility module
*/

var http = require("https");
var Stream = require("stream").Transform;
var fs = require("fs");

var url = 'https://www.google.com/images/srpr/logo11w.png';

http.request(url, function(resp){
	console.log(resp);
	var data = new Stream();

	resp.on('data', function(chunk){
		console.log('reading response data');
		data.push(chunk);
	});

	resp.on('end', function(){
		console.log("writing the data stream to file");
		fs.writeFileSync('google.png', data.read());
	});
}).end();

