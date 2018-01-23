"use strict";

function Bugs(ctx, width, height){
    var self = this;

    self.size = 80;

    self.ctx = ctx;

    self.gameWidth = width;
    self.gameHeight = height;

    self.x = self.gameWidth / 2;
    self.y = self.gameHeight / 2;
    self.direction = null;
}

Bugs.prototype.setDirection = function (){
    var self = this;

    self.direction = direction;
}

// Bugs.prototype.update = function () {
//     var self = this;

// }

Bugs.prototype.draw = function () {
    var self = this;
    
    self.ctx.fillStyle = "white";
    self.ctx.fillRect(450, 380, self.size, self.size);
}