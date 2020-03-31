let MainCar = function (x, y, height, width) {
    this.x=x;
    this.y=y;
    this.height=height;
    this.width=width;
    this.speed =10;
    this.speedBoost = function () {
        return this.speed = 20;
    };
    this.getDrawX =function () {
        return this.x - (this.width/2);
    };
    this.getDrawY =function () {
        return this.y - (this.height/2);
    };
    this.moveUp = function () {
        this.y -=this.speed;
    };
    this.moveDown = function () {
        this.y +=this.speed;
    };
    this.moveLeft = function () {
        this.x -=this.speed;
    };
    this.moveRight = function () {
        this.x +=this.speed;
    };
    this.draw = function (direct) {
        switch (direct) {
            case "Up":
                this.height = carImgUp.height;
                this.width = carImgUp.width;
                ctx.drawImage(carImgUp,this.getDrawX(),this.getDrawY());
                break;
            case "Down":
                this.height = carImgDown.height;
                this.width = carImgDown.width;
                ctx.drawImage(carImgDown,this.getDrawX(),this.getDrawY());
                break;
            case "Left":
                this.height = carImgLeft.height;
                this.width = carImgLeft.width;
                ctx.drawImage(carImgLeft,this.getDrawX(),this.getDrawY());
                break;
            case "Right":
                this.height = carImgRight.height;
                this.width = carImgRight.width;
                ctx.drawImage(carImgRight,this.getDrawX(),this.getDrawY());
                break;
        }

    }
};
let Object = function (x,y,type) {
    this.x=x;
    this.y=y;
    this.type=type;
    this.getCenterX =function () {
        return this.x + 25;
    };
    this.getCenterY =function () {
        return this.y + 25;
    };
    this.draw = function () {
        if(this.type == true){
            ctx.drawImage(coinImg,this.x,this.y);
        }else {
            ctx.drawImage(rockImg,this.x,this.y);
        }
    }
};
let Sound = function (src,status,element,mute) {
    this.src = src;
    this.status = status;
    this.element = element;
    this.mute = mute;
    this.play_pause = function () {
        var music = document.getElementById(this.src);
        if(this.status){
            music.pause();
            this.status = false;
        }else {
            music.play();
            this.status = true;
        }

    };
    this.setMusic = function () {
        let audioTab;
        if(this.status ===true){
            audioTab = '<audio id="'+this.src+'"src="'+this.src+'" loop  autoplay></audio>';
        }else {
            audioTab = '<audio id="'+this.src+'"src=" '+this.src +'"></audio>';
        }
        document.getElementById(this.element).innerHTML = audioTab;

    };
    this.setMute =
    this.play_sound = function () {
        if(this.mute){
        }else {
            this.setMusic();
            document.getElementById(this.src).play();
        }

    };
};
