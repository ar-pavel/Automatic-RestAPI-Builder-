const package_json = `
{
    "name": "restapi-with-express",
    "version": "1.0.0",
    "description": "auto generated rest api for crud operations",
    "main": "index.js",
    "scripts": {
      "test": "echo \\\"Error: no test specified\\\" && exit 1",
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
<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

##  Quick start


1.  **Get to the workplace.**

    Navigate into your new api directory and start it up.

    \`\`\`shell
    cd default-api/
    code .
    \`\`\`

2.  **Open the source code and start editing!**

    Install the dependencies and run the server.

    \`\`\`shell
    npm install
    npm start
    \`\`\`

    By default this server will be running at \`http://localhost:3000\`!

   
## Project Structure

    ├── node_modules
    ├── routes
    ├── index.js
    ├── package-lock.json
    ├── package.json
    ├── .gitignore
    └── README.md


1.  **\`/node_modules\`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **\`/routes\`**: This directory will contain all of the routes related codes.

3.  **\`.gitignore\`**: This file tells git which files it should not track / not maintain a version history for.

4.  **\`index.js\`**: This is the main configuration file for for this API. 

5.  **\`package-lock.json\`** (See \`package.json\` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

6.  **\`package.json\`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7.  **\`README.md\`**: A text file containing useful reference information about your project.
<!-- AUTO-GENERATED-CONTENT:END -->
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
 * tasks:
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
