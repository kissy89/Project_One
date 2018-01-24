"use strict";

function Player(ctx, width, height){
    var self = this;

    self.size = 50;
    self.jumping = false;

    self.x_velocity = 0;
    self.y_velocity = 0;

    self.ctx = ctx;

    self.gameWidth = width;
    self.gameHeight = height;

    self.x = self.gameWidth / 4;
    self.y = self.gameHeight / 2;
    self.direction = null;

    // self.controller = {
    //     left: false,
    //     right: false,
    //     up: false,
    //     keyListener: function(event){
    //         var key_state = (event.type == "keydown")?true:false;
    //         switch(event.keyCode){
    //             case 37:
    //                 controller.left = key_state;
    //             break;
    //             case 38:
    //                 controller.up = key_state;
    //             break;
    //             case 39:
    //                 controller.down = key_state
    //             break;
    //         }
    //     }        
    // }
}

//     self.sprites = [document.querySelector("sprite1"), document.querySelector("sprite2")];
// };

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
    self.ctx.fillRect(self.x, self.y, self.size, self.size);
}

// Player.prototype.update = function () {
//     var self = this;
//     self.y += self.velY;
//     if (self.y < 350){ this.velY -= -4;}
// }

// Player.prototype.render = function () {
//     var self = this;
//     var renderX = self.x - self.width/2;
//     var renderY = self.y - self.height/2;
//     self.ctx.drawImage(self.sprites[0], renderX, renderY)
// }

Player.prototype.controller = function () {
    var self = this;

    if(self.controller.up && self.controller.jumping == false){
        self.controller.y_velocity -= 20;
        self.controller.jumping = true;
    }
    
    if (self.controller.left) {
        self.controller.x_velocity -= 0.5; // smoother movings
    }
    
    if (self.controller.right) {
        self.controller.x_velocity += 0.5;
    }

    self.y_velocity += 1.50; //gravity
    self.x += self.x_velocity;
    self.y += self.y_velocity;
    self.x_velocity *= 0.9; // friction
    self.y_velocity *= 0.9;

    // if (self.y > 400) {
    //     self.y_velocity = 0;
    //     self.jumping = true;
    // }
}

Player.prototype.jump = function (event) { 
    var self = this;
    var key_state = (event.type == "keydown") ? true : false;
    switch(event.keyCode){
        case 37:
            self.controller.left = key_state;
        break;
        case 38:
            self.controller.up = key_state;
        break;
        case 39:
            self.controller.right = key_state
        break;
    }
}
