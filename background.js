"use strict"


// var bg = new Image();
// bg.src = "Untitled.jpg";

// function Background(ctx){
//     var self = this;
    
//     self.x = 0;
//     self.y = 0;
//     self.w = bg.width;
//     self.h = bg.height;
//     self.ctx = ctx;

//     self.render = function (){
//         ctx.drawImage(bg, self.x--, 0);
//         if(self.x <= -499){
//             self.x = 0;
//         }
//     }
// }


function Environment(canvas, ctx){
    var self = this;
    
    self.canvas = canvas;
    self.xposition = 0;
    self.yposition = 0;
    self.speed = 10;
    self.ctx = ctx;
    self.imageWidth = 800;
    self.image = new Image();
    self.image.src = "Untitled.jpg";
};

Environment.prototype.update = function(){
    var self = this;
    self.position -= self.speed;
    if (self.xposition < -self.imageWidth){
        self.xposition = 0;
}
}

Environment.prototype.render = function(){
    var self = this;
        for(var i = 0; i <= self.canvas.width/self.imageWidth; i++){
    self.ctx.drawImage(self.image, self.xposition+i*self.imageWidth, 0);
}
}
