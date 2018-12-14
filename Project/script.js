/*var matrix = [
    [0, 2, 1, 0, 0],
    [1, 0, 0, 3, 0],
    [0, 1, 0, 0, 5],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 2, 0],
    [4, 1, 0, 0, 0],
    [1, 1, 0, 0, 3]
];*/
var matrix = [];
for(var y = 0; y < 25; y++){
    matrix[y] = []
    for(var x = 0; x < 25; x++){
        matrix[y][x] = 0;
    }
}
var length = parseInt(matrix.length) * parseInt(matrix[0].length);
for(var i = 0; i < length/3; i++){
	matrix[Math.floor(Math.random()*matrix.length)][Math.floor(Math.random()*matrix[0].length)] = 1;
}
for(var i = 0; i < length/22.5; i++){
    matrix[Math.floor(Math.random()*matrix.length)][Math.floor(Math.random()*matrix[0].length)] = 2;
    matrix[Math.floor(Math.random()*matrix.length)][Math.floor(Math.random()*matrix[0].length)] = 3;
    matrix[Math.floor(Math.random()*matrix.length)][Math.floor(Math.random()*matrix[0].length)] = 5;
}
matrix[Math.floor(Math.random()*matrix.length)][Math.round(Math.random()*matrix[0].length)] = 4
var side = 25;

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var createrArr = [];
var amenakerArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y))
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y))
            }
            else if(matrix[y][x] == 4) {
                createrArr.push(new Creater(x,y));
            }
			else if(matrix[y][x] == 5) {
                amenakerArr.push(new Amenaker(x,y));
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x] == 4){
                fill("white");
                rect(x * side, y * side, side, side);
            }
			else if(matrix[y][x] == 5){
                fill("orange");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].mahanal();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
        gishatichArr[i].bazmanal();
        gishatichArr[i].mahanal();
    }
    for (var i in createrArr) {
        createrArr[i].sharjvel();
        createrArr[i].bazmanal();
		createrArr[i].poxakerpel();
		createrArr[i].mahanal();
    }
	for (var i in amenakerArr) {
        amenakerArr[i].utel();
		amenakerArr[i].bazmanal();
		amenakerArr[i].mahanal();
    }
}

