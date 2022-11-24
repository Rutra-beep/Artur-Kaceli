let btn = document.querySelector('.nav-menu')
let navbar = document.querySelector('.mobile-nav')
let mobile_socials = document.querySelectorAll('.mobile-social')
let mobile_links = document.querySelectorAll('.mobile-links')

btn.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})

for (var i = 0; i < mobile_socials.length;i++){
    mobile_socials.addEventListener('click', ()=>{
        navbar.classList.toggle('active');
    })
}
