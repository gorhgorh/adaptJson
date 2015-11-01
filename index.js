var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var traverse = require('traverse');

var jsonData = JSON.parse(fs.readFileSync('test.json','UTF-8'));
var courseInfo = {};
var dataArray = [];
var productsInfo = [];

var gatherData=function(){
  _.forEach(jsonData, function(n, key) {
    if(key === "introduction"){
    	courseInfo.title = n[0].titre;
    	courseInfo.displayTitle = n[0].displaytitle;
    	courseInfo.desc = n[0].description;
    	console.log(courseInfo);
    } else if (key === "produits"){
      _.forEach(n,function(data,key){
    	  // console.log(key, data);
    		productsInfo.push(data);
    	});
      console.log(productsInfo);
    }else{
      var parentId = key;
    	_.forEach(n,function(data,key){
    		data.parentId=parentId;
    	  // console.log(key, data);
    		dataArray.push(data);
    	});
    }
  });
};

gatherData();
traverse(dataArray).forEach(function (x) {
  // console.log(typeof(x),x);
});

console.log(dataArray);
