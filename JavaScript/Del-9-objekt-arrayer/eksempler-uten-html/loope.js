const bil = {
    merke:"Saab",
    aar:2012,
    toppfart:190,
    modell:"Super"
};

// Legge til pris på 120000 kr
bil.pris = 120000;
bil["pris"] = 120000;

console.log(bil);

// Loope gjennom nøklene til bil-objektet
for (let key in bil) {
    console.log(key);
}

// Loope verdiene til bil-objektet
for (let key in bil) {
    console.log(bil[key]);
}

// Hente begge deler og lage en tekst
let txt = "Min fete bil\n";
for (let key in bil) {
    txt += `${key} : ${bil[key]}\n`
}
txt += "En skikkelig fet bil...";
console.log(txt);

// Loope et array med bil-objekter
let biler = [
    {merke:"Saab",aar:2012,toppfart:190,modell:"Super"},
    {merke:"Volvo",aar:2015,toppfart:230,modell:"240"},
    {merke:"BMW",aar:2020,toppfart:240,modell:"M8"}
];

// of for å loope gjennom verdiene i et array
for (let bilen of biler) {
    console.log(bilen);
}
// skriv ut bare merke
for (let bilen of biler) {
    console.log(bilen.merke);
}

