'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: {
        type: String,
        Required: 'Please enter'
    },
    password: {
        type: String,
        Required: 'Please enter'
    }
},{collection : 'Users'});
module.exports = mongoose.model('Users', UserSchema)