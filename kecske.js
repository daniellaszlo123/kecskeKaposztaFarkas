window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

var kepek = [];

var kep1=ID(1);
var kep2=ID(2);
var kep3=ID(3);

function init() {

    for (let index = 1; index < 3; index++) {
        ID(index).addEventListener("click", feltolt);
        ID(index).addEventListener("click", kepStilus);
    }

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

function kepStilus() {
    event.target.style.display="none";
    event.target.src;
    console.log(event.target.src)
    
}

function kepStilus1() {
    kep1.style.display="none"
}
