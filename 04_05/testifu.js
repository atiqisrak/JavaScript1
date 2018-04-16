
function shortcut(a,b)
{
  var result;
  a<b ? result = a : result = b;
  return result;
}

var uttaraBanani = 43/9.4;
var khilkhetBanani = 33/8.5;

var way = shortcut(uttaraBanani,khilkhetBanani);
console.log("The shortest route is " + way[0] + " with distance of " + way[1]);
