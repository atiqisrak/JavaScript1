function friends(taka)
{
	var dollarValue = 80;

	function calculate()
	{
		return taka/dollarValue;
	}

	return calculate;
}

var niloy = friends(12499);
var zahid = friends(43231);
var shuvo = friends(653432);

console.log("Niloy has " + niloy() + " taka");
console.log("Zahid has " + zahid() + " taka");
console.log("Shuvo has " + shuvo() + " taka");
