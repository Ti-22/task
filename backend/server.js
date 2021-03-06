const express = require("express")
const mongoose = require("mongoose")
const app = express()
const route = require("./route/index")
const DB = "mongodb+srv://ShubhamBairagi:Shubham123@cluster0.hymiu.mongodb.net/UserRecord?retryWrites=true&w=majority"

mongoose.connect(DB)
.then( console.log('successfully connected...'))
.catch((err)=>{
    console.log(err)
});

app.set('view engine', 'ejs')
app.use(route)

app.listen(3000, ()=>{
    console.log('server is on http://localhost:3000')
})