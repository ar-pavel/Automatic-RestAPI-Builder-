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

const staticFiles = require("./static/staticFiles");

const fs = require("fs");
const { color } = require("../utils/colorful");
const { exit } = require("process");

const writer = (name, data) => {
  fs.writeFile(name, data, (err) => {
    // if (err) console.log("file writing error : " + err);
    // console.log(name + " creating Succesfull!");

    if (err) console.log(color("file writing error : " + err), "Red", "Blink");

    // console.log(name + " creating Succesfull!");
    console.log(name + color(" creating Succesfull!", "Green", "Bright"));
  });
};

exports.build = (url) => {
  // uncomment this when there is a chance of a directory of same name already exists
  // this may cause error, as it may need root permission
  if (fs.existsSync(url)) {
    console.log(
      color(
        "file writing error : already a directory exist in same name",
        "Red",
        "Blink"
      )
    );
    exit();
    // fs.unlinkSync(url);
  }
  fs.mkdirSync(url);

  fs.mkdir(url + "/routes", () => {
    writer(url + "/package.json", staticFiles.package_json);
    writer(url + "/README.md", staticFiles.readme);
    writer(url + "/.gitignore", staticFiles.gitignore);

    // async IO operation on index.js file may make troubles
    fs.writeFileSync(url + "/index.js", staticFiles.indexBase);
  });

  fs.mkdir(url + "/db_modules", () => {
    writer(url + "/db_modules/crud.js", staticFiles.crud);
    writer(url + "/db_modules/db.js", staticFiles.db);
  });
};
