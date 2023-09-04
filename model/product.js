const express = require("express");
const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  available: {
    type: Boolean,
    required: true,
    default: 1,
  },
});

module.exports=mongoose.model("products", productsSchema);
