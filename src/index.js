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

// ------------------------------------------------------

// -------------------- Static  API Building Block -----------------------------

const projectStructureBuilder = require("./builders/projectStructureBuilder");
const endpointBuilder = require("./builders/endpointBuilder");

const baseUrl = `/home/nullpointer/Programming/Web/API-Template/TEST_API_V ${Math.ceil(
  Math.random() * 10
)}`;

// buid project base structure
projectStructureBuilder.build(baseUrl);
endpointBuilder.build(baseUrl, "os", ["DELETE"]);

// build endpoint according to json data
// for testing perpose manual call has been made
// endpointBuilder.build(baseUrl, "student");
// endpointBuilder.build(baseUrl, "employee");
// endpointBuilder.build(baseUrl, "intiser", ["GET"]);
// endpointBuilder.build(baseUrl, "sojal", ["GET", "PUT"]);
// endpointBuilder.build(baseUrl, "pavel", ["GET", "POST", "DELETE"]);

// endpointBuilder.build(baseUrl, "fahim", ["GET", "POST", "PUT", "DELETE"]);

const request = 
  {
    "model" :
      [
        {
          "modelName": "Student",
          "modelAttributes": [
            {
              "name": "studentID",
              "type": "String",
              "required": true,
              "default": "N/A"
            },
            {
              "name": "studentName",
              "type": "String",
              "required": true,
              "default": "N/A"
            }
          ],
          "apiEndPoints": ["GET", "POST"]
        },
        {
          "modelName": "Teacher",
          "modelAttributes": [
            {
              "name": "teacherInitial",
              "type": "String",
              "required": true,
              "default": "N/A"
            },
            {
              "name": "teacherName",
              "type": "String",
              "required": true,
              "default": "N/A"
            }
          ],
          "apiEndPoints": ["GET", "POST", "DELETE", "PUT"]
        },
        {
          "modelName": "Employee",
          "modelAttributes": [
            {
              "name": "employeeID",
              "type": "String",
              "required": true,
              "default": "N/A"
            },
            {
              "name": "employeeName",
              "type": "String",
              "required": true,
              "default": "N/A"
            }
          ],
          "apiEndPoints": ["GET", "POST"]
        }
      ],
    
    "database" : {     
        "applicable": true,
        "dbProperty": {
          "dbName": "MongoDB",
          "misc": "N/A"
      }
    },
    
    // {
    //   "type": "",
    //   "attributes": {}
    // },
  };

  // console.log(typeof(request.model));
  // console.log(request);

  console.log(request.model.map(x => x))



  request.model.map(x =>  endpointBuilder.build(baseUrl, x.modelName, x.apiEndPoints)  )


// --------------------------------------------------------------------

/* TODO:
 *       - add MySQL Server
 *       - configure API calls
 */
