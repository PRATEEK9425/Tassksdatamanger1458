const express = require("express")
const app = express()
const cors = require("cors")
require("./db/connection")
 const mysql = require("mysql2")
const taskrouter = require("./Routes/taskroutes")


app.use(express.json())
app.use(cors())
app.use("/api",taskrouter)

app.get("/",(req,res)=>{
   res.send("App started");
})




app.listen(3500,()=>{
    console.log("Server starterd on 3500")
})
