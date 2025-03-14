function selgBil(){
    // 1. Les inn bilmerke fra input
    let merke = document.getElementById("inpBilmerke").value;
    // 2. Sjekk at bilmerke finnes
    if (finnesBil(merke)) {
        alert("Bilen finnes!");
        // Fjerne, bruk splice
        for(let i=0; i<biler.length;i++) {
            if (merke === biler[i].merke) {
                biler.splice(i, 1);
                break; // Avslutt løkka
            }
        }
    }else{
        alert("Bilen finnes ikke!");
    }
    // 3. Hvis ja, selg bilen og gi tilbakemelding og FJERN bilen fra biler-arrayet
    // 3b. Hvis nei, gi feilmelding
}

// Hjelpefunksjon:
// Returnerer true hvis bilmerke finnes, ellers false
function finnesBil(bilmerke) {
    for (let bil of biler) {
        if (bil.merke === bilmerke) {
            return true;
        }
    }
    // Fant ikke merke
    return false;
}

function visOversikt() {
    // Lager HTML-elementer og putter alt inni
    // bilerContainer
    let bilerContainer = document.getElementById("bilerContainer");

    let htmlInnhold = "<h2>Våre biler</h2>";
    for(let bil of biler) {
        let bildeSrc = bildeMappe + bil.bildeURL;
        htmlInnhold += "<figure>";
        htmlInnhold += `<img src=${bildeSrc} alt=Bilde av ${bil.merke} />`;
        htmlInnhold += `<figcaption>${bil.merke} fra ${bil.aar}. <br> Pris:${bil.pris} kr</figcaption>`
        htmlInnhold += "</figure>"
    }

    // Plasser html inni bilercontainer
    bilerContainer.innerHTML = htmlInnhold;
}

function visNybilContainer() {
    let nybilcont = document.getElementById("nyBilContainer");

    nybilcont.classList.toggle("skjul");
}

function nyBil(event){
    event.preventDefault();
    let nybilcont = document.getElementById("nyBilContainer");

    nybilcont.classList.toggle("skjul");
}


let bildeMappe = "./bilder/";

document.getElementById("btnNyBil").addEventListener("click", visNybilContainer);

document.getElementById("btnOversikt").addEventListener("click", visOversikt);

document.getElementById("btnSelg").addEventListener("click", selgBil);
// Skjema
let nybilSkjema = document.getElementById("formNyBil");
nybilSkjema.addEventListener("submit", nyBil);

let biler = [
    {merke:"Kia",pris:389000,aar:2015,bildeURL:"kia.png"},
    {merke:"Opel",pris:259000,aar:2016,bildeURL:"opel.png"},
    {merke:"Peugeot",pris:489000,aar:2022,bildeURL:"peugeot.jpg"},
];

