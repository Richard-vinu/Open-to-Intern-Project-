const express = require('express')
const mongoose = require('mongoose')
const route = require('./src/route')
const multer = require('multer')
const app = express()
const PORT = 3001 || process.env.PORT 

app.use(express.json())
app.use(multer().any())

mongoose.connect('mongodb+srv://richardwork:2YLjcp0favzUASR9@cluster3.bli4t.mongodb.net/group63Database?retryWrites=true&w=majority',{
    useNewUrlParser:true
})
.then(()=>console.log('Connected to DB'))
.catch(err => console.log(`Error-Connecting to DB${err}`));

app.use('/',route)

app.use(function (req, res) {
    var err = new Error('Not Found');

    return res.status(400).send({status : false, msg : "path not found"})
    });


app.listen(PORT,()=>console.log(`Server listing to  ${PORT}`))