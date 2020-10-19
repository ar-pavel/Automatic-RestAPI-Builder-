const express = require("express");
const bodyParser = require("body-parser");


const baseRouter = express.Router();
var propertiesReader = require('properties-reader');


baseRouter.use(bodyParser.json());


const projectStructureBuilder = require("../builders/projectStructureBuilder");
const endpointBuilder = require("../builders/endpointBuilder");

const baseUrl = `/home/nullpointer/Programming/Web/API-Template/TEST_API_V ${Math.ceil(
  Math.random() * 10
)}`;



baseRouter
.route("/")
.all((req, res, next) => {
  // add whatever it need to be added\
  
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
})
.get((req, res) => {
  
    projectStructureBuilder.build(baseUrl);
    req.body.model.map(x =>  endpointBuilder.build(baseUrl, x.modelName, x.apiEndPoints)  )


    let requestData = req.body;
    console.log(requestData);
    res.end("api is ready!");
  });

module.exports = baseRouter;
