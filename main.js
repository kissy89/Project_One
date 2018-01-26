"use strict"

function main(){

  var mainDiv = document.querySelector("#main");
  var stage;
  var game;
  var level;

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
  title.innerText = "< Coding Paul >";
  startPage.appendChild(title);

  var instructions = document.createElement("p");
  instructions.innerText = "try to collect all missing parts of your code";
  startPage.appendChild(instructions);  
  
  var part2 = document.createElement("p");
  part2.innerText = "if you win, you can go for a beer :)";
  startPage.appendChild(part2);
  

  startButton = document.createElement("button");
  startButton.innerText = "Start the Game";
  startButton.setAttribute("class", "buttons");
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

  game.onGameOver(function () {
      destroyGame();
      gameOverScreen1();
  });
}

function destroyGame(){
  game.destroy();
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

  if (game.score > 50){
    var endText1 = document.createElement("p");
    endText1.innerText = "well done, you did a great job :) now you can go for a beer :)";
    gameOver.appendChild(endText1);  

    var endImage = document.createElement("img");
    endImage.setAttribute("src", "./images/giphy.gif");
    gameOver.appendChild(endImage);

  }

  else {
    var endText2 = document.createElement("p");
    endText2.innerText = "uuuuuupppppssss - bad job, Paul \n you should learn more :)";
    gameOver.appendChild(endText2);

    var endImage = document.createElement("img");
    endImage.setAttribute("src", "./images/resignationimage.png");
    gameOver.appendChild(endImage);
  }

  mainDiv.appendChild(gameOver);

  playAgainButton = document.createElement("button");
  playAgainButton.setAttribute("class", "buttons");
  playAgainButton.innerText = "play again";
  mainDiv.appendChild(playAgainButton);

  playAgainButton.addEventListener("click", playAgainClick);
}

function destroyGameOverScreen(){
  playAgainButton.removeEventListener("click", playAgainClick);
  gameOver.remove();
}

buildStartPage();

}

window.onload = main;