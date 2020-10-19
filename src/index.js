const express = require("express");
const bodyParser = require("body-parser");
const hostname = "localhost";
const port = 3000;
const app = express();
app.use(bodyParser.json());
// this server will listen to http://localhost:3000/
app.listen(port, () =>
  console.log(`RestWithExpress app listening on port ${port}!`)
);

const baseRouter = require("./routes/base");
app.use("/", baseRouter);
