exports.indexRoute = (name) => {
  return `
const ${name}Router = require(\"./routes/${name}Router\");
app.use(\"/${name}s\", ${name}Router);
`;
};
