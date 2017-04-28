$(document).ready(function() {
  var moves = [];
var playerMoves = [];
var movesArr = ['red','green','blue','yellow'];
var isOn = false;
var startGame = false;

var strictMode = false;
var num = 0;
var active = false;

 var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var audioArr = [audio4, audio1,audio2,audio3]


$('#green').click(function(){
  playerMoves.push(movesArr[$(this).data('value')]);
  getMoves();

  audio1.play();
});
$('#blue').click(function(){
  playerMoves.push(movesArr[$(this).data('value')]);
  getMoves();

 audio2.play();
});
$('#yellow').click(function(){
  playerMoves.push(movesArr[$(this).data('value')]);
  getMoves();

  audio3.play();
});
$('#red').click(function(){
  playerMoves.push(movesArr[$(this).data('value')]);
  getMoves();

  audio4.play();
});


function clearGame()
{
 moves = [];
 playerMoves = [];
 startGame = false;
 num = 0;

}

//turn on game
$('a.toggler').click(function(){

    clearGame()
        $(this).toggleClass('off');
          if($(this).hasClass('off'))
            {
              isOn  = true;
            }
           else
            {
              isOn = false;
            }
    });

//start game if on
$('#startBtn').click(function(){
  if(isOn)
    {
     clearGame();
     newRound();
     num = 0;
    }


});

//enable strict mode
$('#strictBtn').click(function(){

  if(isOn)
    {
      strictMode = true;
      $('#strictLight').toggleClass('strictLightActive');
    } else
      {
         strictMode = false;
      }
   clearGame();
   newRound();
});

function pickNumber()
{
  var  x =  Math.floor(Math.random() * 4) + 1;

  switch(x) {
      case 1:
          return 'green';
          break;
      case 2:
          return 'blue';
          break;
      case 3:
          return 'yellow';
          break;
      default:
          return 'red';
  }

}


function newRound() {

  //player reaches 20 and wins game
   if(num == 20)
     {
       num = 0;
       alert("you win");
       clearGame();
     }
  //reset counter
 num = 0;

 playerMoves = [];

  //add new move
 moves.push(pickNumber());

  //add new level
  $('#display').text(moves.length);

  //do pattern
 animate(moves);

}
function resetRound()
{
  //reset counter
 num = 0;

 playerMoves = [];


  //add new level
  $('#display').text(moves.length);

  //do pattern
 animate(moves);
}
function getMoves()
{
//check if game is on
 if(isOn)
   {
     //check each click is right move
    if(playerMoves[num] == moves[num])
        {
          //if get correct increment cnt
           num++;

          //if matched all moves go to next round
           if(num == moves.length)
            {
              newRound();
            }

        }
      else
        {
          if(!strictMode)
            {
              alert("wrong button Retry");
              resetRound();
            }
          else
              {
          //player looses
          clearGame();
          alert("wrong button you lose");
        //  console.log('loose');
              }
        }
   }
}

function animate(sequence) {
   var i = 0;
   var interval = setInterval(function() {

   lightUp(sequence[i]);
          i++;
          if (i >= sequence.length) {
            clearInterval(interval);
          }
     }, 800);

}

function lightUp(tile) {

  //light up board
   var $tile = $('#' + tile).toggleClass(tile + 'Active');
   window.setTimeout(function() {

     //play sound
    var x = ($('#' + tile).data('value'));
    audioArr[x].play();

       //remove light
   $tile.toggleClass(tile + 'Active');
   }, 400);

}

  });
