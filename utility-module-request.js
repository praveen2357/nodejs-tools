/*
nodejs request utility module
*/

const request = require('request');
const fs = require("fs");

var url = 'http://wallpaperplay.com/walls/full/0/d/4/144846.jpg';

request
  .get(url)
  .on('response', function(response) {
    console.log(response.statusCode); // 200
    console.log(response.headers['content-type']); // 'image/png'
  }).pipe(fs.createWriteStream('naruto-itachi.jpg'));

