// menyeleksi jumbo
const imgJumbo = document.querySelector('.jumbo');

// menyeleksi thumbnail
const thumbnail = document.querySelector('.thumbnaii');

// mengambil thumbn
const thumbs = document.querySelectorAll('.thumb');

thumbnail.addEventListener('click', function(e){
    // mengambil data atriibute src
    let attr = e.target.getAttribute('src');
    // mengeset attribute src
    imgJumbo.setAttribute('src', attr);

    // dari sandika
    // imgJumbo.src= e.target.src; // bisa ini
    // console.log(attr);

    imgJumbo.classList.add('fade');

    setTimeout(() => {
        imgJumbo.classList.remove('fade');
    }, 500);

    thumbs.forEach(function(thumb){
        // if(thumb.classList.contains('active')){
        //     thumb.classList.remove('active');
        // }
        // console.log(thumb);
        thumb.className = "thumb";
    });

    e.target.classList.add('active');
});