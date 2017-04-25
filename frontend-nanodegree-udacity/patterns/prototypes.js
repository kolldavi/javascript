var gold = {a:1};

console.log(gold.a);

var blue  = $.extend({}, gold);
blue.b = 2;
console.log(blue.a);
console.log(blue.b);
console.log(blue.z);


var rose = Object.create(gold);

rose.b = 3;
console.log(rose.a);
