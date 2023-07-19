const express = require('express');
const app = new express();
const { add, get, edit, delete_ } = require('../controller/blogController')
const upload = require('../middleware/upload');
const jwtwebtoken = require('../middleware/jwt');

app.route('/blog/:id?')
    .post(upload.single('image'), add)
    .get(jwtwebtoken, get)
    .put(upload.single('image'), edit)
    .delete(delete_);
module.exports = app;