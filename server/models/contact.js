let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let ContactModel = mongoose.Schema(
  {
    contactName: String,
    contactNumber: String,
    emailAddress: String
  },

  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("Contact", ContactModel);
