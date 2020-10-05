const fs = require("fs");

const staticFiles = require("./staticFiles");

const writer = (name, data) => {
  fs.appendFile(name, data, (err) => {
    if (err)
      console.log(`error happended while writing to ${name}...` + err + err);
    console.log(name + " : writing Succesfull!");
  });
};

exports.build = (url, name) => {
  // this will be written on a new file under the directory named routes

  // this will be appended in index.js

  writer(url + `/routes/${name}Router.js`, staticFiles.data(name));
  writer(url + "/index.js", staticFiles.index(name));
};
