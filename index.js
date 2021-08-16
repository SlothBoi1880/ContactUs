var fadeMe = document.getElementById('fadethis');

function fadeOutOnScroll(element) {
    if (!element) {
        return;
    }
    
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    
    var opacityVar = 1;
    
    if (scrollTop > distanceToTop) {
        opacityVar = 1 - (scrollTop - distanceToTop) / elementHeight;
    }
    
    if (opacityVar >= 0) {
        element.style.opacity = opacityVar;
    }
}

function scrollHandler() {
    fadeOutOnScroll(fadeMe);
}

window.addEventListener('scroll', scrollHandler);