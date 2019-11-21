var fs = require("fs");

// fs.stat(path, callback)
// callback function which gets two arguments (err, stats) where stats
// is an object of fs.Stats type which is printed below in the example

/* 
fs.Stats class methods
stats.isFile() - return true if file type of a simple file
stats.isDirectory() - returns true if file type of a directory
stats.isBlockDevice() - returns true if file type of a block device
stats.isSymbolicLink() - return true if file type of a symbolic link
stats.isFIFO() - return true if file type of a FIFO
stats.isSocket() - returns true if file type of a socket
*/

console.log("going to get file info!");
fs.stat("input.txt", function(err, stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log("got file info successfully");

	// check file type
	console.log("isFile ? " + stats.isFile());
	console.log("isDirectory ? " + stats.isDirectory());
});
