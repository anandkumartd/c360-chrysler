class Parser {
  makeDictFromArrays(names, rows) {
    var profiles_dict = [];
    for (let i = 0; i < rows.length; i++) {
      var profile = {};
      for (let j = 0; j < names.length; j++) {
        profile[names[j]] = rows[i][j];
      }
      profiles_dict.push(profile);
    }
    return profiles_dict;
  }
  makeAttrFromArrays(data) {
    var json = JSON.stringify(data);
    var obj = JSON.parse(json);
    var attribute = {};
    for (let i = 0; i < obj.length; i++) {
      var element_key = obj[i].name;
      var element_value = obj[i].value;
      attribute[element_key] = element_value;
    }
    return attribute;
  }
  makePredictFromArrays(data) {
    var json = JSON.stringify(data);
    var obj = JSON.parse(json);
    var predict = {};
    for (let i = 0; i < obj.length; i++) {
      var element_key = obj[i].name;
      var element_value = obj[i].value;
      predict[element_key] = element_value;
    }
    return predict;
  }

mapSearchFromArrays(key,values){
 var  json = JSON.stringify(key);
 var obj = JSON.parse(json);
 var  segments = obj[0].values;
   var serachResult ={};
 for(let i = 0; i < obj.length; i++){
  var element_key = obj[i].name;
  var element_value = obj[i].value;
  serachResult[element_key] = element_value;
}
return serachResult;
}

}

export default Parser;
