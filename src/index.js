module.exports = function getZerosCount(number) {
  let max = number;
  let zeroCount = 0;
  function sum(num){
    let x = num;
    if (x%5 === 0) {
      zeroCount+=1;
      x= x/5;
      sum(x);  
    }

  }
for (i=1;i<=max; i++){
  sum(i);
}
  return zeroCount;
}


