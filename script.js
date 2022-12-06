let btn = document.querySelector('.nav-menu')
let navbar = document.querySelector('.mobile-nav')
let mobile_socials = document.querySelectorAll('.mobile-social')
mobile_links = document.querySelectorAll('.mobile-link')

console.log(mobile_links);
btn.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})

for (var i = 0, len = mobile_links.length; i < len; i++) {
    mobile_links[i].addEventListener('click', ()=>{
       navbar.classList.toggle('active');
    })
}
for (var i = 0, len = mobile_socials.length; i < len; i++) {
    mobile_socials[i].addEventListener('click', ()=>{
       navbar.classList.toggle('active')
    })
}
