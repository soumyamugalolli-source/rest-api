/*2 Write a NodeJS program to demonstrate http get request and post request of student data*/
//Step1 import http module
const http=require("http")
//Step2 create a server using createServer() function of http
const server=http.createServer((req,resp)=>{
//Step4 check  the condition request is get or not
if(req.method=="GET"){
//Step5 write the response header
resp.writeHead(200,{"content-type":"text/html"})
//Step6 generate a blank html form using write() function 
resp.write(`<form method="post">`)   
resp.write(`RollNo:<input type="text" name="rno" /><br />`)
resp.write(`Name:<input type="text" name="name" /><br />`)
resp.write(`<button type="submit">Save</button>`)
resp.write(`</form>`)
//Step7 end the response using end() function
resp.end()
}
else if(req.method=="POST"){
    //Step8 on data event
    let body=``;
    req.on("data",(chunks)=>{
        body=body+chunks
    })
    //Step9 on end event
    req.on("end",()=>{
        let data=new URLSearchParams(body);
        console.log(`RollNo=${data.get("rno")}`)
        console.log(`Name=${data.get("name")}`)
    })
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write(`<h1>Your information is recieved</h1>`)
    resp.end();
}
})
//Step3 listen the client request on port number 3000
server.listen(3000,()=>{console.log("Server has been started")})