'use strict';

function Game(mainDiv) {
  var self = this;

  self.mainDiv = mainDiv;

  self.finished = false;
  self.score = 0; // score or lives
  self.lives = 5;

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
  self.bug2 = new Bugs(self.ctx, self.width, self.height);

  self.snippetsArray = [];
  window.setInterval( function(){ 
    self.snippetsArray.push(new Snippets(self.ctx, self.width, self.height));
    }, 2500);
  //@ todo snippetsArray ev with images out of code
  window.addEventListener("keydown", self.player.jump.bind(self.player));
  window.addEventListener("keyup", self.player.jump.bind(self.player));

  //  function detectionCollisionBugs() {
  //    for (var i = 0; i < self.bugs.length; i++){
  //    if (self.player.x < self.bugs[i].x + self.bugs[i].size &&
  //      self.player.x + self.player.size > self.bugs[i].x &&
  //      self.player.y < self.bugs[i].y + self.bugs[i].size &&
  //      self.player.size + self.player.y > self.bugs[i].y) {
  //       self.lives -= 1;
  //       self.bugs.splice(self.bugs.indexOf(self.bugs[i], 1));
  //    }
  //  }
  // }
  
   if (self.score > 200 || self.lives === 0){
     self.finished = true;
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

  self.bugsArray = [];

  for (var i = 0; i < 15; i++){
    self.bug = new Bugs(self.ctx, self.width, self.height);
    self.bugsArray.push(self.bug);
    console.log("array pushed");
  }


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
     self.bug2.render();
     self.bug2.animation();
     self.snippetsArray.forEach(function(element) {
      element.draw();
      });
     self.snippetsArray.forEach(function(element) {
     element.animation();
      });
      setInterval(self.bugsArray.forEach(function(element) {
        element.render()}), 1000);
      self.bugsArray.forEach(function(element) {
        element.animation();
      });
     self.player.controller();
    //  detectionCollisionBugs();
     detectionSnippets();
     self.ctx.font = "20px Arial, sans-serif";
     self.ctx.fillStyle = "red";
     self.ctx.fillText("Score:" + self.score, 10, 50);
     self.ctx.font = "20px Arial, sans-serif";
     self.ctx.fillStyle = "red";
     self.ctx.fillText("Lives:" + self.lives, 110, 50);

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
  self.footer.remove();

  window.removeEventListener("keydown", self.player.jump.bind(self.player));
  window.removeEventListener("keyup", self.player.jump.bind(self.player));
}