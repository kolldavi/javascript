
//Decortator Pattern
var makeCar = function(obj,loc){
  obj.loc = loc;
  obj.move =  function(){
    obj.loc++;
  }
  return obj;
};



var bob = makeCar({},2);
console.log("bob loc inital: "+bob.loc);
bob.move();
bob.move();
console.log("bob loc after 2 moves: "+ bob.loc);

//same code but as Functional Class Pattern

/*var Car = function(loc){
  var obj = {loc: loc};
  $.extend(obj, Car.methods);

  return obj;
};

Car.methods = {
  move : function(){
    this.loc ++;
  },
  moveTwice : function(){
    this.loc +=2;
  }
}
var dave = Car(5);
console.log("dave loc inital: " +dave.loc);
dave.move();
console.log("dave loc after move: " +dave.loc);
dave.moveTwice();
console.log("dave loc after moveTwice: " +dave.loc);*/


//prototypes Pattern

var Car = function(loc){
  //don't need because using
 //var obj = Object.create(Car.prototype);
  this.loc = loc;
//don't need because using
  // return obj;
};

Car.prototype = {
  move : function(){
    this.loc ++;
  },
  moveTwice : function(){
    this.loc +=2;
  }
}
Car.prototype.move3 = function(){
  this.loc += 3
}
var dave = new Car(5);
console.log("dave loc inital: " +dave.loc);
dave.move();
console.log("dave loc after move: " +dave.loc);
dave.moveTwice();
console.log("dave loc after moveTwice: " +dave.loc);
dave.move3();
console.log("dave loc after move3: " +dave.loc);
