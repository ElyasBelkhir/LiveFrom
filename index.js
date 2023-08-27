//put interpreter into strict mode
"use strict";

//require the express and morgan packages
const express = require("express");
const morgan = require("morgan");

//create a new express application
const app = express();

console.log("hello world");

//get ADDR environment variable,
//defaulting to ":80"
const addr = process.env.ADDR || ":80";
//split host and port using destructuring
const [host, port] = addr.split(":");

//add JSON request body parsing middleware
app.use(express.json());
//add the request logging middleware
app.use(morgan("dev"));

//add handler for `GET /`
app.get("/", (req, res, next) => {
    res.set("Content-Type", "text/plain");
    res.send("Hello, Node.js!");
});

//start the server listening on host:port
app.listen(port, host, () => {
    //callback is executed once server is listening
    console.log(`server is listening at http://${addr}...`);
});