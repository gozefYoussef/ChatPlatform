const express = require('express');
const https = require('https')
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const knex = require('knex');
const bcrypt = require('bcrypt');
const app = express();

const { handleSignin } = require('./handleLogin');
const { handleRegister } = require('./handleRegister');

app.use(express.static(path.join(__dirname,'public')));

app.use(cors({
    origin:'http://localhost:5173',
}));


app.use(express.json())

const db = knex({
    client: 'pg',
    connection: {
        host: '172.17.0.2',
        user: 'postgres',
        password:'mysecretpassword',
        database: 'postgres',
    }
});
app.post('/Register',(req,res)=> handleRegister(req,res,db,bcrypt));
app.post('/login', (req,res)=> handleSignin(req,res,db,bcrypt));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
    })

const server = require('http').createServer(app);
// {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// },

const PORT = process.env.PORT || 8000;

server.listen(PORT, ()=>{
    console.log(`server is listening on port : ${PORT}`)
})
