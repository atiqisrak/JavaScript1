function findBiggestFraction(a,b)
{
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");


function elder(a,b)
{
  var result;
  a>b ? result = ["niloy",a] : result = ["shuvo",b];
  return result;
}

var niloy = 2018-1995;
var shuvo = 2018-1996;
var brothers = elder(niloy,shuvo);

console.log("First person is ", niloy);
console.log("Second person is ",shuvo);
console.log("Elder person is " + brothers[0] + " who's age is " + brothers[1]);
