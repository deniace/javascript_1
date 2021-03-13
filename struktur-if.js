var hasil = document.getElementById("hasil");
var btnCek = document.getElementById("btncek");
var angka1 = document.getElementById("number1");
var angka2 = document.getElementById("number2");
var pangka1 = document.getElementById("pangka1");
var pangka2 = document.getElementById("pangka2");

function cekAngka(a,b) {
    if(a == b){
        return "sama";
    }
    if(a > b){
        return "a lebih besar dari b";
    }
    if (a < b) {
        return "B lebih besar dari a";
    }
    
    return 'lah';
}


// btnCek.onclick = function () {
    //     let a = angka1.value;
    //     let b = angka2.value;
//     pangka1.innerText = a;
//     pangka2.innerText = b;
//     hasil.innerText = cekAngka(a,b);
// }

// add event
btnCek.addEventListener('click', function () {
    let a =  angka1.value;
    let b =  angka2.value;
    pangka1.innerText = a;
    pangka2.innerText = b;
    let hasilString = cekAngka(a,b);
    hasil.innerHTML = hasilString;
});