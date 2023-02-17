const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 2410;

app.use("/api/contacts", require('./routes/contactRoutes'));

app.listen(port, ()=> {
    console.log(`Server Running on Port is ${port}`);
})