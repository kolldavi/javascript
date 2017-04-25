//Functional style
var Car = function(loc){
  var obj = {loc: loc};

  obj.move = function(){
    obj.loc++;
  }
  return obj;
}

var Van = function(loc){
  var obj = Car(loc);
  obj.giveOutCandy = function(){
    console.log("Van gives out Candy");
  }
  return obj;
}

var Cop = function(loc){
  var obj = Car(loc);
  obj.arrest = function(){
    console.log("Cop arrests criminal");
  }
  return obj;
}

var peet = new Van(2);
console.log(peet.loc);
peet.move();
console.log(peet.loc);
peet.giveOutCandy();


var jay = new Cop(3);
console.log(jay.loc);
jay.move();
console.log(jay.loc);
jay.arrest();


//pseudoclassic way
var Animal = function(loc){
  this.loc = loc;
}
Animal.prototype.move = function(){
  this.loc++;
}
var Bird = function(loc){
  Animal.call(this, loc);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function(){
    console.log("bird is flying");
}

var Lion = function(loc){
  Animal.call(this, loc);
}

Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.constructor = Bird;
Lion.prototype.jump = function(){
    console.log("Lion is jumping");
}

var tweety = new Bird(5);

console.log(tweety.loc);
tweety.move();
console.log(tweety.loc);
tweety.fly();

var symba = new Lion(2);

console.log(symba.loc);
symba.move();
console.log(symba.loc);
symba.jump();
