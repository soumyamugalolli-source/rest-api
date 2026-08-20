const http=require("http");
const server=http.createServer((req,res)=>{
   resp.writeHead(200,{"Content-Type":"plain"});
   resp.end("<h1>Hello</h1>");
});
server.listen(3000,()=>{console.log("server has been started")})