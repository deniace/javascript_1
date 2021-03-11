const p3 = document.querySelector('.p3');
p3.style.backgroundColor = "lightblue";

function ubahWarna(){
    p3.style.backgroundColor = "red";
}

const p2 = document.querySelector('.p2');

p2.onclick = ubahWarnaP2;

function ubahWarnaP2(){
    p2.style.backgroundColor = 'red';
}

const p4 = document.querySelector('section#b p');

// cara menulis fungsi 
function namaFungsi (){}
// anonim function
// function (){}
// arrow function
// ()=>{}

p4.addEventListener('click', function(){
    // alert("oke");
    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('Li Baru');

    liBaru.appendChild(textLiBaru);

    const ul = document.querySelector('section#b ul');

    ul.appendChild(liBaru);
});

const p1 = document.querySelector('.p1');

// p1.onclick = function (){
//     p1.style.backgroundColor = 'lightblue';
// }

// p1.onclick = function(){
//     p1.style.color = 'red';
// }

p1.addEventListener('click', function () {
    p1.style.backgroundColor = 'lightblue'
});

p1.addEventListener('click', function(){
    p1.style.color = "red";
});

p1.addEventListener('dblclick', function(){
    p1.style.backgroundColor = "magenta";
});