window.addEventListener('scroll', onScroll2);

function onScroll2() {
    others();
    showBackToTopButtonOnScroll();
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 450) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function others() {
    if(scrollY == 0) {
        document.querySelector("nav").style.background = '#6c62a6';
        document.querySelector(".bar1").style.backgroundColor = '#f0f0f0';
        document.querySelector(".bar2").style.backgroundColor = '#f0f0f0';
        document.querySelector(".bar3").style.backgroundColor = '#f0f0f0';
        document.querySelector(".logo").style.backgroundColor = 'transparent';
        document.querySelector(".menu1").style.color = '#f0f0f0';
        document.querySelector(".menu2").style.color = '#f0f0f0';
        // document.querySelector(".menu3").style.color = '#f0f0f0';
        document.querySelector(".menu4").style.color = '#f0f0f0';
    } else {
        document.querySelector("nav").style.background = 'linear-gradient(to bottom, #a597f2, #ffffff00)';
        document.querySelector(".bar1").style.backgroundColor = '#130111';
        document.querySelector(".bar2").style.backgroundColor = '#130111';
        document.querySelector(".bar3").style.backgroundColor = '#130111';
        document.querySelector(".logo").style.backgroundColor = '#130111';
        document.querySelector(".menu1").style.color = '#130111';
        document.querySelector(".menu2").style.color = '#130111';
        // document.querySelector(".menu3").style.color = '#130111';
        document.querySelector(".menu4").style.color = '#130111';
    }
}

function myFunction(x) {
    document.querySelector(".container").classList.toggle("change");
    openMenu();
}

const open = document.querySelector(".menu");
const nav = document.querySelector(".nav1");
const body = document.querySelector("body");
const list = document.querySelector(".itensMenu");

function openMenu() {
    if(open.style.height == '100vh') {
        open.style.height = '0';
        nav.style.background = 'transparent';
        body.style.overflow = "auto";
        list.style.display = "none";
        document.querySelector(".bar1").style.backgroundColor = '#130111';
        document.querySelector(".bar2").style.backgroundColor = '#130111';
        document.querySelector(".bar3").style.backgroundColor = '#130111';
        document.querySelector(".menu1").style.color = '#130111';
        document.querySelector(".menu2").style.color = '#130111';
        // document.querySelector(".menu3").style.color = '#130111';
        document.querySelector(".menu4").style.color = '#130111';
    } else {
        open.style.height = '100vh';
        nav.style.background = "url('../images/home/back-menu-top.png')";
        body.style.overflow = "hidden";
        setTimeout(() => {
            list.style.display = "flex";
        }, 500);        
        document.querySelector(".bar1").style.backgroundColor = '#c84b64';
        document.querySelector(".bar2").style.backgroundColor = '#c84b64';
        document.querySelector(".bar3").style.backgroundColor = '#c84b64';
        document.querySelector(".menu1").style.color = '#f0f0f0';
        document.querySelector(".menu2").style.color = '#f0f0f0';
        // document.querySelector(".menu3").style.color = '#f0f0f0';
        document.querySelector(".menu4").style.color = '#f0f0f0';
    }
}

function resumoHtml() {
    document.querySelector(".resumoCss").classList.remove('show');
    document.querySelector(".resumoJs").classList.remove('show');
    document.querySelector(".resumoHtml").classList.toggle('show');
    document.querySelector(".resumoReactJS").classList.remove('show');
}

function resumoCss() {
    document.querySelector(".resumoHtml").classList.remove('show');
    document.querySelector(".resumoJs").classList.remove('show');
    document.querySelector(".resumoCss").classList.toggle('show');
    document.querySelector(".resumoReactJS").classList.remove('show');
}

function resumoJs() {
    document.querySelector(".resumoCss").classList.remove('show');
    document.querySelector(".resumoHtml").classList.remove('show');
    document.querySelector(".resumoJs").classList.toggle('show');
    document.querySelector(".resumoReactJS").classList.remove('show');
}

function resumoReactJS() {
    document.querySelector(".resumoCss").classList.remove('show');
    document.querySelector(".resumoHtml").classList.remove('show');
    document.querySelector(".resumoJs").classList.remove('show');
    document.querySelector(".resumoReactJS").classList.toggle('show');
}