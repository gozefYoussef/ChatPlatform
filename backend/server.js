const express = require('express');
const cors = require('cors')
const app = express();
const server = require('http').createServer(app);

app.use(cors({
    origin:'http://localhost:5173',
}))
const PORT = process.env.PORT || 8000

const users = [{
    email: 'gozefatef1999@yahoo.com',
    password: '123'
}];

app.use(express.json())

app.get('/*',(req,res)=>{
    res.send('Welcome: server works well!!')
})

app.post('/login',(req,res)=>{
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
app.post('/register',(req,res)=>{
    const user = req.body;
    users.push(user)
    console.log(users);
    res.status(200).json('user added successfully')
    }
)

server.listen(PORT, ()=>{
    console.log(`server is listening on port : ${PORT}`)
})