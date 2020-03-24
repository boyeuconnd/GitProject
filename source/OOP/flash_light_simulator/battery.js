let Battery = function (energy) {
    this.energy = energy;
    this.Set_energy = function (value) {
        return this.energy = value;
    }
    this.energyDown = function () {
        if(this.energy>0) {
            this.energy--;
        }
    }
}