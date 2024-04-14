const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());

app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "facepatrol"

})

app.post('/login', (req,res) => {
    const sql = "SELECT * from users WHERE Email = ? AND PasswordHash = ?";
    db.query(sql, [req.body.email, req.body.password], (err,data) =>{
        if(err) return res.json("error");
        if(data.length >0){
            return res.json("Login Successfully")
        } else {
            return res.json("no record")
        }
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening.....");
})