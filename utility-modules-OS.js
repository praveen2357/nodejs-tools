/*
node utility modules

*/

// "os" module provide a few basic operating system related utility functions
var os = require("os");

// temp directory
console.log(os.tmpdir());

console.log(os.endianness());

// hostname of operating system
console.log(os.hostname());

// operating system name
console.log(os.type());

// operating system platform
console.log(os.platform());

// operating system CPU architecture
console.log(os.arch());

// operating system release
console.log(os.release());

// system uptime in seconds
console.log(os.uptime());

//total amount of system memory in bytes
console.log(os.totalmem());
console.log("system ram(in GB): " + os.totalmem()/1024/1024/1024);

// amount of free system memory in bytes
console.log(os.freemem());
console.log("free memory(in GB):" + os.freemem()/1024/1024/1024);

// information about each CPU/core installed
console.log(os.cpus());


