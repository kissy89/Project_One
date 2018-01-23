"use strict";

function Player(ctx, width, height){
    var self = this;

    self.size = 50;

    self.ctx = ctx;

    self.gameWidth = width;
    self.gameHeight = height;

    self.x = self.gameWidth / 2;
    self.y = self.gameHeight / 2;
    self.direction = null;
}

Player.prototype.setDirection = function (){
    var self = this;

    self.direction = direction;
}

// Player.prototype.update = function () {
//     var self = this;

// }

Player.prototype.draw = function () {
    var self = this;
    
    self.ctx.fillStyle = "black";
    self.ctx.fillRect(50, 380, self.size, self.size);
}