// Kaster med 2 terning, og sjekker om det er
// 2 seksere, begge gir like øyne, eller nøyaktig 1 sekser
// Math.random() tilfeldig mellom 0 og 1
// Math.floor runder ned til nærmeste heltall
let kast1 = Math.floor(Math.random() * 6) + 1;
let kast2 = Math.floor(Math.random() * 6) + 1;

// Sjekk om begge gir seks.
// kast1 gir 6 OG kast2 gir 6
// TODO: BYTT UT true med korrekte logiske uttrykk
// TODO: Legg til console.log alle steder
console.log(kast1, kast2)
if (true) {
    console.log("To seksere!");
} // To like: kast1 er lik kast2 (husk ==, ikke =)
else if (true) {
    // Utskrift her
}  // en sekser: kast1 er 6 ELLER kast2 er 6
else if (true) {

} else{
    // TODO: skriv ut hva du fikk
}