function sauenSier(){
    let txtSau = document.getElementById("txtSau");
    txtSau.textContent = "BÆHHHHHHHHHHHHHHH!";
    startTidSek = Date.now() / 1000;
    // Gjør knappen aktiv
    btnTrykk.disabled = false;
}

function registrerTid() {
    sluttTidSek = Date.now() / 1000;
    let tid = sluttTidSek - startTidSek;
    document.getElementById("txtUt").textContent = "Din reaksjonstid: " + tid + " sekunder";
    txtSau.textContent = "";
    btnTrykk.disabled = true;
    // Start ny runde
    tilfeldigTid = (Math.random()*3 + 2)  * 1000;
    setTimeout(sauenSier, tilfeldigTid);
}
// TODO: 1. Lagre hver tid i tider-arrayet
// TODO: 1.5. Spill av lyd i stedet for å vise tekst
// TODO: 1.75. Bruk chatgpt, elever og lære til å få kode forklart, slik at du er i stand til å forklare den til andre!
// TODO: 2. Stoppe spillet etter 5 runder
// TODO: 3. Skrive ut alle reaksjonstidene ved hjelp av for-løkke
// TODO: 4. Regne ut og skrive ut gjennomsnittlig reaksjonstid: SUMMEN av tidene delt på 5 (siden det var 5 runder)

let tider = [];
let startTidSek;
let sluttTidSek;
// Fra 2 til 5 sek.
let tilfeldigTid = (Math.random()*3 + 2)  * 1000;

setTimeout(sauenSier, tilfeldigTid);

let btnTrykk = document.getElementById("btnTrykk");
btnTrykk.disabled = true;
btnTrykk.addEventListener("click", registrerTid);


