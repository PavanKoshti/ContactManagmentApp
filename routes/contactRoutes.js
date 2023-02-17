const express = require("express");
const router = express.Router();

router.route('/', (req,res) => {
    // res.status(200).send("Get All Contacts List")
    res.status(200).json({message:"Get All Contacts List"});
})