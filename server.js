const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js')
const commentsRoute  = require('./business.route')



mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser: true})
.then( () => {
     console.log("Mongo DataBase With Apps Connected with URL is " + config.DB )
    },
    err => { console.log("error is coming bro" + err )}
)

app.use(cors());
app.use(bodyParse.urlencoded({extended : true}));
app.use(bodyParse.json());


app.use('/comments', commentsRoute);

app.listen(PORT, function(){
    console.log('server is runing port is', PORT)
})