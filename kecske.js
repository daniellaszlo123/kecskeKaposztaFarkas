window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

var kepek = [];

var kep1=ID(1);
var kep2=ID(2);
var kep3=ID(3);

function init() {
    ID(1).addEventListener("click", feltolt);
    ID(2).addEventListener("click", feltolt);
    ID(3).addEventListener("click", feltolt);
    ID(1).addEventListener("click", kepStilus1);
    ID(2).addEventListener("click", kepStilus1);
    ID(3).addEventListener("click", kepStilus1);
}

function feltolt() {
    kepek.push(this.src);
    console.log(kepek);
}

function kepStilus1() {
    kep1.style.display="none"
}
