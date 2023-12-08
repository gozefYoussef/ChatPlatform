const {randomBytes} = require('node:crypto');
const {connect} = require('getstream');
const StreamChat = require('stream-chat').StreamChat;

require('dotenv').config();

const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
const app_id = process.env.APP_ID;

const signUp = (req,res) => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;

        const userId = randomBytes(16).toString(hex)
        
        const serverClient = connect(api_key, api_secret, app_id)
        
        const hashedPassword = bcrypt.hash(password, 10);

        const token = serverClient.createToken(userId);

        res.status(200).json({ token, fullName, username, userId, hashedPassword, phoneNumber });
        }
        catch (error){
            console.log(error)
    }
}

const login = async(req,res) => {
    try {
        const {password, username} = req.body;

        const serverClient = connect(api_key, api_secret, app_id)

        const client = StreamChat.getInstance(api_key,api_secret);
        
        const {users} = await client.queryUsers({name: username})

        if(!users.lenght) return res.status(400).json({message: 'user not found'});

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);

        if(success) {
            res.status(200).json({ token, fullName: users[0].fullName, username, userId: users[0].id});
        } else {
            res.status(500).json({ message: 'Incorrect password' });
        }

    }catch (error){
        res.status(404).json({error: 'bad Request'})
    }
}

module.exports = {signUp, login}