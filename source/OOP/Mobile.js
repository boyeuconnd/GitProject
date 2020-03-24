let Mobile = function (battery,draft,inbox,sent,status) {
    this.battery = battery;
    this.draft = draft;
    this.inbox = inbox;
    this.sent = sent;
    this.status = status;
    this.power =function () {
        if(this.battery>0)
            this.status = !this.status;
        else
            return false;
    }
    this.charge = function () {
        this.battery = 100;
        console.log('Full Battery');
    }
    this.typing = function (x) {
        if(this.status===true){
            this.draft = x;
            this.battery --;
        }
    }
    this.sentMess = function (mobile) {
        if (this.status){
            this.sent.push(this.draft);
            mobile.inbox.push(this.draft);
            this.draft = "";
            this.battery --;
        }
    }
    this.checkInbox = function () {
       if(this.status){
           for(i in this.inbox){
               document.write("Inbox Messenger "+i+" : "+ this.inbox[i]+"<br>");
           }
       }
    }
    this.checkSent = function () {
        if(this.status){
            for(i in this.sent){
                document.write("Sent Messenger "+i+" : "+ this.inbox[i]+"<br>");
            }
        }
    }
}