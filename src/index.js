const projectStructureBuilder = require("./builders/projectStructureBuilder");
const endpointBuilder = require("./builders/endpointBuilder");

const baseUrl = "/home/nullpointer/Programming/Web/TEST_API_V1.0";

// buid project base structure
projectStructureBuilder.build(baseUrl);

// build endpoint according to json data
// for testing perpose manual call has been made
endpointBuilder.build(baseUrl, "student");
endpointBuilder.build(baseUrl, "employee");
// endpointBuilder.build(baseUrl, "ahsan");
// endpointBuilder.build(baseUrl, "intiser");
// endpointBuilder.build(baseUrl, "sojal");
// endpointBuilder.build(baseUrl, "pavel");
