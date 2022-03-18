'use strict'

var mongoose = require('mongoose')
Contact = mongoose.model('Contacts')

exports.getContacts = function (req, res) {
    Contact.find({}, function (err, result) {
        if (err) throw err
        console.log(result)
        res.json(result)
    })
}

exports.getContactByID = function (req, res) {
    Contact.find({ contactid: parseInt(req.params.id) }, function (err, result) {
        if (err) throw err
        console.log(result)
        res.json(result)
    })

}

exports.addContact = function (req, res) {
    var contact = req.body

    Contact.find({ contactid: parseInt(contact.contactid) }, function (err, result) {
        if (err) throw err
        if (result.length == 0) {
            var newContact = new Contact(req.body)
            console.log(req.body)
            newContact.save(function(err, user){
                if(err) throw err
                res.json(user)
                console.log('inserted Contact')
            })
        } else {
            res.json(400, {
                error: 1,
                msg: "ID already exists"
            });
        }
    })
}

exports.updateContactByID = function (req, res) {
    var contact = req.body
    Contact.updateOne({ contactid: parseInt(req.params.id) }, { $set: contact }, { upsert: true }, function (err, result) {
        if (err) throw err
        console.log("Update 1 item")
        console.log(contact)
        res.json(result)
    })
}

exports.deleteContactByID = function (req, res) {
    Contact.deleteOne({ contactid: parseInt(req.params.id) }, function (err, result) {
        if (err) throw err
        console.log("Element " + req.params.id + " is deleted")
        res.json(result)
    })
 }

