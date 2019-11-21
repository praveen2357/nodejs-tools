var fs = require("fs");
var data = "Simple easy learning";

// writing to a stream
var writerStream = fs.createWriteStream("output.txt");
// write data to stream with encoding to be utf-8
writerStream.write(data, 'UTF-8');
// mark the end of file
writerStream.end();

// handle stream events --> finish, and error
writerStream.on("finish", function(){
	console.log("wite completed");
});

writerStream.on("error", function(err){
	console.log(err.stack);
});

console.log("writing to stream ended");

