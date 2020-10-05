const fs = require("fs");

const writer = (name, data) => {
  fs.appendFile(name, data, (err) => {
    if (err)
      console.log(`error happended while writing to ${name}...` + err + err);
    console.log(name + " : writing Succesfull!");
  });
};

exports.build = (url, name) => {
  // this will be written on a new file under the directory named routes
  var data = `
const express = require("express");
const bodyParser = require("body-parser");

const ${name}Router = express.Router();

${name}Router.use(bodyParser.json());

${name}Router
.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("All the ${name}es will be served!");
    console.log("All the ${name}es will be served!");
})
.post((req, res, next) => {
    res.end(
    "${name} named: " +
        req.body.name +
        " with details: " +
        req.body.description +
        "will be added!"
    );
    console.log(
    "${name} named: " +
        req.body.name +
        " with details: " +
        req.body.description +
        "will be added!"
    );
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /${name}es");
    console.log("PUT operation not supported on /${name}es");
})
.delete((req, res, next) => {
    res.statusCode;
    res.end("All the ${name}es will be deleted!");
    console.log("All the ${name}es will be deleted!");
});

${name}Router
.route("/:id")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end(\`${name} with id: \${req.params.id} will be served!\`);
    console.log(\`${name} with id: \${req.params.id} will be served!\`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(\`${name} with id: \${req.params.id} will be updated!\`);
    console.log(\`${name} with id: \${req.params.id} will be updated!\`);
})
.delete((req, res, next) => {
    res.end(\`\${req.params.id} will be deleted!\`);
    console.log(\`\${req.params.id} will be deleted!\`);
});

module.exports = ${name}Router;
    `;

  // this will be appended in index.js
  var index = `
const ${name}Router = require("./routes/${name}Router");
app.use("/${name}s", ${name}Router);
`;

  writer(url + `/routes/${name}Router.js`, data);
  writer(url + "/index.js", index);
};
