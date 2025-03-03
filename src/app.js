const express = require("express");
const cors = require("cors");
const eventRoutes = require("./routes/events");
require("dotenv").config;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v3/app", eventRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});
module.exports = app;
