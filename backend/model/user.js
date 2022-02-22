const mongoose = require("mongoose")

const Userschema = mongoose.Schema({
    username: String,
    wesite: String,
    password: String,
    email:String
})

const user = new mongoose.model('user', Userschema);

module.exports = user