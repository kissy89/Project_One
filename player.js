"use strict";

function Player(ctx, width, height){
    var self = this;

    self.size = 50;
    self.jumping = true;

    self.x_velocity = 0;
    self.y_velocity = 0;

    self.ctx = ctx;

    self.spriteIndex = 0;
    self.ticks = 0;


    self.gameWidth = width;
    self.gameHeight = height;

    self.sprites = [document.getElementById("sprite1"),
    document.getElementById("sprite3"), document.getElementById("sprite4"),
    document.getElementById("sprite5"), document.getElementById("sprite6"),
    document.getElementById("sprite7"), document.getElementById("sprite7")];


    self.x = 110;
    self.y = 420;
    self.direction = null;

    self.controls = {
        left: false,
        right: false,
        up: false,
        keyListener: function(event){
            var key_state = (event.type == "keydown")?true:false;
            switch(event.keyCode){
                case 37:
                    controls.left = key_state;
                break;
                case 38:
                    controls.up = key_state;
                break;
                case 39:
                    controls.down = key_state
                break;
            }
        }        
    }
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

Player.prototype.render = function () {
     var self = this;
     var renderX = self.x - self.size/2;
     var renderY = self.y - self.size/2;
     self.ctx.drawImage(self.sprites[this.spriteIndex], renderX, renderY)
}

Player.prototype.update = function () {
    var self = this;
    self.ticks++;
    if (self.ticks % 15 === 0) {self.spriteIndex = (self.spriteIndex+1) % self.sprites.length;
    };
}

Player.prototype.controller = function () {
    var self = this;


    if (self.y <= 420) {
    
        if(self.controls.up && self.jumping == false){
            self.y_velocity -= 50;
            self.jumping = true;
        }
    
        if (self.controls.left) {
            self.x_velocity -= 0.5; // smoother movings
        }
    
        if (self.controls.right) {
            self.x_velocity += 0.5;
        }

        self.y_velocity += 1.50; //gravity
        self.x += self.x_velocity;
        self.y += self.y_velocity;
        self.x_velocity *= 0.9; // friction
        self.y_velocity *= 0.9;
    
    }
    
    if (self.y > 420) {
        self.y_velocity = 0;
        self.jumping = false;
         self.y = 420;
    }
}

Player.prototype.jump = function (event) { 
    var self = this;
    var key_state = (event.type == "keydown") ? true : false;
    switch(event.keyCode){
        case 37:
            self.controls.left = key_state;
        break;
        case 38:
            self.controls.up = key_state;
        break;
        case 39:
            self.controls.right = key_state
        break;
    }
}
