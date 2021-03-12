// const tutup = document.querySelector('.close');

// tutup.addEventListener('click',function(){
//     const divCard = document.querySelector('.card');
//     divCard.outerHTML = "";
// });


// dom travelsa;

const tutup = document.querySelectorAll('.close');

// for (let i = 0; i < tutup.length; i++) {
//     tutup[i].addEventListener('click', function(e){
//         // tutup[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
    
// }

// prefentDefault = menghentikan aksi default nya

tutup.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    });
});

const nama = document.querySelector('.nama');

console.log(nama.parentElement.nextElementSibling.firstElementChild.nextElementSibling);