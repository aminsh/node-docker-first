"use strict";

const express = require("express"),
    
    app = express();


app.get('/', function (req, res) {
   
    res.send('<h1>Hello Docker</h1>');
});

app.listen(8080, ()=> console.log('The port 8080 is listening'));
