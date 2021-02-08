const express = require("express");
const bodyParser = require("body-parser");
const hostname = "localhost";
const port = 3000;
const app = express();
app.use(bodyParser.json());
// this server will listen to http://localhost:3000/
app.listen(port, () =>
  console.log(
    color(
      // `RestWithExpress app listening on port ${port}!`,
      `Rest-API Builder app is listening on port ${port}!`,
      "Blue",
      "Bright",
      "Black"
    )
  )
);

const baseRouter = require("./routes/base");
const { colors, color } = require("./utils/colorful");
app.use("/", baseRouter);
