let employees=[
    {id:1,name:'Kamala',salary:25000},
    {id:2,name:'Chetan',salary:30000}
]
const express=require("express")
const app=express()
app.use(express.json())
app.get("/employees",(req,resp)=>{
    resp.json(employees)
})
app.get("/employees",(req,resp)=>{
    let eid=req.params.id
    let e=employees.find((e)=>{return e.id=eid})
    if(e){
        resp.json(e)
    }else{
        resp.status(404).json({"message":"Employee record not found"})
    }
})
app.post("/employees",(req,resp)=>{
    let id=req.body.id
    let name=req.body.name
    let salary=req.body.salary
    let e={id:id,name:name,salary:salary}
    employees.push(e)
    resp.status(201).json({"message":"Employee record inserted","employee":e})
})
app.put("/employees/:id",(req,resp)=>{
    let eid=req.params.id
    let name=req.body.name
    let salary=req.body.salary
    let e={id:eid,name:name,salary:salary}
    let index=employees.findIndex((e)=>{return e.id==eid})
    if(index!=-1){
        employees[index]=e
        resp.json({"message":"Employee record updated","employee":e})
    }else{
        resp.status(404).json({"message":"Employee record not updated"})
    }
})
app.delete("/employees/:id",(req,resp)=>{
    let eid=req.params.id
    let e=employees.find((e)=>{return e.id==eid})
    if(e){
        employees=employees.filter((e)=>{return e.id!=eid})
        resp.json({"message":"Employee record deleted"})
    }
    else{
        resp.status(404).json({"message":"Employee record not found"})
    }
})
app.listen(3000,()=>{console.log("Server started")})