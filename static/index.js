function fnt1()
{
    const rd1 = document.getElementById("rd1");
    const rd2 = document.getElementById("rd2");


    if (rd1.checked) {
        alert(rd1.name);
        rd1.checked = 0

    }
    else if (rd2.checked) {
        alert(rd2.name);
        rd2.checked = 0

    }
    else{
        alert("select one plz..")
    }
}