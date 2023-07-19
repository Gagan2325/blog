const mongoose = require('mongoose');
mongoose.connect(process.env.URL).then((res) => res)
    .then((conn) => { console.log("db connected") })
    .catch((e) => { console.log(e) })