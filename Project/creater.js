class Creater extends LivingCreature{
    constructor(x, y) {
        super(x, y, 4);
        this.energy = 25;
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.chooseCell(ch);
    }
    poxakerpel() {
        var datark = this.yntrelVandak(0)
        var norVandak = random(datark);
        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            if (amenakerArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 5;
                    var nor = new Amenaker(norx, nory);
                    amenakerArr.push(nor);
                    this.energy--
                }
            }
            else if (xotakerArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 2;
                    var nor = new Xotaker(norx, nory);
                    xotakerArr.push(nor);
                    this.energy--;
                }
            }
            else if (gishatichArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 3;
                    var nor = new Gishatich(norx, nory);
                    gishatichArr.push(nor);
                    this.energy--;
                }
            }
        }
    }
    bazmanal() {
        this.multiply++
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak && this.multiply >= 150) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;
            var nor = new Creater(norx, nory);
            createrArr.push(nor);
            this.multiply = 0
        }
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
        }
    }
    mahanal() {
        for (var i in createrArr) {
            if (this.energy <= 0 && createrArr[i].x == this.x && createrArr[i].y == this.y) {
                createrArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}