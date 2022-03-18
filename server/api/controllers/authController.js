'use strict'

var mongoose = require('mongoose')
User = mongoose.model('Users')

exports.authentication = function (req, res) {

    var query = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(query)

    if (query.username && query.password) {
        User.findOne(query, function (err, user) {
            if (err) {
                res.json({
                    status: 0,
                    message: err
                });
            }
            if (!user) {
                console.log('not found')
                res.json({
                    status: 0,
                    msg: "not found"
                });
            } else {
                console.log('logged in')
                res.json({
                    status: 1,
                    // id: user._id,
                    message: " success"
                });
            }
        })
    }
    else {
        res.send('Please enter Username and Password!');
        res.end();
    }
}
