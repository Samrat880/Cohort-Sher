const express = require('express');

const app = express(); // server instance created 

app.get('/', (req,res) => {
    res.send("Hello World from Express.js")
})

app.get('/home',(req,res) =>{
    res.send("this is home page")
})

app.get('/about', (req,res) => {
    res.send("this is about page")
})

app.listen(3000) //server start karna