exports.crud = `
const MongoClient = require(\"mongodb\").MongoClient;

const assert = require(\"assert\");

const database = require(\"../db_modules/db\");
const crud = require(\"../db_modules/crud\");

exports.insertDocument = (document, collection, callback) => {
  MongoClient.connect(database.baseUrl, (err, client) => {
    assert.strictEqual(null, err);

    const db = client.db(database.dbname);

    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
      assert.strictEqual(err, null);

      console.log(
        \"Inserted \" +
          result.result.n +
          \" documents into the collection \" +
          collection
      );
      callback(result);
    });

    client.close();
  });
};

exports.findDocuments = (collection, callback) => {
  MongoClient.connect(database.baseUrl, (err, client) => {
    assert.strictEqual(null, err);
    const db = client.db(database.dbname);

    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
      assert.strictEqual(err, null);
      callback(docs);
    });
    client.close();
  });
};

exports.findDocument = (param, collection, callback) => {
  MongoClient.connect(database.baseUrl, (err, client) => {
    assert.strictEqual(null, err);
    const db = client.db(database.dbname);

    const coll = db.collection(collection);
    coll.find({ name: param }).toArray((err, docs) => {
      assert.strictEqual(err, null);
      callback(docs);
    });
    client.close();
  });
};

exports.removeDocument = (document, collection, callback) => {
  MongoClient.connect(database.baseUrl, (err, client) => {
    assert.strictEqual(null, err);

    const coll = client.db(database.dbname).collection(collection);

    coll.deleteOne(document, (err, result) => {
      assert.strictEqual(err, null);
      console.log(\"Removed the document \", document);
      callback(result);
    });

    client.close();
  });
};

exports.updateDocument = (document, update, collection, callback) => {
  MongoClient.connect(database.baseUrl, (err, client) => {
    assert.strictEqual(null, err);

    const db = client.db(database.dbname);

    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null, (err, result) => {
      assert.strictEqual(err, null);
      console.log(\"Updated the document with \", update);
      callback(result);
    });

    client.close();
  });
};

exports.removeAllDocuments = (collection, callback) => {
  MongoClient.connect(database.baseUrl, (err, client) => {
    assert.strictEqual(null, err);

    const db = client.db(database.dbname);

    const coll = db.collection(collection);
    coll.deleteMany({}, (err, result) => {
      assert.strictEqual(err, null);

      callback(result);
    });
    client.close();
  });
};

`;

exports.db = `
const url = \"mongodb://localhost:27017/\";
const dbname = \"TestAPI\";

exports.dbname = dbname;

exports.baseUrl = url;
`;

exports.package_json = `
{
    \"name\": \"restapi-with-express\",
    \"version\": \"1.0.0\",
    \"description\": \"auto generated rest api for crud operations\",
    \"main\": \"index.js\",
    \"scripts\": {
      \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",
      \"start\": \"node index\"
    },
    \"author\": \"pavel\",
    \"license\": \"ISC\",
    \"dependencies\": {
      \"body-parser\": \"^1.19.0\",
      \"express\": \"^4.17.1\",     
      \"mongodb\": \"^3.6.2\"
    }
}
`;

exports.readme = `
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

exports.index = `
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

exports.gitignore = `
bower_components
node_modules
*.log
.DS_Store
bundle.js
`;

exports.data = (name) => {
  return `
const express = require(\"express\");
const bodyParser = require(\"body-parser\");

// ---------db related imports-----------------
const crud = require(\"../db_modules/crud\");
// ------------------------------------------

const ${name}Router = express.Router();

${name}Router.use(bodyParser.json());

${name}Router
  .route(\"/\")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader(\"Content-Type\", \"text/plain\");
    next();
  })
  .get((req, res, next) => {
    crud.findDocuments(\"${name}\", (doc) => {
      res.setHeader(\"Content-Type\", \"application/json\");
      res.end(JSON.stringify(doc));
      console.log(doc);
    });
  })
  .post((req, res, next) => {
    crud.insertDocument(
      { name: req.body.name, description: req.body.description },
      \"${name}\",
      (result) => {
        console.log(result.result.n);
        res.statusCode = 201;
        res.end(
          \`${name} named: \${req.body.name} with details: \${req.body.description} added!\`
        );
        console.log(
          \`${name} named: \${req.body.name} with details: \${req.body.description} added!\`
        );
      }
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(\"PUT operation not supported on /${name}es\");
    console.log(\"PUT operation not supported on /${name}es\");
  })
  .delete((req, res, next) => {
    crud.removeAllDocuments(\"${name}\", (doc) => {
      //   res.setHeader(\"Content-Type\", \"application/json\");
      //   res.end(JSON.stringify(doc));
      res.end(\"All the ${name}s have been deleted!\");
      console.log(\"All the ${name}s have been deleted!\");
      console.log(doc);
    });
  });

${name}Router
  .route(\"/:id\")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader(\"Content-Type\", \"text/plain\");
    next();
  })
  .get((req, res, next) => {
    crud.findDocument(req.params.id, \"${name}\", (doc) => {
      res.setHeader(\"Content-Type\", \"application/json\");
      res.end(JSON.stringify(doc));
      console.log(doc);
    });
    // res.end(\`${name} with id: \${req.params.id} will be served!\`);
    // console.log(\`${name} with id: \${req.params.id} will be served!\`);
  })
  .put((req, res) => {
    crud.updateDocument(
      { name: req.params.id },
      req.body,
      \"${name}\",
      (result) => {
        //   res.setHeader(\"Content-Type\", \"application/json\");
        //   console.log(result);
        //   res.end(JSON.stringify(result.));
        res.statusCode = 202;
        res.end(\`${name} with id: \${req.params.id} has been updated!\`);
        console.log(\`${name} with id: \${req.params.id} has been updated!\`);
      }
    );
  })
  .delete((req, res, next) => {
    crud.removeDocument({ name: req.params.id }, \"${name}\", (result) => {
      console.log(req.body);
      res.end(\`\${req.params.id} has been deleted!\`);
      console.log(\`\${req.params.id} has been deleted!\`);
    });
  });

module.exports = ${name}Router;
  `;
};

exports.index = (name) => {
  return `
const ${name}Router = require(\"./routes/${name}Router\");
app.use(\"/${name}s\", ${name}Router);
`;
};
