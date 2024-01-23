const express = require("express");
const cors = require("cors");

const app = express();
const fruityControllers = require("./Controllers/FruityController");

app.use(cors());
app.use(express.json());
app.use("/fruity", fruityControllers);
//We are telling APP to USE the fruityController whenever we have a PATh that begins with “/fruity” === app.use(“/fruity”, fruityController)
app.get("/", (request, response) => {
  response.send(`Welcome to Shaquala Fruity App Project`);
});
//routes
//App.get allows us to define a route for request to come in and how the server should respond
app.get("*", (request, response) => {
  response.status(404).send("Page not found");
  //app.get “*” allows us to respond how we want when a request is made to a route we do not have
});

module.exports = app;
