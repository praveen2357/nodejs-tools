/*
reading the file

fs.read(fd, buffer, offset, length, position, callback)

*/

var fs = require("fs");
var buff = Buffer.alloc(1024);


console.log("going to open an existing file");
fs.open("input.txt", 'r+', function(err, fd){
	if(err) {
		return console.error(err);
	}

	console.log("File openend successfully");
	console.log("Going to read the file");

	fs.read(fd, buff, 0, buff.length, 0, function(err, bytes){
		if(err){
			console.err(err);
		}
		console.log(bytes + "bytes read");

		// print only read bytes to avoid junk
		if(bytes > 0){
			console.log(buff.slice(0, bytes).toString());
		}
	})
});

