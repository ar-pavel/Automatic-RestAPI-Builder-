exports.router = (name) => {
return {
base: ` 
const express = require(\"express\");
const bodyParser = require(\"body-parser\");

// ---------db related imports-----------------
const crud = require(\"../db_modules/crud\");
// ------------------------------------------

const ${name}Router = express.Router();

${name}Router.use(bodyParser.json());

`,
all: `${name}Router
.route(\"/\")
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader(\"Content-Type\", \"text/plain\");
  next();
})`,
get: `
.get((req, res, next) => {
  crud.findDocuments(\"${name}\", (doc) => {
    res.setHeader(\"Content-Type\", \"application/json\");
    res.end(JSON.stringify(doc));
    console.log(doc);
  });
})
`,
post: `
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
`,
put: `    
.put((req, res, next) => {
  res.statusCode = 403;
  res.end(\"PUT operation not supported on /${name}es\");
  console.log(\"PUT operation not supported on /${name}es\");
})
`,
delete: `
.delete((req, res, next) => {
  crud.removeAllDocuments(\"${name}\", (doc) => {
    //   res.setHeader(\"Content-Type\", \"application/json\");
    //   res.end(JSON.stringify(doc));
    res.end(\"All the ${name}s have been deleted!\");
    console.log(\"All the ${name}s have been deleted!\");
    console.log(doc);
  });
})`,
end: `;`,

allWithParam: `
${name}Router
.route(\"/:param\")
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader(\"Content-Type\", \"text/plain\");
  next();
})
`,
getWithParam: `
.get((req, res, next) => {
  crud.findDocument(req.params.param, \"${name}\", (doc) => {
    res.setHeader(\"Content-Type\", \"application/json\");
    res.end(JSON.stringify(doc));
    console.log(doc);
  });
  // res.end(\`${name} with param: \${req.params.param} will be served!\`);
  // console.log(\`${name} with param: \${req.params.param} will be served!\`);
})`,
postWithParam: `
.post((req, res, next) => {      
  res.end("Unsupported request");
  // res.end(\`${name} with param: \${req.params.param} will be served!\`);
  // console.log(\`${name} with param: \${req.params.param} will be served!\`);
})`,
putWithParam: `
.put((req, res) => {
  crud.updateDocument(
    { name: req.params.param },
    req.body,
    \"${name}\",
    (result) => {
      //   res.setHeader(\"Content-Type\", \"application/json\");
      //   console.log(result);
      //   res.end(JSON.stringify(result.));
      res.statusCode = 202;
      res.end(\`${name} with param: \${req.params.param} has been updated!\`);
      console.log(\`${name} with param: \${req.params.param} has been updated!\`);
    }
  );
})`,

deleteWithParam: `
.delete((req, res, next) => {
  crud.removeDocument({ name: req.params.param }, \"${name}\", (result) => {
    console.log(req.body);
    res.end(\`\${req.params.param} has been deleted!\`);
    console.log(\`\${req.params.param} has been deleted!\`);
  });
})
`,
footer: `;
module.exports = ${name}Router;
`,
};
};
