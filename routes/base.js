const express = require("express");
const bodyParser = require("body-parser");

const baseRouter = express.Router();
var propertiesReader = require("properties-reader");

baseRouter.use(bodyParser.json());

const projectStructureBuilder = require("../builders/projectStructureBuilder");
const endpointBuilder = require("../builders/endpointBuilder");
const { colorsWithBackground, color } = require("../utils/colorful");

const baseUrl = `/home/nullpointer/Programming/Web/API-Template/TEST_API_V1`;

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
    console.log(color("Rest-API Building Request Received!", "Cyan"));
    console.log(color("Generating Rest-API for : ", "Green"));
    console.log(req.body);

    // req.body.model.map((x) =>
    //   endpointBuilder.build(baseUrl, x.modelName, x.apiEndPoints)
    // );

    req.body.map((x) =>
      endpointBuilder.build(baseUrl, x.modelName, x.apiEndPoints)
    );

    let requestData = req.body;

    console.log(
      "\n",
      // colorsWithBackground("Green", "Bright", "Red", "API IS READY!")
      color("...Requested  Rest-API is ready!", "Yellow", "Bright", "Black"),
      "\n"
    );

    // console.log(requestData);
    res.end("api is ready!");
  });

module.exports = baseRouter;
