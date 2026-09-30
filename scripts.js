const abrirMenu = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.menu');
const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.classList.remove('aberto');
    })
})

abrirMenu.addEventListener('click', () => {
    sideBar.classList.toggle('aberto');
})