const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelectorAll('.navbar_menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});