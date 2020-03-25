let Car = function (image,x,y,height,width,speed) {
    this.image=image;
    this.x=x;
    this.y=y;
    this.height=height;
    this.width=width;
    this.speed=speed;
    this.getElement = function () {
        return
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getWidth = function () {
        return this.width;
    }
    this.moveUp = function () {
        return this.x+=this.speed;
    }
    this.draw = function () {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        context.drawImage()
    }
}