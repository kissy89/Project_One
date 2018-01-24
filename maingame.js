'use strict';

function Game(mainDiv) {
  var self = this;

  self.mainDiv = mainDiv;

  self.finished = false;
  self.score = 0;
  self.width = window.innerWidth;
  self.height = window.innerHeight;

  self.canvas = document.createElement('canvas');
  self.canvas.width = 800;
  self.canvas.height = 500;
  mainDiv.appendChild(self.canvas);

  self.ctx = self.canvas.getContext('2d');
  self.player = new Player(self.ctx, self.width, self.height);
  
  self.snippet = new Snippets(self.ctx, self.width, self.height);
  self.bug = new Bugs(self.ctx, self.width, self.height);
  self.environment = new Environment(self.ctx, self.canvas);

  window.addEventListener("keydown", self.player.controller.bind(self.player));
  window.addEventListener("keyup", self.player.controller.bind(self.player));

  //  self.jumping = function (event) {
  //    var key = event.key.toLowerCase();
  //    if (key === "Spacebar"){
  //      self.player.velY = -16;
  //      console.log("test");
  //  }
  // }

  function doAnimation() {

     self.ctx.clearRect(0,0, 800, 500);
     self.environment.render();
     self.environment.update();
     self.player.draw();
     self.bug.draw();
     self.bug.animation();
    //  self.player.jump();
    self.player.controller();


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
