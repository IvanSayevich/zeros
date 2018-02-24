module.exports = function getZerosCount(number) {
  let baseNumber = 5;
  let i = 1;
  let result = 0;
  function sum(baseNumber,i){
    if (Math.pow(baseNumber,i) <= number){
      result += Math.floor(number/Math.pow(baseNumber,i));
      i++;
      sum(baseNumber,i);
    }
  }
  sum(baseNumber,i);
  return result;
}


