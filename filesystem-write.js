var fs = require("fs");

/*
fs.write(filepath, data[, option], callback)

path - string having the filename including path
data - this is the string or buffer to be written into the file
options - hold {encoding, mode, flag}. Default encoding 'utf-8', mode is octal value 0666 and flag is 'w'
callback - function which gets a single parameter err that returns an error in case of any writing error

*/

console.log("going to write into existing file");
fs.writeFile("input.txt", "simple easy learning", function(err){
	if(err){
		return console.error(err);
	}

	console.log("data written successfully");
	console.log("let's read newly written data");

	fs.readFile('input.txt', function(err, data){
		if(err){
			return console.error(err);
		}

		console.log("asynchronous read: " + data.toString());
	});
});


