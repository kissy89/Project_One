'use strict';

function Game(mainDiv) {
  var self = this;

  self.mainDiv = mainDiv;

  self.finished = false;
  self.onEnded;

  self.score = 0; // score or lives
  self.lives = 5; // lives ((new))

  self.width = window.innerWidth;
  self.height = window.innerHeight;

  self.canvas = document.createElement('canvas'); // creating canvas for dom
  self.canvas.width = 800;
  self.canvas.height = 500;
  mainDiv.appendChild(self.canvas);

  self.footer = document.createElement("footer"); // ev remove
  self.footer.innerText = "Copyright: Stephanie Senoner";
  mainDiv.appendChild(self.footer);


  self.ctx = self.canvas.getContext('2d');
  
  self.player = new Player(self.ctx, self.width, self.height);
  self.environment = new Environment(self.ctx, self.canvas);
  self.bug = new Bugs(self.ctx, self.width, self.height); 
  // self.bug2 = new Bugs(self.ctx, self.width, self.height);

  self.snippetsArray = [];
  window.setInterval( function(){ 
    self.snippetsArray.push(new Snippets(self.ctx, self.width, self.height));
    }, 2500);
  //@ todo snippetsArray ev with images out of code
  window.addEventListener("keydown", self.player.jump.bind(self.player));
  window.addEventListener("keyup", self.player.jump.bind(self.player));

   function detectionCollisionBugs() {
    //  for (var i = 0; i < self.bug; i++){
     if (self.player.x < self.bug.x + self.bug.size &&
       self.player.x + self.player.size > self.bug.x &&
       self.player.y < self.bug.y + self.bug.size &&
       self.player.size + self.player.y > self.bug.y) {
        self.lives -= 1;
        console.log("cat");
     }
  //  }
  }
  
  Game.prototype.gameEnding = function (){ 
  var self = this;

  if (self.score > 20){
     self.gameOver = callback;
   }

  }

  function detectionSnippets() {
    for (var i = 0; i < self.snippetsArray.length; i++){

    if (self.player.x < self.snippetsArray[i].x + self.snippetsArray[i].size &&
      self.player.x + self.player.size > self.snippetsArray[i].x &&
      self.player.y < self.snippetsArray[i].y + self.snippetsArray[i].size &&
      self.player.size + self.player.y > self.snippetsArray[i].y) {
       self.score += 10;
       console.log(self.snippetsArray[i], i);
       self.snippetsArray.splice(self.snippetsArray.indexOf(self.snippetsArray[i], 1));
    }
  }
  }

  // self.bugsArray = [];

  // for (var i = 0; i < 15; i++){
  //   self.bug = new Bugs(self.ctx, self.width, self.height);
  //   self.bugsArray.push(self.bug);
  //   console.log("array pushed");
  // }


 //@ todo 
  function doAnimation() {

     self.ctx.clearRect(0,0, 800, 500);
     self.environment.render();
     self.environment.update();
    //  self.player.draw();
     self.player.render();
     self.player.update();
    //  self.bug.draw();
     self.bug.render();
     self.bug.animation();
    //  self.bug2.render();
    //  self.bug2.animation();
     self.snippetsArray.forEach(function(element) {
      element.draw();
      });
     self.snippetsArray.forEach(function(element) {
     element.animation();
      });
      // setInterval(self.bugsArray.forEach(function(element) {
      //   element.render()}), 1000);
      // self.bugsArray.forEach(function(element) {
      //   element.animation();
      // });
     self.player.controller();
     detectionCollisionBugs();
     detectionSnippets();
    //  self.gameEndedScore();

     self.ctx.font = "20px Arial, sans-serif";
     self.ctx.fillStyle = "red";
     self.ctx.fillText("Score:" + self.score, 10, 50);
     self.ctx.font = "20px Arial, sans-serif";
     self.ctx.fillStyle = "red";
     self.ctx.fillText("Lives:" + self.lives, 110, 50);

    if (self.lives <= 0){
     self.onEnded();
    } else {
      window.requestAnimationFrame(doAnimation);
    }
 }

 window.requestAnimationFrame(doAnimation);
};

Game.prototype.destroy = function () {
  var self = this;

  self.canvas.remove();
  self.footer.remove();

  window.removeEventListener("keydown", self.player.jump.bind(self.player));
  window.removeEventListener("keyup", self.player.jump.bind(self.player));
}

Game.prototype.onGameOver = function (callback) {
  var self = this;

  self.onEnded = callback;
}