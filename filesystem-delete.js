/*
Delete a file

fs.unlink(path, callback)
*/

var fs = require("fs");

console.log("delete an existing file");
fs.unlink('input.txt.gz', function(err){
	if(err){
		return console.error(err);
	}
	console.log("file deleted successfully");
});

