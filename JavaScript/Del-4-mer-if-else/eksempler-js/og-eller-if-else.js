// Logiske uttrykk gir enten true eller false
console.log(10 < 10);  // false
console.log(10 == 10);  // true
console.log(10 <= 10);  // true
// Eks. 1 mellom to tall
let tall = 10;
// Mellom 1 og 10: 
// tall større enn 1 OG tall mindre enn 10
if (tall > 1 && tall < 10) {
    console.log("Tallet er mellom 1 og 10");
} else{
    console.log("Tallet er IKKE mellom 1 og 10");
}

// Brukernavn og passord
let bruker = "jens";
let passord = "jens123";

// Hvis brukernavn er jens OG passord er jens123
if (bruker == "jens" && passord == "jens123"){
    console.log("Du er logget inn");
} else{
    console.log("Feil brukernavn/passord");
}

// Eksempel med ELLER.
// For å kjøre en karusell  må du enten være minst 13 år, eller
// over 148 cm høy
let hoyde = 140;
let alder = 15;
// alder minst 13 ELLER (||) hoyde større enn 148
if(alder >= 13 || hoyde > 148) {
    console.log("Du kan kjøre karusellen");
} else{
    console.log("Du kan ikke kjøre karusellen");
}

// Fleip: 
let erKjekk = false;
let erRik = true;

// Du har draget hvis du enten er kjekk eller er rik
if ( erKjekk || erRik ) {
    console.log("Du har draget!")
} else {
    console.log("Du har ikke greia")
}
