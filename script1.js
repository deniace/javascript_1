// mengembalikan 1 element
const p4 = document.querySelector('#b p');

p4.style.color = 'red';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');

// document.querySelectorAll return nya node list
const p = document.querySelectorAll('p');
p[1].style.backgroundColor = "lightBlue";

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'magenta';
}

// mengubah node rootco
const b = document.getElementById('b');
const p1 = b.querySelector('p');

const sectionB = document.querySelector('section#b');
const par1 = sectionB.getElementsByTagName('p');

par1[0].style.backgroundColor = 'orange';