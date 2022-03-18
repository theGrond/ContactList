'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
    contactid: {
        type: Number,
        Required: 'Please enter'
    },
    fname: {
        type: String,
        Required: 'Please enter'
    },
    lname: {
        type: String,
        Required: 'Please enter'
    },
    mnumber: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    facebook: {
        type: String,
        Required: 'Please enter'
    },
    image: {
        type: String,
        Required: 'Please enter'
    }
},{collection : 'Contacts'});
module.exports = mongoose.model('Contacts', ContactSchema)