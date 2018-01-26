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

    self.image;
    self.images = [document.getElementById("snippet1"), document.getElementById("snippet2"),
    document.getElementById("snippet3"), document.getElementById("snippet4"),document.getElementById("snippet5")];

    self.randomImage();
}

Snippets.prototype.randomImage = function () {
    var self = this;

    self.image = self.images[Math.floor(Math.random()*self.images.length)];
}

Snippets.prototype.setDirection = function (){
    var self = this;

    self.direction = direction;
}

Snippets.prototype.draw = function () {
    var self = this;
    
    self.ctx.drawImage(self.image, self.x, self.y);
}

Snippets.prototype.animation = function () {
    var self = this;
    
    self.x = self.x - 7;
    self.ctx.clearRect(0, 0, self.ctx.width, self.ctx.height);
}

// Snippets.prototype.render = function () {                                           // rendering images sprites
//     var self = this;
    
//     self.ctx.drawImage(self.sprites[Math.floor(Math.random()*2)])
// }
