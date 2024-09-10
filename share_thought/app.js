const express = require('express');
// const narration = require('./models/thoughts')
const router = require('./router')

const app = express();
const dbURI = "mongodb://localhost:27017/user_auth";
const mongoose = require("mongoose");

//database connection
mongoose.connect(dbURI)
    .then((result)=>app.listen(3000,'localhost'))
    .catch(err=>console.log(err));

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(router);
// app.use((req,res) =>{
//     res.render('404',{title: "page not found"})
// })
