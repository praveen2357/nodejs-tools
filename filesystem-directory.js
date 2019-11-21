

var fs = require("fs");

var dirPath = "/tmp/test";

function createDirectory(dirPath){
	/*
	Create a Directory

	fs.mkdir(path[, mode], callback)

	mode: directory permission to be set. Defaults to 777
	*/
	console.log("create a temp directory");
	fs.mkdir(dirPath, function(err){
		if(err){
			console.error(err);
		}
		console.log("directory created successfully");
	});	
}


function readDirectory(dirPath){
	/*
	Read a Directory

	fs.readdir(path, callback)
	*/
	console.log("reading directory");
	fs.readdir(dirPath, function(err, files){
		if(err){
			return console.error(err);
		}
		files.forEach(function(file){
			console.log(file);
		})
	})
}


function deleteDirectory(dirPath){
	/*
	Remove a Directory
	fs.rmdir(path, callback)
	*/
	console.log("remove directory");
	fs.rmdir(dirPath, function(err){
		if(err){
			console.error(err);
		}
		console.log('directory deleted');
	})
}

// createDirectory(dirPath);
readDirectory(dirPath);
//deleteDirectory(dirPath);
