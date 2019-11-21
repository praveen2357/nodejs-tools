var fs = require("fs");
var zlib = require("zlib");


function compressFile(){
	// compress the file input.txt to input.txt.gz
	fs.createReadStream("input.txt")
		.pipe(zlib.createGzip())
		.pipe(fs.createWriteStream("input.txt.gz"));

	console.log("file compressed");	
}


function decompressFile(){
	// unzip the file
	fs.createReadStream("input.txt.gz")
		.pipe(zlib.createGunzip())
		.pipe(fs.createWriteStream('input.txt'));

	console.log("file decompressed");
}
