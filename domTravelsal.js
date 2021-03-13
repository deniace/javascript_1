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

// event bubling adalah event yang dijalankan di parent  nya

// tutup.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); // menghentikan aksi default
//         e.stopPropagation(); // menghentikan event parent
//     });
// });

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert("card");
//     });
// });
// const nama = document.querySelector('.nama');

// console.log(nama.parentElement.nextElementSibling.firstElementChild.nextElementSibling);



// rewrite code

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if(e.target.className == "close"){
        e.target.parentElement.style.display = 'none';
    }
})