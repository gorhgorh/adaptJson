var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var traverse = require('traverse');
var datafile = process.argv[2] || 'test.json';
var jsonData = JSON.parse(fs.readFileSync('test.json','UTF-8'));

var gatherData=function(){
  var courseInfo = {};
  var componentArray = [];
  var productsInfo = [];
  var dataObj={};
  _.forEach(jsonData, function(n, key) {
    if(key === "introduction"){
    	courseInfo.title = n[0].titre;
    	courseInfo.displayTitle = n[0].displaytitle;
    	courseInfo.desc = n[0].description;
      dataObj.courseInfo = courseInfo;
      // console.log(courseInfo);
    } else if (key === "produits"){
      _.forEach(n,function(data,key){
    	  // console.log(key, data);
    		productsInfo.push(data);
    	});
      dataObj.productsInfo = productsInfo;
      //console.log(productsInfo);
    }else{
      var parentId = key;
    	_.forEach(n,function(data,key){
    		data.parentId=parentId;
    		componentArray.push(data);
    	});
      dataObj.componentArray = componentArray;
    }
  });
  return dataObj;
};

toto = gatherData();
// traverse(componentArray).forEach(function (x) {
//   // console.log(typeof(x),x);
// });

//console.log(componentArray);
