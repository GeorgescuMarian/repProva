"use strict";
let http=require("http");
/*let server=http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    res.write("Creazione di un server node");
    res.write("\nTesto scritto tramite una funzione di callback definita all'interno della createServer");
    res.end();
    
});*/
let server=http.createServer(crea);

server.listen(1337,"127.0.0.1");
console.log("Server running on port 1337");

function crea(req,res) {
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    res.write("Creazione di un server node");
    res.write("\nTesto scritto tramite una funzione di callback definita esterna alla createServer");
    res.end();
}