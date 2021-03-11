const judul = document.getElementById('judul');
judul.innerHTML = "<em>deni ace</em>";

const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "hellow world";
// sectionA.innerHTML = "<div><p>Paragraf 1</p></div>";

const judul1 = document.querySelector('#judul');
judul1.style.backgroundColor = 'salmon';

const judulh1 = document.getElementsByTagName('h1')[0];
judulh1.setAttribute('name', 'judul');

const judula = document.querySelector('section#a a');
// console.log(judula);

const p2 = document.querySelector('.p2');

// p2.setAttribute('class', 'labe');
// menambah class
p2.classList.add('togel'); 

// menghapus class
p2.classList.remove('togel');

// menghapus jika ada dan menambah jika kosong
p2.classList.toggle('deni');

// untuk megambil clas berasarkan index class
p2.classList.item(0);

// untuk mengecek apakah ada class atau tidak
p2.classList.contains('satu');


// untuk mengganti class
p2.classList.replace('deni', 'tata');