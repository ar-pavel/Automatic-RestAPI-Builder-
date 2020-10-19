const fs = require("fs");

const staticFiles = require("./static/staticFiles");

const writer = (name, data) => {
  // don't dare to go for async operation here
  fs.appendFileSync(name, data, (err) => {
    if (err)
      console.log(`error happended while writing to ${name}...` + err + err);
    console.log(name + " : writing Succesfull!");
  });
};

exports.build = (url, name, endPoints) => {
  // append routing info to the index.js
  writer(url + "/index.js", staticFiles.indexRoute(name));

  // this will be written on a new file under the directory named routes
  // this will be appended in index.js

  // endPoints = ["get", "post", "put", "delete"];
  endPoints = endPoints.map((x) => {
    return x.toLowerCase();
  });

  // writer(url + `/routes/${name}Router.js`, staticFiles.router(name).base);
  writer(url + `/routes/${name}Router.js`, staticFiles.router(name).base);

  // without params
  writer(url + `/routes/${name}Router.js`, staticFiles.router(name).all);
  console.log("end points creating for : ");
  endPoints.map((x) => {
    console.log(x);
    writer(url + `/routes/${name}Router.js`, staticFiles.router(name)[`${x}`]);
  });
  writer(url + `/routes/${name}Router.js`, staticFiles.router(name).end);

  // with params
  console.log("end points creating for : ");

  writer(
    url + `/routes/${name}Router.js`,
    staticFiles.router(name).allWithParam
  );
  endPoints.map((x) => {
    console.log(`${x}WithParam`);
    writer(
      url + `/routes/${name}Router.js`,
      staticFiles.router(name)[`${x}WithParam`]
    );
  });

  writer(url + `/routes/${name}Router.js`, staticFiles.router(name).footer);

  // writer(url + `/routes/${name}Router.js`, staticFiles.router(name).base);
};
