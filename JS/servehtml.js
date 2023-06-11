const http=require("http");
const fs=require("fs");
const filen = fs.readFileSync("DOM.html");
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(filen);
})
server.listen(80,'127.0.0.1',()=>{
    console.log("Running on Port:80");
});
// port 80 default hoti likhne kee zaroorat nhi baqi sab k liye web pr port likhna parti