function SwitchButton() {
    this.status = false;
    this.lamp;
    this.connectStatus = false; //Nếu không kết nối với đèn thì trạng thái công tắc vấn thay đổi nhưng ko thay đổi trạng thái đèn
    this.connectLamp = function (lamp) {
        lamp.status = this.status;
        this.lamp = lamp;
        this.connectStatus = true;

    }
    this.switchOn = function () {
        this.status = true;
        if(this.connectStatus){
            this.lamp.status = true;
            this.lamp.checkStatus();
        }

    }
    this.switchOff = function () {
        this.status = false;
        if(this.connectStatus){
            this.lamp.status = false;
            this.lamp.checkStatus();
        }
    }

}
function ElectricLamp() {
    this.status;
    this.checkStatus =function () {
        if(this.status === true){
            alert("Lamp is on")
        }else {
            alert("Lamp is off")
        }
    }
}