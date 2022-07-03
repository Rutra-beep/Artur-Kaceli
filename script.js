let btn = document.querySelector('.nav-menu')
let navbar = document.querySelector('.mobile-nav')

btn.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})