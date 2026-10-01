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

document.addEventListener('click', (event) => {
    const clicouNoMenu = sideBar.contains(event.target);
    const clicouNoIcone = abrirMenu.contains(event.target);

    if (!clicouNoMenu && !clicouNoIcone) {
        sideBar.classList.remove('aberto');
    }
})