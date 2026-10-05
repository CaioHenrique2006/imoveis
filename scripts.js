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

// ANIMAÇÃO DO CARROSSEL // 

const track = document.querySelector('.carousel-track');
const cards = track.querySelectorAll('article');
const botaoAnterior = document.querySelector('.arrow-1');
const botaoProximo = document.querySelector('.arrow-2');

let indiceAtual = 0;

function mostrarImovel(index) {
    indiceAtual = (index + cards.length) % cards.length;
    track.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

botaoAnterior.addEventListener('click', () => {
    mostrarImovel(indiceAtual - 1);
});

botaoProximo.addEventListener('click', () => {
    mostrarImovel(indiceAtual + 1);
})