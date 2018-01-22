"use strict"

function main(){

  var mainDiv = document.querySelector("#main");
  var stage;
  var game;
  var level;

  var startPage;
  var startButton = "";
//   var startClick = function () {
//         destroyStart();
//         goToGame();
//   };

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
//startButton.addEventListener("click", startClick);

  }

//   function destroyStartPage() {
//     //unbinding
//     startButton.removeEventListener("click"; startClick);
//     // remove startpage
//     startPage.remove();
//   }

//   function goToGame(){
//     stage = "game";
//     game = new Game(mainDiv);

//     window.setTimeout(function () {
//         endGame();
//         gameOver();
//     }, 3000);
//   }


buildStartPage();

}

window.onload = main;