class Amenaker extends Xotaker{
    constructor(x, y) {
        super(x, y);
        super.index = 5;
        this.energy = 5;
        this.count = [0, 0, 0]
    }
    utel() {
        var norVandak = random(this.directions);
        if (this.energy >= 0 && norVandak[0] >= 0 && norVandak[1] >= 0 && norVandak[0] < matrix[0].length && norVandak[1] < matrix.length && matrix[norVandak[1]][norVandak[0]] != 0 && matrix[norVandak[1]][norVandak[0]] != 4) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            if (matrix[this.y][this.x] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                matrix[this.y][this.x] = 5;
                this.energy++;
                this.count[0]++;
            }
            else if (matrix[this.y][this.x] == 2) {
                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                        xotakerArr.splice(i, 1);
                        break;
                    }
                }
                matrix[this.y][this.x] = 5;
                this.energy++;
                this.count[1]++;
            }
            else if (matrix[this.y][this.x] == 3) {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }
                matrix[this.y][this.x] = 5;
                this.energy++;
                this.count[2]++;
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                if (this.count[1] > 0) {
                    matrix[norVandak[1]][norVandak[0]] = 2;
                    var nor = new Xotaker(norVandak[0], norVandak[1])
                    xotakerArr.push(nor);
                }
                else if (this.count[2] > 0) {
                    matrix[norVandak[1]][norVandak[0]] = 3;
                    var nor = new Gishatich(norVandak[0], norVandak[1]);
                        gishatichArr.push(nor);
                }
            }
            for (var i in amenakerArr) {
                if (amenakerArr[i].x == this.x && amenakerArr[i].y == this.y) {
                    amenakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }
}