const express =require("express");
const conn = require("../db/connection");
const taskrouter = new express.Router()



taskrouter.get("/task/:id",async(req,res)=>{

    const {id}=req.params;
    conn.query("SELECT * FROM tasks WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("Not able to get tasks data")
        }else{
    res.status(201).json(result);
    
        }
    })
    });


// get req
taskrouter.get("/task",async(req,res)=>{

conn.query("SELECT * FROM tasks",(err,result)=>{
    if(err){
        res.status(422).json("Not able to get tasks data")
    }else{
res.status(201).json(result);
    }
})
});

// post routes
taskrouter.post("/task/create",(req,res)=>{

   const {title,description,created,updated}= req.body
try{
conn.query("INSERT INTO tasks SET ?",{title,description,created,updated},(err,result)=>{
    if(err){
console.log("err"+err);
    }else{
res.status(201).json(req.body);
    }
})
}catch(error){
res.status(422).json(error)
}
});


// del req 
taskrouter.delete("/task/:id",async(req,res)=>{
const {id}=req.params;
    conn.query("DELETE FROM tasks WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("Not able to get tasks data")
        }else{
    res.status(201).json(result);
    console.log("Particular entry removed")
        }
    })
    });

    // update / patch req 
    taskrouter.patch("/task/:id",(req,res)=>{
        const {id}=req.params
        const data =req.body
        conn.query("UPDATE tasks SET ? where id = ?",[data,id],(err,result)=>{
            if(err){
                res.status(422).json({"Message":err})
            }else{
                res.status(201).json(result);
            }
        })
    })

module.exports=taskrouter;