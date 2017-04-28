$(document).ready(function() {

var player1 = true;
var player1Side = 'X';
var player2Side = 'O';
var inGame = false;
var onePlayer = false;
var winner = '';

function checkMove(ele)
{
  if(ele == '')
    {
      return true;
    }

    return false;
}

function computerClick()
{

   var  x =  Math.floor(Math.random() * 9) + 1;

   if(inGame)
    {
               while(!checkMove($('#'+x).text()))
                {
                       console.log("inside:"+x);
                  x =  Math.floor(Math.random() * 9) + 1;

                }

      $('#'+x).text(player2Side);
      player1 = true;

  }

}
function checkWinner(ele){

    //check rows
    if($('#1').text() == ele && $('#2').text() == ele && $('#3').text() == ele)
      {
        return true;
      }

      if($('#4').text() == ele && $('#5').text() == ele && $('#6').text() == ele)
      {
           return true;
      }

     if($('#7').text() == ele && $('#8').text() == ele && $('#9').text() == ele)
      {
           return true;
      }


      //check col
      if($('#1').text() == ele && $('#4').text() == ele && $('#7').text() == ele)
      {
           return true;
      }

      if($('#2').text() == ele && $('#5').text() == ele && $('#8').text() == ele)
      {
           return true;
      }

      if($('#3').text() == ele && $('#6').text() == ele && $('#9').text() == ele)
      {
           return true;
      }

      //check diagonal
        if($('#1').text() == ele && $('#5').text() == ele && $('#9').text() == ele)
      {
           return true;
      }

      if($('#3').text() == ele && $('#5').text() == ele && $('#7').text() == ele)
      {
           return true;
      }

  var cnt = 0;
  for(var i =1;i<=9;i++)
    {
      if($('#'+i).text() != '')
        {
          cnt++;
        }
    }
  if(cnt == 9)
    {
      return "tie";
    }

}

      $('a').click(function(){

        inGame = true;
        if(checkMove($(this).text()))
          {
           if(player1)
             {
               $(this).text(player1Side);
               player1 = false;
               if(checkWinner(player1Side) == true )
                 {
                   winner = player1Side + "'s Wins";
                 }else if(checkWinner(player1Side) == 'tie' )
                   {
                      winner = 'Draw';
                   }
               if(onePlayer && winner == '')
                 {
                   computerClick();
                 }
             }
            else if(!onePlayer)
               {
                  $(this).text(player2Side);
                  player1 = true;
               }


             if(checkWinner(player2Side) == true )
                {
                  winner = player2Side + "'s Wins";
                }


         if(winner != '')
             {
               alert(winner);

               setTimeout(function (){
                  newGame();

               }, 500);

             }
          }
      });


//player1 X's
$('#X').click(function(){
  if(!inGame)
    {
    $('#X').addClass('choice');
     $('#O').removeClass('choice');
      player1Side = 'X'
      player2Side = 'O';
    }
});

//player1 O's
$('#O').click(function(){
  if(!inGame)
    {
    $('#O').addClass('choice');
     $('#X').removeClass('choice');
      player1Side = 'O';
      player2Side = 'X';
    }
});

$('#onePlayer').click(function(){
  if(!inGame)
    {
    $(this).toggleClass('choice');
    if(onePlayer)
      {
        onePlayer = false;
        $('#onePlayer').text('2 player');
      }else
        {
          onePlayer = true;
          $('#onePlayer').text('vsComputer');
        }
    }
});

function newGame()
{
    for(var i=1;i<10;i++){
      $('#'+i).text('');
    }
 player1 = true;
 player1Side = 'X';
 player2Side = 'O';
 inGame = false;
 onePlayer = false;
  winner  = '';
  $('#onePlayer').removeClass('choice');
  $('#onePlayer').text('2 player');

      $('#X').addClass('choice');
     $('#O').removeClass('choice');
}

$('#newGame').click(function(){
    newGame();
});

});
