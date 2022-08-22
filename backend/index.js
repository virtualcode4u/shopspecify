const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome To ShopSpecify Coming Soon')
});

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listening on port ${port}`));