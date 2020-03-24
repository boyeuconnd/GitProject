function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function(){
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }
    this.moveUp = function(){
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }

}

var hero = new Hero("planeRight.png", 20, 30, 100,30);

function moveRight(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    // setTimeout(moveRight, 500)
}
function moveLeft(){
    if(hero.left > hero.size){
        hero.moveLeft();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    // setTimeout(moveRight, 500)
}
function moveUp(){
    if(hero.top > 0){
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    // setTimeout(moveRight, 500)
}
function moveDown(){
    if(hero.top < window.innerHeight){
        hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    // setTimeout(moveRight, 500)
}

