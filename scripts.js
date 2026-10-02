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

//ANIMAÇÃO DOS CONTEÚDOS ENTRANDO NA TELA//

const secaoServicos = document.querySelector('#servicos');
const cardsServicos = secaoServicos.querySelectorAll(':scope > article');

secaoServicos.classList.add('reveal-ready');

cardsServicos.forEach((card, index) => {
    card.style.setProperty('reveal-delay', `${index * 100}ms`);
})

const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observer.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.5
});

cardsServicos.forEach(card => {
    observador.observe(card);
});