var express = require('express');
var app = express();
var PORT = process.env.PORT ||5000;


app.get('/',function(req,res){
    res.sendfile('test.html')
})



app.get('*',function(req,res){
    res.send('404 not found')
})

// ###################################

app.listen(PORT);
