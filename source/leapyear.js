let year = Number(prompt('Mời nhập năm muốn kiểm tra'));
let check = false; //Biến check kiểm tra năm nhuận cho ra giá trị true hoặc false

if (year % 4 == 0){ //Kiểm tra tính chia hết cho 4
    if (year % 100 == 0 ){//kiểm tra tính chia hết cho 100
        if (year % 400 == 0) {// kiểm tra tính chia hết cho 400
         check = true; //ra kqua đúng vs cả 3 điều kiện
        }
    } else { // ra kqua chia hết cho 4 nhưng k chia hết cho 100 và 400
        check = true;
    }
};
if (check) {
    alert( year + " is a leap year.");
}else{
    alert( year + " not a leap year.");
};
