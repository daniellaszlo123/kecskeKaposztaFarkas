/*----------------------------------------------------------------------*/
window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}
/*----------------------------------------------------------------------*/

function init(){
    /*A "Saját név " szöveg helyett jelenjen meg a készítők neve. 
    b.	A szöveget igazítsd középre, a betűméretet állítsd be 20px-re. */
    /*document.querySelectorAll*/$("footer p")[0].innerHTML="Molnár Szabrina és Dániel László Dániel";
    $("footer p")[0].style.textAlign="center";
    $("footer p")[0].style.fontSize="20px";

    /*a.	a kép elérési útját (src) mentsd el egy tömbbe (tomb.push(this.src))
    b.	írd ki a tömb tartalmát a konzolra!*/
    var kepTomb = document.querySelectorAll("#bal img");
    for (let index = 0; index < kepTomb.length; index++) {
        kepTomb[index].addEventListener("click", kepEleresiUt);
    }

    /*1.	Ha a  képek fölé mozgatva az egeret a képen jelenjen meg  a kiemel stílus!
    2.	Ha a képekről elviszem az egeret, akkor a stílus tűnjön el róla. */
    for (let index = 0; index < kepTomb.length; index++) {
        kepTomb[index].addEventListener("mouseover", stilusFel);
        kepTomb[index].addEventListener("mouseout", stilusLe);
    }
}

var tomb=[]; //így globális változó
function kepEleresiUt(event/*ha áthúzza, ide kell beírni*/){
    tomb.push(event.target.alt); /*le kéri az adott kép(az eseménykiváltó elem) src-jét vagy alt attributuma*/
    console.log(tomb);

    /*7.A képre kattintva a képet tüntessük el a bal oldalról (display:none; és jelenítsük meg a
    csónak közepén. Ehhez helyezd el az article tagben található div tárolóba a képet!*/
    event.target.style.display = "none";
    //var kep="<img src='"+event.target.src+"'alt='"+event.target.alt+"'/>";
    var kep= `<img src='${event.target.src}' alt='${event.target.alt}'/>`;
    console.log(kep);
    /*document.getElementById*/ID("csonak").innerHTML/*több is megjelenhet*/+=kep;

    /*8.A csónakban nem lehetnek együtt a „veszélyes elemek”! Egy alert ablakban írd ki, ha helytelen volt a választás!*/
    if(tomb.indexOf("kecske")>=0 && tomb.indexOf("farkas")>=0){
        alert("Nem jó választás!")
    }else{
        /*7.A képre kattintva a képet tüntessük el a bal oldalról (display:none; és jelenítsük meg a
    csónak közepén. Ehhez helyezd el az article tagben található div tárolóba a képet!*/
        event.target.style.display = "none";
        var kep= `<img src='${event.target.src}' alt='${event.target.alt}'/>`;
        console.log(kep);
        ID("csonak").innerHTML+=kep;
    }

    //ha már egyszer rákattintottunk, akkor többször ne lehessen rá kattintani
    event.target.removeEventListener("click", kepEleresiUt);
}

function stilusFel(event){/*ráteszi a class elemet a kiváltó elemre*/
    event.target.className/*a class névre hivatkozik*/="kiemel";
}
function stilusLe(event){
    event.target.className="";
}

/*
var kepek = [];

var kep1=ID(1);
var kep2=ID(2);
var kep3=ID(3);

function init() {
    for (let index = 1; index < 4; index++) {
        ID(index).addEventListener("click", feltolt);
        ID(index).addEventListener("click", kepStilus);
    }
}

function feltolt() {
    kepek.push(this.src);
    console.log(kepek);
}

function kepStilus() {
    event.target.style.display="none";
    event.target.src;
    console.log(event.target.src)
    document.getElementById("kozepKep").innerHTML+="<img src="+event.target.src+">";
}
*/
