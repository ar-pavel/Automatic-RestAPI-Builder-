// ------------ REST call API bulder -----------------
// const express = require("express");
// const bodyParser = require("body-parser");
// const hostname = "localhost";
// const port = 3000;
// const app = express();
// app.use(bodyParser.json());
// // this server will listen to http://localhost:3000/
// app.listen(port, () =>
//   console.log(`RestWithExpress app listening on port ${port}!`)
// );

// const baseRouter = require("./routes/base");
// app.use("/", baseRouter);

// --------------------------------------------------------

// -------------------- Static  API Building Block -----------------------------

const projectStructureBuilder = require("./builders/projectStructureBuilder");
const endpointBuilder = require("./builders/endpointBuilder");

const baseUrl = "/home/nullpointer/Programming/Web/TEST_API_V1.0";

// buid project base structure
projectStructureBuilder.build(baseUrl);

// build endpoint according to json data
// for testing perpose manual call has been made
endpointBuilder.build(baseUrl, "student");
endpointBuilder.build(baseUrl, "employee");
endpointBuilder.build(baseUrl, "os");
// endpointBuilder.build(baseUrl, "intiser");
// endpointBuilder.build(baseUrl, "sojal");
// endpointBuilder.build(baseUrl, "pavel");

// --------------------------------------------------------------------
