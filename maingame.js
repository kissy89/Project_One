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
  
  self.bugArray = [];
  setInterval(function(){
    var bug = new Bugs(self.ctx, self.width, self.height);
    self.bugArray.push(bug);
  }, 1000)

  // self.snippetsArray = [];
  //  for (var i = 0; i < 15; i++){
  //    var snippet = new Snippets(self.ctx, self.width, self.height);
  //    self.snippetsArray.push(snippet);
  // }

  self.player = new Player(self.ctx, self.width, self.height);          // creating player, bug, environment
  self.environment = new Environment(self.ctx, self.canvas);
  self.bug = new Bugs(self.ctx, self.width, self.height); 

  window.addEventListener("keydown", self.player.jump.bind(self.player));
  window.addEventListener("keyup", self.player.jump.bind(self.player));

  function destroyBug(bug){
    self.bugArray.splice(bug, 1);
  } 


  function doAnimation(){
    self.ctx.clearRect(0,0, 800, 500);
  
    self.environment.render();
    
    self.environment.update();
    
    self.player.render();
    self.player.animation();
    
    self.bugArray.forEach(function(bug){
      bug.render();
      bug.animation();
      self.collisionBugs(bug);
    });      // collision for each bug
    // self.bugArray.forEach(function(bug){self.bug.render(bug)});             // rendering for each bug
    // self.bugArray.forEach(function(bug){self.bug.animation(bug)});          // animation for each bug


    // self.snippetsArray.forEach(function(snippet){self.collisionSnippets(snippet)});
    
    // self.bug.render();
    // self.bug.animation();
    
    self.player.controller();

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

Game.prototype.collisionBugs = function (bug) {                                        // collision detection with bugs
   var self = this;
 
  if (self.player.x < bug.x + bug.size && self.player.x + self.player.size > bug.x &&
      self.player.y < bug.y + bug.size && self.player.size + self.player.y > bug.y) {
          self.lives -= 1;
          self.destroyBug(bug);
  };
}

// Game.prototype.destroyBug = function (bug){
//   var self = this;

//   self.bugArray.splice(self.bugArray.indexOf(bug, 1));

// }

// Game.prototype.collisionSnippets = function (snippet) {                                    // collision detection with snippets
//   var self = this;
  
//   if (self.player.x < snippet.x + snippet.size && self.player.x + self.player.size > snippet.x &&
//       self.player.y < snippet.y + snippet.size && self.player.size + self.player.y > snippet.y) {
//         self.score += 10;
//   }
// }

// Game.prototype.destroySnippet = function (snippet){
//   var self = this;

//   self.snippetsArray.splice(self.snippetsArray.indexOf(snippet), 1);

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