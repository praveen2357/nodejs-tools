/* 
Closing a file

fs.close(fd, callback)
*/

var fs = require("fs");
var buff = Buffer.alloc(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd){
	if(err){
		console.error(err);
	}
	console.log("file opened successfully");
	console.log("start reading file");

	fs.read(fd, buff, 0, buff.length, 0, function(err, bytes){
		if(err){
			console.error(err);
		}

		//print only read bytes to avoid junk
		if(bytes > 0){
			console.log(buff.slice(0, bytes).toString());
		}

		// close the opened file
		fs.close(fd, function(err){
			if(err){
				console.error(err);
			}
			console.log("file closed successfully");
		})
	})
});
