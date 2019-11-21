/* 
node path utility module
*/

var path = require("path");

// normalize the path
console.log(path.normalize('/Users/praveen/Documents/../Desktop/..'));

// join the path
console.log(path.join(__dirname, 'input.txt'));

// resolve to an absolute path
// attaches the current folder 
console.log(path.resolve('test/input89.txt'));

// return the dirname of a path
console.log(path.dirname('/Users/praveen/Documents/yolo-paper-1506.02640.pdf'));

// returns the last portion of a path
console.log(path.basename('/Users/praveen/Documents/yolo-paper-1506.02640.pdf'));
console.log(path.basename('/Users/praveen/Documents/'));


// returns the extension of the path
console.log(path.extname('/Users/praveen/Documents/yolo-paper-1506.02640.pdf'));
console.log(path.extname('/Users/praveen/Documents'));

// returns an object from a path string
var pathObj = path.parse('/Users/praveen/Documents/yolo-paper-1506.02640.pdf');
console.log(pathObj);

// returns a path string from an object i.e. opposite of path.parse
console.log(path.format(pathObj));

// properties
console.log(path.sep);
console.log(path.delimiter);
