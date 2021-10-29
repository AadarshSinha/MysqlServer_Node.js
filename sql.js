const mysql =require('mysql')

const db=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'aadarsh0',
    database:'my_data',
    insecureAuth : true,
})

module.exports= db;

