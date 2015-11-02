var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var datafile = process.argv[2] || 'dataFile.json' ;
var jsonData = JSON.parse(fs.readFileSync(datafile,'UTF-8'));

module.exports = function(){
  var courseInfo = {};
  var componentArray = [];
  var productsInfo = [];
  var dataObj={};
  _.forEach(jsonData, function(n, key) {
    if(key === "introduction"){
    	courseInfo.title = n[0].titre;
    	courseInfo.displayTitle = n[0].displaytitle;
    	courseInfo.description = n[0].description;
      dataObj.courseInfo = courseInfo ;
      // console.log(courseInfo);
    } else if (key === "produits"){
      _.forEach(n,function(data,key){
        data.id = 'co-' + (5*key+5);
        console.log('genId',data.id);
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
