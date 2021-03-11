// console.log(document);

// dom selection
// document.getElementById('judul'); -> mengembalikan 1 element
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = '#ccd';
judul.innerHTML = "Hellow deni ace"; 


// document.getElementsByTagName -> mengembalikan HTML collection -> mirip array
const p = document.getElementsByTagName('p');
p[2].style.backgroundColor = 'lightBlue';

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'orange';
}


// document.getElementsByClassName -> return nya html HTMLAllCollection
// menggambil document berdasarkan class name

// const p1 = document.getElementsByClassName('p1')[0]; bisa dikasi index di belakang
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "ini diubah dari javascript";