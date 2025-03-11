let ansatteArray = [
    {
        navn:"ali",
        lonn:700000
    },
    {
        navn:"per",
        lonn:550000
    },
    {
        navn:"sara",
        lonn:680000
    },
];

// Slett sara-objektet
// 2 er saras index, 1 betyr slett 1 objekt
ansatteArray.splice(2, 1);
console.log(ansatteArray);

// Legg til arne med 350 000 kr
ansatteArray.push({navn:"arne",lonn:350000});
// Legg til knut med 980 000 kr
ansatteArray.push({navn:"knut",lonn:980000});

console.log(ansatteArray);

// Slett per og arne (index 1 og 2)
ansatteArray.splice(1, 2);  // slett 2 stykker, dvs. index 1 og 2

console.log("ETTER sletting...")
console.log(ansatteArray);


// Oppgave lag et produkt-array med 5 produkter
// TODO: gjør ferdig produkter, legg til 3 til.
let produkter = [
    {navn:"Laptop", pris:8999},
    {navn:"Skjerm", pris:2499}
];

// Oppgaver: 
// Legg til produktet grafikkort med pris 6500
// Legg til produktet trådløs mus med pris 698
// Fjern produktet Skjerm
// Endre pris på grafikkortet til 9800
// Reduser prisen på trådløs mus med 150 kr. (BRUK -=)
// Skriv ut alle produktene