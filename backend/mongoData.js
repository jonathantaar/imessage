import Mongoose from 'mongoose'

const imessageSchema = Mongoose.Schema({
    chatName : String,
    conversation: [
        {
            message : String, 
            timestamp : String,
            user : {
                displayName : String, 
                email : String, 
                photo : String,
                uid : String 
            }
        }
    ]
})

export default Mongoose.model('conversation', imessageSchema)