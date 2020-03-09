
function chuyendoi() {
    let a = Number(document.getElementById("amount").value);
    console.log(a);
    //Lấy giá trị số tiền cần đổi
    let fromcr = document.getElementById("fromcurrency").value;
    console.log(fromcr);
    //lấy tiền cần đổi
    let tocr = document.getElementById("tocurrency").value;
    console.log(tocr);
    //lấy tiền sẽ đổi
    let frrate = 0;
    let torate = 0;
    if (fromcr === 'vnd'){frrate = 1}
    else{
        if (fromcr === 'usd'){frrate = 23000}
        else{
            frrate = 3300
        }

    };
    if (tocr === 'vnd'){torate = 1}
    else{
        if (tocr === 'usd'){torate = 23000}
        else{
            torate = 3300
        }

    };

    console.log(frrate);
    console.log(torate);
    let r = frrate/torate;
    console.log(r)

    let result = a * r;
    document.write('<p>Result: ' + result + tocr + '</p>')

};