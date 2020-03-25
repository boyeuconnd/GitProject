let Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    this.sound = function () {
        alert("Meo Meo")
    }

    this.chasing = function (rat) {
        if (this.speed > rat.speed){
            console.log(this.name + " bắt được chuột " + rat.name);
            rat.status = false;
        }
        else {
            console.log(this.name + " không bắt được chuột " + rat.name)
        }
    }

    this.eatRat = function (rat) {
        if (!rat.status){
            this.weight += rat.weight;
            console.log("Chuot bị chén");
        }
    }
}