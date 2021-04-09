const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv/config');



const colorRoute = require('./routes/colors');
const authRoute = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.json({extended:true}));
app.use(express.json({extended:true}));
app.use(cors());

app.use('/colors', colorRoute);
app.use('/users', authRoute)


mongoose
    .connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true, useNewUrlParser: true }) 
    .then(() => {
        console.log('connect to DB!')
    })
    .catch( err => {
        console.log(`${err.message}`)
    })

app.listen(3001);
