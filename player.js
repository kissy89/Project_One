"use strict";

function Player(ctx, width, height){
    var self = this;

    self.size = 50;
    self.velY = 0;

    self.ctx = ctx;

    self.gameWidth = width;
    self.gameHeight = height;

    self.x = self.gameWidth / 2;
    self.y = self.gameHeight / 2;
    self.direction = null;

    self.sprites = [document.querySelector("sprite1"), document.querySelector("sprite2")];
};

// Player.prototype.setDirection = function (){
//     var self = this;

//     self.direction = direction;
// }

// Player.prototype.update = function () {
//     var self = this;

// }

Player.prototype.draw = function () {
    var self = this;
    
    self.ctx.fillStyle = "black";
    self.ctx.fillRect(50, 380, self.size, self.size);
}

Player.prototype.update = function () {
    var self = this;
    self.y += self.velY;
    if (self.y < 350){ this.velY -= -4;}
}

Player.prototype.render = function () {
    var self = this;
    var renderX = self.x - self.width/2;
    var renderY = self.y - self.height/2;
    self.ctx.drawImage(self.sprites[0], renderX, renderY)
}