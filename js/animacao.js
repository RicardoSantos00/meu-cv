/*animação de Scroll da pagina*/

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var target = document.querySelectorAll('[data-anime]');
var animationClass = 'animate';

function animeScroll() {
    var windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(elementoTela) {
        if ((windowTop) > elementoTela.offsetTop) {
            elementoTela.classList.add(animationClass);
        } else {
            elementoTela.classList.remove(animationClass);
        }
    });

}

animeScroll();

if (target.length)
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 150));


// ----------------------------------- ordenação de listagem -------------------------------------
var html = '';
var lista = [{
        porcentagem: 90,
        nome: 'HTML5'
    },
    {
        porcentagem: 80,
        nome: 'CSS3'
    },
    {
        porcentagem: 70,
        nome: 'GIT'
    },
    {
        porcentagem: 60,
        nome: 'JAVASCRIPT'
    },
    {
        porcentagem: 50,
        nome: 'JAVA'
    },
    {
        porcentagem: 50,
        nome: 'ORACLE'
    },
    {
        porcentagem: 50,
        nome: 'MySQL'
    },
    {
        porcentagem: 50,
        nome: 'SQL SERVER'
    },
    {
        porcentagem: 50,
        nome: 'PHOTOSHOP'
    },
    {
        porcentagem: 30,
        nome: 'POSTMAN'
    }
];

var listaHtml = document.getElementById("myList");
lista.sort((a, b) => b.porcentagem - a.porcentagem);
for (let index = 0; index < lista.length; index++) {
    html = html + ('<li><span class="percent">' + lista[index].porcentagem + '%</span> <span class="upper">•' +
        lista[index].nome + '</span><div class="progress-bar" style="--progress: ' + lista[index].porcentagem + '"></div></li>');
}

document.getElementById("myList").innerHTML = html;

/* Menu Responsivo */

document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

document.querySelector('.menu-principal').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};


document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};