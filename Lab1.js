/*1.Write a NodeJS program to create college information http server*/
const http=require("http");
const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"});
    //Step5 write a information of college using write() function
    resp.write(`<h1>BLDEA'S Commerce BHS Arts TGP Science College </h1>`);
    resp.write(`<h2>Started year 1963</h2>`);
    resp.write(`<h3>Located in Jamakhandi</h3>`);
    //Step6 end the response using end() function
    resp.end();

})
//step3 listen the client request on port number 3000
server.listen(3000,()=>{console.log("Server has been started")})