const express = require('express');
const https = require('https')
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const authRoute = require('./auth.route');
const app = express();

app.use(cors({
    origin:'http://localhost:3000',
}))

app.use(express.static(path.join(__dirname,'public')));
app.use('/auth',authRoute)
const PORT = process.env.PORT || 8000

app.use(express.json())

// function isLoggedIn(req,res,next){
//     const isLogged = true;
//     if(!isLogged){
//         return res.status(401).json({error:'you have to login'});
//     } next();
// }

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
    console.log(users)
    })


const server = require('https').createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
},app);

server.listen(PORT, ()=>{
    console.log(`server is listening on port : ${PORT}`)
})
