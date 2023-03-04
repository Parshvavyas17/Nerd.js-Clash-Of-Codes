require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const userRoutes = require("./routes/user.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);

module.exports = app;
