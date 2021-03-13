const root = document.getElementById('root');
const btnLiter = document.getElementById('btnLiter');
const inputLiter = document.getElementById('literasi');

btnLiter.addEventListener('click', function () {
    let hasil = document.getElementById('hasil');
    hasil.innerHTML = "";

    let liter = inputLiter.value;
    for (let i = 0; i < liter; i++) {
        const p = document.createElement('p');
        const text = document.createTextNode('Ini Literasi ke '+ i);
        p.appendChild(text);
        hasil.appendChild(p);
    }
});

const btnReseet = document.getElementById('btnReset');

btnReseet.addEventListener('click', function(){
    let hasil = document.getElementById('hasil');
    hasil.innerHTML = "";
    inputLiter.value = "";
});