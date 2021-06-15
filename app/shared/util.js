const isNull = (obj, key) => {
    return (obj[key] == null || obj[key] === undefined || obj[key] === "null");
}

 function validate(obj) {
    console.log(obj)
    var objKeys = Object.keys(obj);
  objKeys.forEach((key) => {
    if(isNull(obj, key)) {
        obj[key] = "";
    }
    if(typeof(obj[key]) == "object") {
        validate(obj[key]);
    }
  });
 
  return obj;
}



module.exports = validate;