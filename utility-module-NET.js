/*
nodejs net utility module

*/

var url = 'https://www.nvestlabs.com/wp-content/uploads/2019/04/server.jpg'

var net = require("net");

net.connect(80, url, function(){
	console.log('connected to server');
});
