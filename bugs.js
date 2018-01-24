"use strict";

function Bugs(ctx, width, height){
    var self = this;

    self.size = 80;
    self.dx = -4;
    self.ctx = ctx;

    self.gameWidth = width;
    self.gameHeight = height;

    self.x = 850;
    self.y = self.gameHeight / 2;
    self.direction = null;
}

Bugs.prototype.setDirection = function (){
    var self = this;

    self.direction = direction;
}

Bugs.prototype.draw = function () {
    var self = this;
    
    self.ctx.fillStyle = "white";
    self.ctx.fillRect(self.x, self.y, self.size, self.size);
}

Bugs.prototype.animation = function () {
    var self = this;
    
    self.ctx.fillStyle = "white";
    self.ctx.fillRect(self.x, 380, self.size, self.size);
    self.x = self.x - 1;
    self.ctx.clearRect(0, 0, self.ctx.width, self.ctx.height);
}