"use strict"

function Environment(ctx, canvas){
    var self = this;
    
    self.canvas = canvas;
    self.xposition = 0;
    self.yposition = 0;
    self.speed = 2;
    self.ctx = ctx;
    self.imageWidth = 800;
    self.image = new Image();
    self.image.src = "./images/hintergrund.png";
};

Environment.prototype.update = function(){
    var self = this;
    self.xposition -= self.speed;
    if (self.xposition < -self.imageWidth){
        self.xposition = 0;
    }
}

Environment.prototype.render = function(){
    var self = this;
    for(var i = 0; i <= self.canvas.width/self.imageWidth; i++){
    self.ctx.drawImage(self.image, self.xposition+i*this.imageWidth, 0);
    }
}