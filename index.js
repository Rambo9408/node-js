const express = require('express');
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(router);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(1920, (err)=> {
    if(err)console.log(err);
    else console.log("server is running at port number 1920");
})