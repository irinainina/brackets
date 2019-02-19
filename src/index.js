module.exports = function check(str, bracketsConfig) {
  var arr = str.split("");
  var res = [];
  if(str.length % 2 !== 0) return false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] === bracketsConfig[j][1] &&
          res[res.length - 1] === bracketsConfig[j][0]){
        res.pop(arr[i]);
      } else if (arr[i] === bracketsConfig[j][0]) {
        res.push(arr[i]);
      } 
    }
    
  }
  return res.length === 0;
}