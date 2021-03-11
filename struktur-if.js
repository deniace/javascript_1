var hasil = document.getElementById("hasil");
var btnCek = document.getElementById("btncek");
var angka1 = document.getElementById("number1");
var angka2 = document.getElementById("number2");
var pangka1 = document.getElementById("pangka1");
var pangka2 = document.getElementById("pangka2");

function cekAngka(a,b) {
    let aa = "";
    if(a == b){
        aa = "sama";
    }else if(a > b){
        aa = "a lebih besar dari b";
    }else if (a < b) {
        aa= "B lebih besar dari a";
    }else{
        aa = "lah";
    }
    return aa;
}

btnCek.onclick = function () {
    let a = angka1.value;
    let b = angka2.value;
    pangka1.innerText = a;
    pangka2.innerText = b;
    hasil.innerText = cekAngka(a,b);
}

