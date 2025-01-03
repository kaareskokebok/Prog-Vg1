function neste() {
    // Gå til neste bilde i arrayet
    // Ved å øke indeks med 1
    curIndex++;
    if (curIndex === bilder.length) {  // bilder.length er 3
        curIndex = 0;  // start på nytt
    }
    let bildefil = bilder[curIndex];
    let nyBildeURL = bildeMappe + bildefil;
    // Sett ny src til img
    document.getElementById("imgBil").src = nyBildeURL;
}

function forrige() {
    // TODO: Skriv ferdig denne funksjonen. Bruk if-test slik at når
    // curIndex blir mindre enn 0, så skal curIndex settes slik at du fortsetter
    // på slutten
    curIndex--;  // minker curIndex med 1
    if (curIndex < 0) {
        // NB! bilder.length er 3, men største index er 2
        curIndex = bilder.length - 1;  // start fra slutten
    }
    let bildefil = bilder[curIndex];
    let nyBildeURL = bildeMappe + bildefil;
    // Sett ny src til img
    document.getElementById("imgBil").src = nyBildeURL;
}

function spillAv() {
    if (spillesAv) {
        // spilles allerede av, sett på pause
        clearInterval(timer);
        document.querySelector("audio").pause();
        spillesAv = false;
        document.getElementById("btnSpillAv").innerHTML = "Spill av";
    } else {
        // Kjør neste-funksjonen hvert sekund (1000 millisekund)
        timer = setInterval(neste, 1000);
        document.querySelector("audio").play();
        spillesAv = true;
        document.getElementById("btnSpillAv").innerHTML = "Stopp";
    }
}

let spillesAv = false;
let bilder = ["car1.jpg", "car2.jpg", "car3.jpg"];
let bildeMappe = "./images/";
let curIndex = 0;

let timer;

document.getElementById("btnNeste").addEventListener("click", neste);
document.getElementById("btnForrige").addEventListener("click", forrige);
document.getElementById("btnSpillAv").addEventListener("click", spillAv);


