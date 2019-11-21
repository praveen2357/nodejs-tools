/*
Node.js

Buffers
While dealing with TCP streams or the file system, its necessary
to handle octet streams. Node.js provides Buffer class which
provides instances to store raw data similar to an array of integers
but correspond to raw memory allocation outside the V8 heap

Buffers are very useful when we need to read things like an image
from a TCP stream, a compressed file, or any other form of binary data.
*/


// creating buffers


var buff = Buffer.from("node.js");

var buff2 = Buffer.alloc(8);

var buff3 = Buffer.allocUnsafe(8).fill();

// encoding supported: ascii, utf8, utf16le, ucs2, base64, latin1, binary, hex

// write to buffer
console.log("octets written: " + buff.length);

// difference between String/Array and Buffer
const str = "Zanᵊ";
const buff_str = Buffer.from(str);
console.log('String data', str);
console.log("string length", str.length);
console.log("buffer data", buff_str);
console.log("buffer length", buff_str.length);
// buffer is counting the actual number of bytes used to represent the given string
// string is counting characters used on UTF-8 encoding


// string operations like slice and indexOf for buffers
// slice for buffer references the same memory as the original
const originalBuff = Buffer.from("node is best");
console.log("original buff before :", originalBuff.toString());
const slicedBuff = originalBuff.slice(0, 4);
slicedBuff[0]++;
console.log("original buff after :", originalBuff.toString());
console.log("slicedBuff :", slicedBuff.toString());


