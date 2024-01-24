const express = require('express');
const app = express();
const debug = require('debug')('app');
const port = 3000;

app.get("/", (req,res) =>{
    
    res.send('Hello Geniusanam');
})

app.listen(port, ()=>{
    debug("Listening on port " + (port));
})
