var getData = require('./getData');
var createJson = require('./createJson');
var data = getData();
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var outPath = path.join(__dirname + '/dist/');

var createObject = function(template,data,fileName){
  var jsonObj = [];
  _.forEach(data,function(n,key){
    console.log(n);
    jsonObj.push(createJson(template,n));
  });
  fs.writeFile(outPath + fileName, '['+jsonObj+']', function (err) {
    if (err) throw err;
    console.log('saved',fileName);
  });
  //console.log(jsonObj);

};

var courseTemplate = createJson('./templates/course.json',data.courseInfo,'course.json');
createObject('./templates/co.json',data.productsInfo,'co.json');
console.log(data);
