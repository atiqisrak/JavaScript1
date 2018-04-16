function findBig(x,y)
{
  var result;
  x<y ? result = ["Table",x] : result = ["Chair",y];
  return result;
}

var ch = 5.6*12;
var ta = 6.5*12;
var sizeResult = findBig(ta,ch);

console.log("Chair size: ",ch);
console.log("Table size: " ,ta);
console.log("The "+ sizeResult[0] + " with the hight of " + sizeResult[1] + " inches is the tallest.");
