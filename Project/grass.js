class Grass extends LivingCreature{
    bazmanal() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var norVandak = random(datarkVandakner);
        if (norVandak && this.multiply >= Math.round(Math.random() * 3) + 7) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 1;
            var norXot = new Grass(norx, nory);
            grassArr.push(norXot);
            this.multiply = 3;
        }

    }
}