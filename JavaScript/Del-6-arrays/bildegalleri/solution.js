function visForsteBilde(){
    let bildefil = bilder[0];
    let bildeURL = mappe + bildefil;
    // "./images/car1.jpg"
    // Endre src til img
    bilde.src = bildeURL;
}

function neste(){
    curIndex++;  // Øker med 1
    // Start på begynnelsen hvis curIndex er 4
    if( curIndex > 3) {
        curIndex = 0;
    }
    let bildefil = bilder[curIndex];
    let bildeURL = mappe + bildefil;
    
    bilde.src = bildeURL;
}

function forrige(){
    curIndex--;  // Minker med 1
    // Start på slutten hvis curIndex er -1 
    if( curIndex < 0) {
        curIndex = 3;
    }
    let bildefil = bilder[curIndex];
    let bildeURL = mappe + bildefil;
    
    bilde.src = bildeURL;
}

function autoplay() {
    let musicElement = document.getElementById("lyd");
    musicElement.play();

    setInterval(neste, 1000);
}
let bilder = ["car1.jpg", "car2.jpg", "ferrari.jpg", "oldtimer.jpg"];
// current index, begynner på 0, øker med 1 når vi trykker neste
let curIndex = 0;
let mappe = "./images/";
let bilde = document.getElementById("imgBilde");
let btnNeste = document.getElementById("btnNeste");
btnNeste.addEventListener("click", neste);

let btnForrige = document.getElementById("btnForrige");
btnForrige.addEventListener("click", forrige);


let btnAutoPlay = document.getElementById("btnAutoPlay");
btnAutoPlay.addEventListener("click", autoplay);

visForsteBilde();