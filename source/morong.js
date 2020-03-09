//function for displaying values
function hienthi(val)
{
    document.getElementById("edu").value+=val;
}
//function for evaluation
function giai()
{
    let x = document.getElementById("edu").value;
    console.log(x);
    let y = eval(x);
    console.log(y);
    document.getElementById("edu").value = y;
}
//function for clearing the display
function clr()
{
    document.getElementById("edu").value = "";
}