const btnGantiWarna = document.getElementById('btnGantiWarna');

btnGantiWarna.addEventListener('click', function(){
    // document.body.style.backgroundColor = "lightgreen";
    document.body.classList.toggle('biru-muda');
});


const tombolAcakWarna = document.createElement('button');
const textButton = document.createTextNode('acak warna');

tombolAcakWarna.appendChild(textButton);
tombolAcakWarna.setAttribute('type', 'button');

btnGantiWarna.after(tombolAcakWarna);

tombolAcakWarna.addEventListener('click', ()=>{
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', gantiWarnaDariSlider);

sHijau.addEventListener('input', gantiWarnaDariSlider);

sBiru.addEventListener('input', gantiWarnaDariSlider);

function gantiWarnaDariSlider(){
    let r = sMerah.value;
    let g = sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}

document.body.addEventListener('mouseover', function(event){
    let xPos = Math.round((event.clientX / window.innerWidth) * 255);
    let yPos = Math.round((event.clientY / window.innerHeight) * 255);
    let b = Math.round(Math.random() * 255)

    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)'
});