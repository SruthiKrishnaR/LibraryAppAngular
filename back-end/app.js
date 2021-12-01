const express = require('express');
const cors = require('cors');
const Mydata = require('./src/model/Portfolio');
var bodyparser = require('body-parser');
var app = new express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyparser.json());

app.get('/testimonials',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Mydata.find()
    .then(function(data){
        console.log(data);
        res.send(data);
    });
});



app.listen(port, function(){
    console.log('listening to port http://localhost:3000');
});