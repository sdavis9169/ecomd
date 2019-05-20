const express = require('express');
const controller = require('./controller');
const bodyParser  = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const {PORT, CONNECTION_STRING} = process.env;

const app = express();
app.use(express.json());
app.use(bodyParser.json());

// app.get('/api/product')

massive(CONNECTION_STRING)
    .then((dbInstance) => {
        console.log(`Database is connected`)
        app.set('db', dbInstance)
    })
    .catch((err) => {
        console.log(`db in not working ${err}`)
    })

app.listen(PORT, () => {
    console.log(`Houston we have liftoff on ${PORT}`)
});

