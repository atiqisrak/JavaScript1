var friends = new Object();

var friends = {
  name : "Niloy",
  age : 23,
  birth : "November",

  updateAge : function()
  {
    return --friends.age;
  }
}

console.log(friends.age);
friends.updateAge();
console.log(++friends.age);
friends.updateAge();
console.log(friends.age);
