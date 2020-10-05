const projectStructureBuilder = require("./builders/projectStructureBuilder");
const endpointBuilder = require("./builders/endpointBuilder");

const baseUrl = "/home/nullpointer/Programming/Web/TEST-API";

// buid project base structure
projectStructureBuilder.build(baseUrl);

// build endpoint according to json data
// for testin perpose manual call has been made
endpointBuilder.build(baseUrl, "student");
endpointBuilder.build(baseUrl, "employee");
