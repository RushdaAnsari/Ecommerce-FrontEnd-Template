const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const searchbar = document.getElementById('searchbar');
const searchbutton = document.getElementById('searchbutton');


if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

// if (searchbutton) {
//     searchbutton.addEventListener('click', () =>{
//         searchbar.classList.add('active');
//     })
// }

