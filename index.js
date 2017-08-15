const express = require('express')
//creates all the setup to connect with node and the route handlers
const app = express();

app.get('/', (req,res)=>{
    res.send({hi:'there'});
});

const PORT = process.env.PORT || 3000

app.listen(PORT);