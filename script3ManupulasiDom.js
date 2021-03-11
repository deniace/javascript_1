// dom Manipulasi

// buat element baru
const p = document.createElement('p');
const text = document.createTextNode("p baru");

// menyimpan text kedalam p
p.appendChild(text);

// menyeleksi section a
const a = document.getElementById('a');

a.appendChild(p);

// membuat li baru
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('li baru');

// menyimpan text kedalam li
liBaru.appendChild(textLiBaru);

// menyeleksi ul dan li
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// menyimpan li baru ke document
ul.insertBefore(liBaru, li2);


// mencari node
const linkA = document.getElementsByTagName('a')[0];
// console.log(linkA);

// menghapus node
a.removeChild(linkA);

// mencari atau menseleksi node
const sectionB = document.getElementById('b');
const pLama = sectionB.querySelector('p');

// membuat element baru

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('H2 Baru');

h2Baru.appendChild(textH2Baru);

// mengganti node | new child , old Child
sectionB.replaceChild(h2Baru, pLama);

// mengganti background element yang baru
p.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';


// method baru, sebaiknya dicoba
// parentNode.append();
// parentNode.prepend();
// childNode.before();
// childNode.after();
// childNode.remove();
// childNode.replaceWith();
