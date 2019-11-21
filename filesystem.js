/*
Node implements File I/O using simple wrappers around standard POSIX functions
*/

var fs = require("fs");

// asynchronous read
fs. readFile('input.txt', function(err, data){
	if(err){
		return console.error(err);
	}
	console.log("asynchronous read: \n" + data.toString());
});

// synchronous read
var data = fs.readFileSync("input.txt");
console.log("synchronous read: \n" + data.toString());
console.log("program ended");


// asynchronous - opening file
console.log("going to open file!");
//fs.open(path, flags[, mode], callback);
/* 
flags:
r - open file for reading
r+ - open file for reading and writing. An exception occurs if the file does not exist.
rs - open file for reading in synchronous mode
rs+ - open file for reading and writing, asking to OS to open it synchronously
w - open file for writing. The file is created (if it does not exist) or truncated (if it exists).
wx - like 'w' but fails if the path exists.
w+ - open file for reading and writing. The file is created(if it does not exist) or truncated (if it exists)
wx+ - like 'w+' but fails if path exists
a - open file for appending. The file is created if it does not exist.
ax - like 'a' but fails if the path exists
a+ - open file for reading and appending. The file is created if it does not exist
ax+ - like 'a+' but fails if the path exists
*/
fs.open("input.txt", "r+", function(err, fd){
	if (err){
		return console.error(err);
	}
	console.log("file opened successfully");
	console.log("file data: \n" + fd);
});


// get file informati