/*
GLOBAL objects

*/

console.log(__filename); // prints the absolute path of current file

console.log(__dirname); // prints the dir path of the current file

// global function used to run callback after at least ms milliseconds

function printHello(){
	console.log("Hello, World!");
}

var t = setTimeout(printHello, 2000); // run printHello after 2000 milliseconds

// global function is used to stop a timer that was previously created with
// setTimeout
clearTimeout(t);
