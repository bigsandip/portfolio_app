
/*
File Name: contact.js
Name: Sandip Mishra
Id: 301235936
Date: 30 October 2022
*/
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");

//create reference to the model (dbschema )
let contact = require("../models/contact");

module.exports.displaycontactList = (req, res, next) => {
  contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("contact/list", {
        title: "contacts",
        contactList: contactList,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.addpage = (req, res, next) => {
  res.render("contact/add", {
    title: "Add  Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  //debugger
  let newcontact = contact({
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
  });
  console.log(newcontact);
  contact.create(newcontact, (err, contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contacts-list");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  contact.findById(id, (err, contacttoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("contact/edit", {
        title: "Edit Contact",
        contact: contacttoedit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updatecontact = contact({
    _id: id,
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
  });
  contact.updateOne({ _id: id }, updatecontact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the contact list
      res.redirect("/contacts-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh contact list
      res.redirect("/contacts-list");
    }
  });
};
