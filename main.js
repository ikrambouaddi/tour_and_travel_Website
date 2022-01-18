let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let fromBtn = document.querySelector('#logo-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#from-close');
let menu =document.querySelector('#menu-bar');
let navBar =document.querySelector('.navbar')

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
})