"use strict";

function Snippets(ctx, width, height){
    var self = this;

    self.size = 40;
    self.dx = -4;
    self.ctx = ctx;

    self.gameWidth = width;
    self.gameHeight = height;

    self.x = self.gameWidth / 2;
    self.y = self.gameHeight / 2;
    self.direction = null;
}

Snippets.prototype.setDirection = function (){
    var self = this;

    self.direction = direction;
}

Snippets.prototype.animation = function () {
    var self = this;

    self.x += self.dx;
}

Snippets.prototype.draw = function () {
    var self = this;
    
    self.ctx.fillStyle = "white";
    self.ctx.fillRect(450, 380, self.size, self.size);
}