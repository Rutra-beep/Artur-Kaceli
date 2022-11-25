let btn = document.querySelector('.nav-menu')
let navbar = document.querySelector('.mobile-nav')

btn.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})

for (var i = 0; i < mobile_socials.length;i++){
    mobile_socials.addEventListener('click', ()=>{
        navbar.classList.toggle('active');
    })
}
for (var i = 0; i < mobile_links.length;i++){
    mobile_links.addEventListener('click', ()=>{
        navbar.classList.toggle('active');
    })
}
