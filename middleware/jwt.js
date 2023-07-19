var jwt = require('jsonwebtoken');
const jwtwebtoken = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        var decoded = jwt.verify(token, '1234');
    } else {
        res.status(401).send('Invalid request')
    }

    next();
    // console.log();
}


module.exports = jwtwebtoken;