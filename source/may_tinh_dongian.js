//function for hiển thị giá trị
function hienthi(val)
{
    document.getElementById("edu").value+=val;
}
//function for tính toán
function giai()
{
    let x = document.getElementById("edu").value;
    console.log(x);
    let y = eval(x);
    console.log(y);
    document.getElementById("edu").value = y;
}
//function for clr giá trị đã nhập
function clr()
{
    document.getElementById("edu").value = "";
}