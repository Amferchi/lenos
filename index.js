const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/account", (req, res) => {
  res.render("account");
});

app.get("/wholesale", (req, res) => {
  res.render("wholesale");
});

app.get("/validate-product", (req, res) => {
  res.render("validate");
});

app.get("/shop", (req, res) => {
  res.render("shop");
});

app.get("/carts", (req, res) => {
  res.render("ghostcarts");
});

app.get("/extracts", (req, res) => {
  res.render("ghostX");
});

app.get("/touch-x", (req, res) => {
  res.render("touchX");
});

app.get("/detail", (req, res) => {
  res.render("detail");
});

app.listen(4000, () => {
  "server is live";
});
