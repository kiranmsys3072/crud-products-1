const express = require("express");

const router = express.Router();

const Product=require('../model/product');

//GET home Route
router.get("/home", (req, res) => {
  res.send("This is the home route...");
});

// GET Products Route
router.get("/products", async(req, res) => {
  res.send("This is the Products route...");
});

//POST products Route
router.post('/products ',async(req,res)=>{
  const {name,price,quantitty,available}=req.body;
  try{
    const newProduct=await Product.create({
      name,
      price,
      quantitty,
      available
    })
    res.json({
      success:true,
      payload:newProduct
    })

  }catch(err){
    res.json({
      success:false,
      message:err.message
    })
  }

})

//GET home Route
router.get("/about", (req, res) => {
  res.send("This is the about route...");
});

module.exports = router;
