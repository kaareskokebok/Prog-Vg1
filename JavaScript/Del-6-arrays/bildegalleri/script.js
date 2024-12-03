function visForsteBilde(){
    let bildefil = bilder[0];
    let bildeURL = mappe + bildefil;
    // "./images/car1.jpg"
    // Endre src til img
    bilde.src = bildeURL;
}

function neste(){
    curIndex++;  // Øker med 1
    let bildefil = bilder[curIndex];
    let bildeURL = mappe + bildefil;
    
    bilde.src = bildeURL;
}

let bilder = ["car1.jpg", "car2.jpg", "ferrari.jpg", "oldtimer.jpg"];
// current index, begynner på 0, øker med 1 når vi trykker neste
let curIndex = 0;
let mappe = "./images/";
let bilde = document.getElementById("imgBilde");
let btnNeste = document.getElementById("btnNeste");
btnNeste.addEventListener("click", neste);

visForsteBilde();