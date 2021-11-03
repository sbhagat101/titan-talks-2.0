const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql= require("mysql");


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database: "titantalksdatabase",
    port: "3306"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req,res) => {
    const FirstName = req.body.FirstName
    const LastName = req.body.LastName
    const UserName = req.body.UserName
    const Email = req.body.Email
    const Password = req.body.Password

    const sqlInsert = "INSERT INTO register_account(FirstName, LastName, UserName, Email, Password) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [FirstName, LastName, UserName, Email, Password], (err, result) => {
        console.log(err);
    })
});

app.listen(3001,() => {
    console.log("running on port 3000");
});