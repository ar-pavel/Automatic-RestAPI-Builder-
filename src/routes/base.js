const express = require("express");
const bodyParser = require("body-parser");

const baseRouter = express.Router();

baseRouter.use(bodyParser.json());

baseRouter
  .route("/")
  .all((req, res, next) => {
    // add whatever it need to be added\

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    let requestData = req.body;
    console.log(requestData);
    res.end("api is ready!");
  });

module.exports = baseRouter;
