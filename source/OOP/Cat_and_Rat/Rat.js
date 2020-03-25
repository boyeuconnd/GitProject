let Rat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;

    this.sound = function () {
        alert("chít chít");
    }
}