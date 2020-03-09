//Bài toán nhập điểm sv, xuất ra điểm tb và tổng.
/*let physic;
let chemy;
let bio;
physic = Number(prompt('Mời nhập điểm Lý: '));
chemy = Number(prompt('Mời nhập điểm Hóa: '));
bio = Number(prompt('Mời nhập điểm Sinh: '));
let ave = (physic + chemy + bio)/3;
let sum = (physic + chemy+ bio);
document.write('Điểm trung bình của sv là: ' + ave.toFixed(2) + '<br>');
document.write('Tổng điểm của sv là: '+ sum + '<br>');*/
//Bài tập chuyển từ Celsius sang Fahrenheit  [C/5 = (F-32)/9]
/*let celsius = Number(prompt('Mời nhập nhiệt độ theo thang Celsius: '));
console.log(celsius);
let fahrenheit;
fahrenheit = (celsius/5)*9+32;
console.log(fahrenheit);
document.write('Nhiệt độ theo thang Fahrenheit là: ' + fahrenheit.toFixed(2) + '<sup>o</sup>F')*/
//Bài tập tính diện tích & chu vi hình tròn. S= Pi*R*R C=Pi*2*R
let bankinh = Number(prompt('Mời nhập bán kính của hình tròn: '));
console.log('ban kinh ' + bankinh);
let S = (Math.PI)*(Math.pow(bankinh,2));
document.write('Diện tích hình tròn là: '+ S.toFixed(2)+'<br>');
console.log('dien tích ' + S);
let D = (Math.PI)*bankinh*2;
console.log('chu vi ' + D);
document.write('Chu vi hình tròn là: '+D.toFixed(2));