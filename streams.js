/*
Streams are objects that let you read data from a source or write
data to a destination in continuous fashion

types of streams
1. Readable
2. writable
3. Duplex: stream which can be used for both read and write operation
4. Transform: a type of duplex stream where the output is computed based on input


each type of Stream is an EventEmitter instance and throws several events at 
different instance of times. Commonly used events are:-
1. data
2. end
3. error
4. finish

*/

// reading from stream
var fs = require("fs");
var data = "";

// create a readable stream 
var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("UTF-8");

readerStream.on("data", function(chunk){
	data += chunk;
});

readerStream.on("end", function(){
	console.log(data);
});

readerStream.on("error", function(err){
	console.log(err.stack);
});

console.log("reading from stream ended");


