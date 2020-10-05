const package_json = `
{
    "name": "restapi-with-express",
    "version": "1.0.0",
    "description": "auto generated rest api for crud operations",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node index"
    },
    "author": "pavel",
    "license": "ISC",
    "dependencies": {
      "body-parser": "^1.19.0",
      "express": "^4.17.1"
    }
}
`;

const readme = `
to run this project: 
\`\`\`
    cd \${projectDirectory}
    npm install
    npm start
\`\`\`
`;

const index = `
const express = require("express");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(bodyParser.json());

// this server will listen to http://localhost:3000/
app.listen(port, () =>
  console.log(\`RestWithExpress app listening on port \${port}!\`)
);


`;

/**
 * to do:
 *      - create package.json file
 *      - create README.md
 *      - create index.js
 *      - create routes directory
 **/

const fs = require("fs");

const writer = (name, data) => {
  fs.writeFile(name, data, (err) => {
    if (err) console.log("file writing error : " + err);
    console.log(name + " creating Succesfull!");
  });
};

exports.build = (url) => {
  fs.mkdirSync(url);
  fs.mkdir(url + "/routes", () => {
    writer(url + "/package.json", package_json);
    writer(url + "/README.md", readme);
    fs.writeFileSync(url + "/index.js", index);
  });
};
