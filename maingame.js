'use strict';

function Game(mainDiv) {
  var self = this;

  self.score = 0;

  self.mainDiv = mainDiv;

  self.finished = false;
  self.score = 0;
  self.width = window.innerWidth;
  self.height = window.innerHeight;

  self.canvas = document.createElement('canvas');
  self.canvas.width = 800;
  self.canvas.height = 500;
  mainDiv.appendChild(self.canvas);

  var footer = document.createElement("footer");
  footer.innerText = "Copyright: Stephanie Senoner";
  mainDiv.appendChild(footer);


  self.ctx = self.canvas.getContext('2d');
  self.player = new Player(self.ctx, self.width, self.height);
  self.environment = new Environment(self.ctx, self.canvas);

  self.bugsArray = [];
  window.setInterval( function(){ 
    self.bugsArray.push(new Bugs(self.ctx, self.width, self.height));
    }, 3500);

  self.snippetsArray = [];
  window.setInterval( function(){ 
    self.snippetsArray.push(new Snippets(self.ctx, self.width, self.height));
    }, 2500);
  
  window.addEventListener("keydown", self.player.jump.bind(self.player));
  window.addEventListener("keyup", self.player.jump.bind(self.player));

  function detectionCollision() {
    for (var i = 0; i < self.bugsArray.length; i++){
    if (self.player.x < self.bugsArray[i].x + self.bugsArray[i].size &&
      self.player.x + self.player.size > self.bugsArray[i].x &&
      self.player.y < self.bugsArray[i].y + self.bugsArray[i].size &&
      self.player.size + self.player.y > self.bugsArray[i].y) {
       self.score -= 10;
       self.bugsArray.splice(self.bugsArray.indexOf(self.bugsArray[i], 1));
    }
  }
  }
  
  function detectionSnippets() {
    for (var i = 0; i < self.snippetsArray.length; i++){
    if (self.player.x < self.snippetsArray[i].x + self.snippetsArray[i].size &&
      self.player.x + self.player.size > self.snippetsArray[i].x &&
      self.player.y < self.snippetsArray[i].y + self.snippetsArray[i].size &&
      self.player.size + self.player.y > self.snippetsArray[i].y) {
       self.score += 10;
       self.snippetsArray.splice(self.snippetsArray.indexOf(self.snippetsArray[i], 1));
    }
  }
  }

  function doAnimation() {

     self.ctx.clearRect(0,0, 800, 500);
     self.environment.render();
     self.environment.update();
     self.player.draw();
     self.bugsArray.forEach(function(element) {
       element.draw();
      });
     self.bugsArray.forEach(function(element) {
      element.animation();
      });
     self.snippetsArray.forEach(function(element) {
      element.draw();
      });
     self.snippetsArray.forEach(function(element) {
     element.animation();
      });
     self.player.controller();
     detectionCollision();
     detectionSnippets();
     self.ctx.font = "20px Arial, sans-serif";
     self.ctx.fillStyle = "black";
     self.ctx.fillText("Score:" + self.score, 10, 50);

    if (!self.finished){
     window.requestAnimationFrame(doAnimation);
    }
 }

 window.requestAnimationFrame(doAnimation);
};

Game.prototype.destroy = function () {
  var self = this;

  self.finished = true;

  self.canvas.remove();

}

// Game.prototype.onGameOver = function(){
  // var self = this;
  // self.ended = callback;


// //game.onGameOver(function (){
//   destroyGame();
//   buildGameover();
// })
// }
