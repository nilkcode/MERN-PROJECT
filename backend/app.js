const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error")
app.use(express.json());

// router imports

const product = require("./routes/ProductRoute");






app.use("/api/v1/" ,product)

// middleware for error messages
app.use(errorMiddleware);


module.exports = app;