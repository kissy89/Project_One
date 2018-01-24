"use strict";

function Snippets(ctx, width, height){
    var self = this;

    self.size = 50;
    self.dx = -4;
    self.ctx = ctx;

    self.gameWidth = width;
    self.gameHeight = height;

    self.x = 850;
    self.y = Math.random() * width;
    self.direction = null;
}

Snippets.prototype.setDirection = function (){
    var self = this;

    self.direction = direction;
}

Snippets.prototype.draw = function () {
    var self = this;
    
    self.ctx.fillStyle = "red";
    self.ctx.fillRect(self.x, self.y, self.size, self.size);
}

Snippets.prototype.animation = function () {
    var self = this;
    
    self.ctx.fillStyle = "red";
    self.ctx.fillRect(self.x, self.y, self.size, self.size);
    self.x = self.x - 1;
    self.ctx.clearRect(0, 0, self.ctx.width, self.ctx.height);
}