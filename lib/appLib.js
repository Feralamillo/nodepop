"use strict";
// isAPI request validation function
module.exports.isAPI = function(req) {
  return req.originalUrl.indexOf("/apiv") === 0;
};
// parseBoolean from string function
module.exports.parseBoolean = function(string) {
  var bool;
  switch (string.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return undefined;
  }
};
