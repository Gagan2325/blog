const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blog = require('./routes/blog');

require('dotenv').config();
require('./db/db');

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.use(blog);
app.get('/', (req, res) => {
    res.send("Server is running 123");

})


app.listen(process.env.PORT, () => {
    console.log('server running')
});