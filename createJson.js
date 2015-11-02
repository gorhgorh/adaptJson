var fs  = require('fs');
var path = require('path');
var _   = require('lodash');
var outPath = path.join(__dirname + '/dist/');
// console.log(outPath);
module.exports = function(templatePath,templateData,fileName){
  var template = fs.readFileSync(templatePath,'UTF-8');
  var mashTemplate = _.template(template);
  var modTemplate = mashTemplate(templateData);
  if(fileName){
    fs.writeFile(outPath + fileName, modTemplate, function (err) {
      if (err) throw err;
      console.log('saved',fileName);
    });
  }
  return modTemplate;
};
