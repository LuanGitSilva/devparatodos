let none = document.querySelector(".none");

const body = document.querySelector("body");

var main = document.querySelector("main");

function mostrar() {
    document.querySelector(".function").style.display = "none";
    none.style.display = "block";
    body.style.backgroundColor = "black";
    main.style.backgroundColor = "gray";
}

function esconder() {
    document.querySelector(".function").style.display = "block";
    none.style.display = "none";
    body.style.backgroundColor = "rgb(235, 232, 232)";
    main.style.backgroundColor = "rgb(84, 187, 120)";
}