function tilNorsk() {
    // 1. Les inn engelsk ord
    let eng = document.getElementById("selOrdEng").value;
    // 2. Oversett ved å bruke objektordbok
    let nor = engNor[eng];
    // 3. skriv ut resultatet
    document.getElementById("txtUtNor").textContent = nor;
}

let btnTilNorsk = document.getElementById("btnTilNorsk");
btnTilNorsk.addEventListener("click", tilNorsk);

// Ordbok engelsk til norsk
let engNor = {
    fish : "fisk",
    banana: "banan",
    car : "bil",
    sweater : "genser"
};


// NORSK TIL ENGELSK
function norTilEng(){
    // TODO
     // 1. Les inn norsk ord
   
     // 2. Oversett ved å bruke objektordbok norTilEng
    
     // 3. skriv ut resultatet
     
}
// TODO: 1. Lag norsk til engelsk ordbok med 5 ord: de samme 5
// som du fylte inn i select i html-siden
// 2. Lag event-listener til knappen slik at norTilEng kjøres når den trykkes
// 3. Bruk ordbok til å oversette valgt norsk ord
// 4. gi resultatet i txtUtEng


