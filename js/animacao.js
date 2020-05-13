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


const lista = document.querySelectorAll(".percent");
lista = new Array(".percent");
lista.sort();