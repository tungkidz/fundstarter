var http = require('http');
var fs = require('fs');
var port = 8080;
var buf = fs.readFileSync("public/index.html"); // for blocking code 

var server = http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type":"text/html"});
    response.end(buf);
});


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
