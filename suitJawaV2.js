function pilihanKomputer() {
    const comp = Math.random();

    if(comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if(player == comp) return "seri";
    if(player == 'gajah') return (comp == "orang") ? "menang":"kalah";
    if(player == 'orang') return (comp == "gajah") ? "kalah":"menang";
    if(player == 'semut') return (comp == "orang") ? "kalah":"menang";
}

function putar() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', './img/' + gambar[i++] + '.png');
        if(i == gambar.length){
            i = 0;
        }
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let pKomputer = pilihanKomputer();
        let pilihanPlayer = pil.className;
        let hasil = getHasil(pKomputer, pilihanPlayer);

        putar();

        setTimeout(function(){
            let papanHasil = document.querySelector('.info');
            papanHasil.innerHTML = hasil;
    
            let imgComp = document.querySelector(".img-komputer");
            imgComp.setAttribute('src', "img/"+pKomputer+".png");    
        }, 1000);


    });
});


    
    
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', ()=>{
//     let pKomputer = pilihanKomputer();
//     let pilihanPlayer = pGajah.className;
//     let hasil = getHasil(pKomputer, pilihanPlayer);

//     let papanHasil = document.querySelector('.info');
//     papanHasil.innerHTML = hasil;

//     let imgComp = document.querySelector(".img-komputer");
//     imgComp.setAttribute('src', "img/"+pKomputer+".png");
// });

// const pOrang = document.querySelector('.orang');

// pOrang.addEventListener('click', ()=>{
//     let pKomputer = pilihanKomputer();
//     let pilihanPlayer = pOrang.className;
//     let hasil = getHasil(pKomputer, pilihanPlayer);

//     let papanHasil = document.querySelector('.info');
//     papanHasil.innerHTML = hasil;

//     let imgComp = document.querySelector(".img-komputer");
//     imgComp.setAttribute('src', "img/"+pKomputer+".png");
// });

// const pSemut = document.querySelector('.semut');

// pSemut.addEventListener('click', ()=>{
//     let pKomputer = pilihanKomputer();
//     let pilihanPlayer = pSemut.className;
//     let hasil = getHasil(pKomputer, pilihanPlayer);

//     let papanHasil = document.querySelector('.info');
//     papanHasil.innerHTML = hasil;

//     let imgComp = document.querySelector(".img-komputer");
//     imgComp.setAttribute('src', "img/"+pKomputer+".png");
// });