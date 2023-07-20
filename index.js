const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const blog = require('./routes/blog');
app.use(express.static(path.join(__dirname, 'uploads')))
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