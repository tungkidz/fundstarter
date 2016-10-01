var http = require('http');
var fs = require('fs');
var port = 8080;
var buf = fs.readFileSync("public/index.html"); // for blocking code 
var fileName = "public/index.html";
var data = null;

fs.exists(fileName, function(exists) {
    if (exists) {
	fs.stat(fileName, function(error, stats) {
	    fs.open(fileName, "r", function(error, fd) {
		var buffer = new Buffer(stats.size);

		fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
		    data = buffer.toString("utf8", 0, buffer.length);

		    // console.log(data);
		    fs.close(fd);
		    });
		});
	    });
	}
});

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/html"});
    response.end(data); // for part 2
})

// var server = http.createServer(function(request,response){
// response.writeHead(200, {"Content-Type":"text/html"});
// response.end(buf);
// });


// var server = http.createServer(function(request, response){
// fs.readFile("public/index.html", function(err, data){
// if(err){
// console.log("error:", err);
// }
// else{
// response.writeHead(200, {"Content-Type":"text/html"});
// response.write(data);
// response.end();
// }
// })
// });

server.listen(port, function(){
    console.log("Node app running @port", port);
});
