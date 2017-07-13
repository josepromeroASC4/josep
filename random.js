
function rand(number){
  var randomDecimalNumber = Math.random() * number;
  var wholeIntegerNumber = Math.round(randomDecimalNumber);
  return wholeIntegerNumber;
}

console.log(rand(6));