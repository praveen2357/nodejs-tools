/*
Truncate a file

fs.ftruncate(fd, len, callback)
*/

var fs = require("fs");
var buff = Buffer.alloc(1024);

console.log("open an existing file");
fs.open("input.txt", "r+", function(err, fd){
	if(err){
		return console.error(err);
	}
	console.log("file opened successfully");
	console.log("truncate the file after 10 bytes");

	// truncate the opend file
	fs.ftruncate(fd, 10, function(err){
		if(err){
			console.error(err);
		}

		console.log('file truncated successfully');
		console.log("read the same file");

		fs.read(fd, buff, 0, buff.length, 0, function(err, bytes){
			if(err){
				console.error(err);
			}

			// print only read bytes to avoid junk
			if(bytes > 0){
				console.log(buff.slice(0, bytes).toString());
			}

			// close the file
			fs.close(fd, function(err){
				if(err){
					console.error(err);
				}
				console.log("file closed");
			});
		});
	});
});
