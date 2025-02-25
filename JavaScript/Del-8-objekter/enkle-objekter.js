// Objekter har nøkler (strenger/tekster) og verdier
// Arrayer har indekser (0->) og verdier
let elev = {
    "navn" : "jens",
    "alder" : 18
};
console.log(elev["navn"]); // jens
console.log(elev["alder"]); // 18
// Alternativ måte: med punktum. elev.alder leses
// elev SIN alder
console.log(elev.alder);

// Lag et objekt til en telefon. Nøklene er modellnavn, pris og
// år. Skriv ut modellnavn og pris med console.log, skriv ut år
// ved hjelp av punktum i stedet for ["år"]
// array: let telefon = ["motorola", "nokia", "samsung"]
// curly bracket {}
let telefon = {
    "modellavn": "nokia",
    "pris":3500,
    "år":2021
};

console.log("Telefonens modell:" + telefon["modellavn"]); 
console.log(telefon["pris"] + "kr");
console.log(telefon.år);

