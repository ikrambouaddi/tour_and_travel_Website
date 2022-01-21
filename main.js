let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let fromBtn = document.querySelector('#logo-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#from-close');
let menu =document.querySelector('#menu-bar');
let navBar =document.querySelector('.navbar');
let videsbtn = document.querySelectorAll('.vid-btn');

window.onscroll = ( ) =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active')
}
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active')
});

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-time');
    searchBar.classList.toggle('active');;
});

fromBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});
videsbtn.forEach( btn =>{
    btn.addEventListener('click',()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
    });
});

// var swiper = new Swiper (".review-slider",{
//     spaceBetween: 20,
//     loop:true,
//     autoplay:{
//         delay:2500, 
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         640: {
//             slidesPerview: 1,
//         },
//         768: {
//             slidesPerview: 2,
//         },
//         1024: {
//             slidesPerview:3,
//         },
//     },
// });

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        991: {
        slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
            },
    },
});
