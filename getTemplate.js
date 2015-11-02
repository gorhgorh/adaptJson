var fs  = require('fs');
var path = require('path');
var _   = require('lodash');

module.exports = function(templatePath){
  var template = fs.readFileSync(templatePath,'UTF-8');
  return template;
};
