
    //GAME STATE VARIABLES
    var  WON = 0, LOST = 1, CONTINUE_ROLLING = 2;

    //IN PROGRESS VARIABLES
    var firstRoll = true,
        sumOfDice = 0,
        myPoint = 0, //POINT IF NO WIN/LOSS ON FIRST ROLL
        gameStatus =  CONTINUE_ROLLING; //GAME NOT OVER

      function play()
      {
        if(firstRoll)
        {
          sumOfDice = rollDice();

          switch (sumOfDice) {
            case 7:
            case 11:
              gameStatus = WON; //WIN ON FIRST ROLL
              document.getElementById('point').innerHTML = '0';
              document.getElementById('roll').value = "Play Again?";
              break;
            case 2:
            case 3:
            case 12:
              gameStatus = LOST; //LOST ON FIRST ROLL
              document.getElementById('point').innerHTML = '0';
              document.getElementById('roll').value = "Play Again?";
              break;
            default:
              gameStatus = CONTINUE_ROLLING;
              myPoint =  sumOfDice;
              document.getElementById('point').innerHTML  = myPoint;
              firstRoll = false;
              document.getElementById('roll').value = "Roll Dice";
          }
        }
        else
        {
          sumOfDice = rollDice();

          if (sumOfDice == myPoint) //HIT POINT AND WON GAME
          {
            gameStatus = WON;
          }
          else if (sumOfDice == 7) //ROLLED 7 AND LOST GAME
          {
            gameStatus = LOST;
          }
        }

        if(gameStatus == CONTINUE_ROLLING)
        {
          document.getElementById('notification').innerHTML = "Roll Again";
          document.getElementById('notification').style.color = "blue";
        }
        else
        {
          if(gameStatus == WON)
          {
            document.getElementById('notification').innerHTML = "Player Wins";
            document.getElementById('notification').style.color = "green";
          }
          else
          {
            document.getElementById('notification').innerHTML = "Player Loses"
            document.getElementById('notification').style.color = "red";
          }
          document.getElementById('roll').value = "Play Again?";
          firstRoll = true;
        }
      }

      function rollDice()
      {
        var die1 , die1, workSum;

        die1 = Math.floor(1 + Math.random() * 6);
        die2 = Math.floor(1 + Math.random() * 6);

        workSum = die1 +  die2;

        document.getElementById('firstDie').innerHTML = die1;
        document.getElementById('secondDie').innerHTML = die2;

        document.getElementById('sum').innerHTML = workSum;

        return workSum;
      }
