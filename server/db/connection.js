const mysql = require("mysql2")
require('dotenv').config()
const conn = mysql.createConnection({
    user:process.env.Dbuser,
    host:process.env.DbHOST_AT,
    password:process.env.Dbpassword ,
    database:process.env.Dbname 
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("Connected to Db Successfully")
})

module.exports =conn