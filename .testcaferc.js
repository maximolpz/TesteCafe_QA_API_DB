let os = require("os");

module.exports = {
  baseUrl: "https://www.saucedemo.com",
  skipJsErrors: true,
  hostname: os.hostname(),
  //concurrency: 2,
  /*screenshots: {
    //takeOnFails: true,
  },*/
};
