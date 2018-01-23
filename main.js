"use strict"

function main(){

  var mainDiv = document.querySelector("#main");
  var stage;
  var game;
  var level;

  // var bg = new Image();
  // bg.src = "Untitled.jpg";

  var startPage;
  var startButton = "";
  var startClick = function () {
         destroyStartPage();
         goToGame();
  };

  function buildStartPage(){
    stage = "landing";

    startPage = document.createElement("div");
    startPage.setAttribute("id", "start");

    var title = document.createElement("h1");
    title.innerText = "Run your Beer, Paul";
    startPage.appendChild(title);

    startButton = document.createElement("button");
    startButton.innerText = "Start the Game";
    startPage.appendChild(startButton);

    mainDiv.appendChild(startPage);

    startButton.addEventListener("click", startClick);

  }

  function destroyStartPage() {
    startButton.removeEventListener("click", startClick);
    startPage.remove();
  }

  function goToGame(){
      stage = "game";
      game = new Game(mainDiv);
    }

  var gameOver;
    var playAgainButton;
    var playAgainClick = function () {
      destroyGameOverScreen();
      goToGame();
    };

  function gameOverScreen1() {
    stage = 'end';

    gameOver = document.createElement('div');
    gameOver.setAttribute('id', 'end');

    var title = document.createElement('h1');
    title.innerText = 'The End';
    gameOver.appendChild(title);

    var score = document.createElement('h2');
    score.innerText = "your score: " + game.score;
    gameOver.appendChild(score);

    var endText = document.createElement("p");
    endText.innerText = "poor you - write more code";
    gameOver.appendChild(endText);

    playAgainButton = document.createElement("button");
    playAgainButton.innerText = "play again";
    gameOver.appendChild(playAgainButton);

    mainDiv.appendChild(gameOver);

    playAgainButton.addEventListener("click", playAgainClick);
  }

  function destroyGameOverScreen() {
    playAgainButton.removeEventListener('click', playAgainClick);
    gameOver.remove();
  }

  buildStartPage();

}

window.onload = main;