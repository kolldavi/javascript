//constant
const TILE_WIDTH = 200;
const TILE_HEIGHT = 380;
const HORIZONTAL_MOVE = 100;
const VERTICLE_MOVE = 83;
const COLLISION_DETECTION = 63;
const RIGHT_BOUNDARY = 400;
const LEFT_BOUNDARY = 0;
const TOP_BOUNDARY = 0;
const BOTTOM_BOUNDARY = 450;
const LANES = [307,224,141,58];

var Character = function(x,y,spriteImg,speed){
  //x position
  this.x = x;
  //y position
  this.y = y;
  //sprite image
  this.spriteImg = spriteImg;
  //how fast Character moves
  this.speed = speed;
}

// Draw the Character on the screen, required method for game
Character.prototype.render = function(){
      ctx.drawImage(Resources.get(this.spriteImg), this.x, this.y);
};
// Enemies our player must avoid
var allEnemies = new Array();

var Enemy = function(x, y, spriteImg, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    Character.call(this,x,y,spriteImg,speed);
};
Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x +=  this.speed * dt;

    if(this.x > RIGHT_BOUNDARY + HORIZONTAL_MOVE)
    {
      this.updateSpeed();
    }
};
  Enemy.prototype.updateSpeed = function(){
  this.x = getRandomInt(-100,-500);
  this.y = LANES[getRandomInt(0,3)];
  this.speed = getRandomInt(70,260);
};

Enemy.prototype.checkCollision = function(){
  if (this.x < player.x + COLLISION_DETECTION &&
   this.x + COLLISION_DETECTION > player.x &&
   this.y < player.y + COLLISION_DETECTION &&
   COLLISION_DETECTION + this.y > player.y) {
    // collision detected!
    player.returnToStart();
    }
};

// creat new Enemies object function
var createEnemy = function(){
  return new Enemy(getRandomInt(-600,-100) , LANES[getRandomInt(0,3)], 'images/enemy-bug.png', getRandomInt(70,260));
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,spriteImg,speed){
  Character.call(this,x,y,spriteImg,speed);

}
Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
};

Player.prototype.returnToStart = function() {
  this.x = TILE_WIDTH;
  this.y = TILE_HEIGHT;
};


Player.prototype.handleInput = function(btn){
  if (btn == 'left' && this.x - HORIZONTAL_MOVE >= LEFT_BOUNDARY ) {
      //LEFT MOVE
      this.x = this.x - HORIZONTAL_MOVE;
  } else if (btn == 'up') {
      if (this.y - VERTICLE_MOVE < TOP_BOUNDARY) {
      //reached water
          this.returnToStart();
          return;
      }
      //UP MOVE
      this.y -= VERTICLE_MOVE;
  } else if (btn == 'right' && (this.x + HORIZONTAL_MOVE) <= RIGHT_BOUNDARY) {
      //RIGHT MOVE
      this.x += HORIZONTAL_MOVE;
  } else if (btn == 'down' && this.y + VERTICLE_MOVE <= BOTTOM_BOUNDARY) {
      //DOWN MOVE
      this.y += VERTICLE_MOVE;
  }
  //log(btn);
};

var checkCollisions = function(){
      allEnemies.forEach(function(e){
        e.checkCollision();
      });

};

//add enemies to list function
var createEnemies = function(num){
      for (var i = 0; i < num; i++) {
      allEnemies.push(createEnemy());
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

createEnemies(3);

// Place the player object in a variable called player
var player = new Player(TILE_WIDTH, TILE_HEIGHT, 'images/char-boy.png');


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//EASY RANDOM METHOD
function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
}

//FASTER THAN CONSOLE.LOG();
function log(msg){
  console.log(msg);
}
