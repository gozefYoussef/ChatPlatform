const express = require('express');
const https = require('https')
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const server = require('https').createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
},app);

app.use(cors({
    origin:'http://localhost:5173',
}))

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 8000

const users = [{
    email: 'gozefatef1999@yahoo.com',
    password: '123'
}];

app.use(express.json())

// function isLoggedIn(req,res,next){
//     const isLogged = true;
//     if(!isLogged){
//         return res.status(401).json({error:'you have to login'});
//     } next();
// }

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.post('/auth/login',(req,res)=>{
    const {email,password} = req.body
    const user = users.find((user) => user.email === email && user.password === password);
    if (user){
        return res.status(200).json('Logged in successfully')
    }
    else {
        return res.status(404).json('Wrong credentials')
    }
    }
)
app.post('/auth/register',(req,res)=>{
    const user = req.body;
    users.push(user)
    console.log(users);
    res.status(200).json('user added successfully')
    }
)

server.listen(PORT, ()=>{
    console.log(`server is listening on port : ${PORT}`)
})
