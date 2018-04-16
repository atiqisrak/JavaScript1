function client(name,age,human,price)
{
  this.name = name;
  this.age = age;
  this.human = human;
  this.price = price;

  this.updatePrice = function()
  {
    return ++this.price;
  };
}

var clients = [
  new client("Niloy",22,true,50),
  new client("Zahid",23,true,55)
];

//console.log(clients.clientA);
//console.log(clients.clientB);
console.log(clients);
this.updatePrice;
console.log(clients[1].updatePrice());
this.updatePrice;
console.log(clients[1].updatePrice());
