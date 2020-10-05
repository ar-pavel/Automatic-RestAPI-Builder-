/**
 * tasks:
 *    create base api strucute:
 *
 *      - create package.json file
 *      - create README.md
 *      - create index.js
 *      - create .gitignore
 *      - create routes directory
 *      - create db_module directory
 *      - create /db_modules/crud.js
 *      - create /db_modules/db.js
 **/

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

const staticFiles = require("./staticFiles");

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
    writer(url + "/package.json", staticFiles.package_json);
    writer(url + "/README.md", staticFiles.readme);
    writer(url + "/.gitignore", staticFiles.gitignore);

    // async IO operation on index.js file may make troubles
    fs.writeFileSync(url + "/index.js", index);
  });

  fs.mkdir(url + "/db_modules", () => {
    writer(url + "/db_modules/crud.js", staticFiles.crud);
    writer(url + "/db_modules/db.js", staticFiles.db);
  });
};
