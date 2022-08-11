window.addEventListener('scroll', onScroll);

function onScroll() {
    cor();
    showBackToTopButtonOnScroll();
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 450) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
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
        document.querySelector(".menu3").style.color = '#130111';
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
        document.querySelector(".menu3").style.color = '#f0f0f0';
        document.querySelector(".menu4").style.color = '#f0f0f0';
    }
}

// --------------------------------

function cor() {
    if(scrollY > 600) {
        document.querySelector(".bar1").style.backgroundColor = '#130111';
        document.querySelector(".bar2").style.backgroundColor = '#130111';
        document.querySelector(".bar3").style.backgroundColor = '#130111';
        document.querySelector(".logo").style.backgroundColor = '#130111';
        document.querySelector("nav").style.backgroundImage = 'linear-gradient(to bottom, #a597f2, #ffffff00)';
        document.querySelector(".menu1").style.color = '#130111';
        document.querySelector(".menu2").style.color = '#130111';
        document.querySelector(".menu3").style.color = '#130111';
        document.querySelector(".menu4").style.color = '#130111';
    } else {
        document.querySelector(".bar1").style.backgroundColor = '#f0f0f0';
        document.querySelector(".bar2").style.backgroundColor = '#f0f0f0';
        document.querySelector(".bar3").style.backgroundColor = '#f0f0f0';
        document.querySelector(".logo").style.backgroundColor = 'transparent';
        document.querySelector("nav").style.backgroundImage = 'none';
        document.querySelector(".menu1").style.color = '#f0f0f0';
        document.querySelector(".menu2").style.color = '#f0f0f0';
        document.querySelector(".menu3").style.color = '#f0f0f0';
        document.querySelector(".menu4").style.color = '#f0f0f0';
    }
}


// --------------------------------