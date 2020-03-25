let Apple = function () {
    this.weight = 10;
    this.getWeight = function () {
        return this.weight;
    }
    this.decrease = function () {
        return this.weight--;
    }
    this.isEmpty = function () {
        if(this.weight ===0){
            return true;
        }else {
            return false;
        }
    }
}
let Human = function (name,gender,weight) {
    this.name=name;
    this.gender=gender;
    this.weight=weight;
    this.isMale = function () {
        if(this.gender ===true){
            return true;
        }else {
            return false;
        }
    }
    this.getName = function () {
        return this.name;
    }
    this.setName = function (value) {
        return this.name = String(value);
    }
    this.setGender = function (value) {
        if(value==true || value ==false){
           return this.gender=value;
        }
    }
    this.checkApple = function (apple) {
        if(!apple.isEmpty()){
            return true;
        }else {
            return false;
        }
    }
    this.eat = function (apple) {
        if(this.checkApple(apple)){
            this.weight++;
            apple.decrease();
        }else {
            alert("Apple was Empty");
        }
    }
    this.say = function () {
        return alert("Hello, my name is "+this.name);
    }


}