// declare variables
const FPS = 30;
var bs = 100;
var bx, by;
var xv, yv;
var canvas, context;

// load canvas
canvas = document.getElementById("gameCanvas");
context = canvas.getContext("2d");

// set up interval (game loop)
setInterval(update, 1000 / FPS);

// ball starting position
bx = 50;
by = canvas.height / canvas.height;

// random ball starting speed (between 25 and 100 pps)
xv = Math.floor(Math.random() * 76 + 25) / FPS;
yv = Math.floor(Math.random() * 76 + 25) / FPS;

// random ball direction
if (Math.floor(Math.random() * 2) == 0) {
    xv = -xv;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv = -yv;
}

// update function
function update() {
    // move the ball
    bx += xv;
    by += yv;
    
    // bounce the ball off each wall
    if (bx - bs / 2 < 0 && xv < 0) {
        xv = -xv;
    }
    if (bx + bs / 2 > canvas.width && xv > 0) {
        xv = -xv;
    }
    if (by - bs / 2 < 0 && yv < 0) {
        yv = -yv;
    }
    if (by + bs / 2 > canvas.height && yv > 0) {
        yv = -yv;
    }
    
    // draw background and ball
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "blue";
    context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
}