var socket = io();
var obej = {};

function setup(){
    createCanvas(700,700);
    background('#acacac');
}
function mouseDragged(){
    var mx = mouseX;
    var my = mouseY;
    var obj = {"x": mx, "y": my};
    socket.emit("send drawing", obj);
    ellipse(mouseX, mouseY, 10, 10);
}
function returnCoords(evt){
    obej = {"x": evt.x, "y": evt.y};
}
function draw(){
    ellipse(arguments[0].x, arguments[0].y, 10, 10);
}
socket.on("show drawing", draw);