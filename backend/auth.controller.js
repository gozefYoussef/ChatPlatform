// const {randomBytes} = require('node:crypto');
// const {connect} = require('getstream');
// const StreamChat = require('stream-chat').StreamChat;
const knex = require('knex')

// require('dotenv').config();

// const api_key = process.env.API_KEY;
// const api_secret = process.env.API_SECRET;
// const app_id = process.env.APP_ID;

const register = (req,res) => {
    const {password, username} = req.body;

    try {

        }
        catch (error){
            console.log(error)
    }
}

const login = async(req,res) => {
    try {
        const {password, username} = req.body;



    }catch (error){
        res.status(404).json({error: 'bad Request'})
    }
}

module.exports = {register, login}