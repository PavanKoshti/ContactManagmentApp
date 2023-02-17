const express = require("express");
const {errorHandler} = require("./middleware/errorhandler");
const {connectDb} = require("./config/dbConnection")
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 2410;

app.use(express.json());
app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`Server Running on Port is ${port}`);
})