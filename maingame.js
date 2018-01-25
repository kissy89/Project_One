'use strict';

function Game(mainDiv) {
  var self = this;

  self.mainDiv = mainDiv;

  self.onEnded;

  self.score = 0; // score or lives
  self.lives = 5; // lives ((new))

  self.width = window.innerWidth;
  self.height = window.innerHeight;

  self.canvas = document.createElement('canvas');                       // creating canvas for dom
  self.canvas.width = 800;
  self.canvas.height = 500;
  mainDiv.appendChild(self.canvas);

  self.ctx = self.canvas.getContext('2d');
  
  // self.bugArray = [];
  // for (var i = 0; i < 15; i++){
  //   self.bug = new Bugs(self.ctx, self.width, self.height);
  //   self.bugArray.push(self.bug);
  // }

  // self.snippetsArray = [];
  // for (var i = 0; i < 15; i++){
  //   self.snippet = new Snippets(self.ctx, self.width, self.height);
  //   self.snippetArray.push(self.snippet);
  // }

  self.player = new Player(self.ctx, self.width, self.height);          // creating player, bug, environment
  self.environment = new Environment(self.ctx, self.canvas);
  self.bug = new Bugs(self.ctx, self.width, self.height); 

  window.addEventListener("keydown", self.player.jump.bind(self.player));
  window.addEventListener("keyup", self.player.jump.bind(self.player));

  function doAnimation(){
    self.ctx.clearRect(0,0, 800, 500);
  
    self.environment.render();
    
    self.environment.update();
    
    self.player.render();
    self.player.animation();
    
    self.bug.render();
    self.bug.animation();
    
    self.player.controller();
    
    // self.collisionBugs();
    // self.collisionSnippets();

    self.ctx.font = "20px Arial, sans-serif";
    self.ctx.fillStyle = "red";
    self.ctx.fillText("Score:" + self.score, 10, 50);
    self.ctx.font = "20px Arial, sans-serif";
    self.ctx.fillStyle = "red";
    self.ctx.fillText("Lives:" + self.lives, 110, 50);
    if (self.isOver()){
      self.onEnded();
    } 
    else {
      window.requestAnimationFrame(doAnimation);
    }
  };

  window.requestAnimationFrame(doAnimation)
}

// Game.prototype.collisionBugs = function () {                                        // collision detection with bugs
//   var self = this;
  
//   if (self.player.x < self.bug.x + self.bug.size && self.player.x + self.player.size > self.bug.x &&
//       self.player.y < self.bug.y + self.bug.size && self.player.size + self.player.y > self.bug.y) {
//           self.lives -= 1;
//   };
// }

// Game.prototype.collisionSnippets = function () {                                    // collision detection with snippets
//   var self = this;
  
//   if (self.player.x < self.snippet.x + self.snippet.size && self.player.x + self.player.size > self.snippet.x &&
//       self.player.y < self.snippet.y + self.snippet.size && self.player.size + self.player.y > self.snippet.y) {
//         self.score += 10;
//   }
// }

Game.prototype.isOver = function (){                                            // game ending if score above 20
  var self = this;
  
  if (self.score > 20 || self.lives <= 0){
      return true;
  }
  return false;
}

Game.prototype.destroy = function () {                                        // destroy the canvas, game
  var self = this;

  self.canvas.remove();
  self.footer.remove();

  window.removeEventListener("keydown", self.player.jump.bind(self.player));
  window.removeEventListener("keyup", self.player.jump.bind(self.player));
}

Game.prototype.onGameOver = function (callback) {                             // what happens at game over?
  var self = this;

  self.onEnded = callback;
}