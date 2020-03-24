let flash_light = function (status,battery) {
    this.status = status;
    this.battery = battery;
    this.power = function () {
        if(this.battery >0) {
            this.status = !this.status;
            this.lightStatus();
        }else {
            this.status = false;
            alert("No Battery");
        }
    }
    this.setBattery = function (inputBattery) {
        this.battery = inputBattery.energy;
        this.batteryUsing = inputBattery;
    }
    this.lightStatus = function () {
        if(this.status){
            alert("Light is on");
            this.batteryUsing.energyDown();
        }else {
            alert("Light is off");
        }
    }
}