// app.js
const express = require('express')

const app = express()

const port = process.env.PORT||3000

const mysql = require('mysql');

const con = mysql.createConnection({

host: "localhost",

port: 8000,

user: "root",

password: "complexpassword",

database: 'Customers'

});

con.connect(function (err) {

if (err) throw err;
 console.log("Connected!");
});

app.get('/', (req, res) => {
    
    res.send('Hello Rajesh!');

});

app.get("/docker", (req, res) => {

  res.send("hello Rajesh from docker");

});

app.get('/nodemon', (req, res) => {
    
    res.send('hello from nodemon');

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))