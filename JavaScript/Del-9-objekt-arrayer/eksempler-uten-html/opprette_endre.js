// Array
// Opprette
let ansatte = ["jens", "per", "sara"];
// per får sparken, blir erstattet av ali
ansatte[1] = "ali";

// Objekt
// Opprette
let ansatteObjekt = {
    navn: "per",
    lonn: 650000
};
// Endre per til ali, og lønn til 700 000
ansatteObjekt["navn"] = "ali";
ansatteObjekt.lonn = 700000;

console.log(ansatteObjekt);

// ***************** OBJEKT-ARRAY *****************
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
// Endringer
// Endre pers lønn til 589 000
console.log(ansatteArray[1]);  // { navn: 'per', lonn: '550000' }
console.log(ansatteArray[1].lonn);  // 550000
console.log(ansatteArray[1]["lonn"]);  // 550000

ansatteArray[1].lonn = 589000;
// sara går opp i lønn med 5000 kr, += betyr øke
ansatteArray[2].lonn += 5000;

// Oppgaver
// 1. endre pers navn til jens
// 2. jens sin lønn skal være 860 000 kr
// 3. alis lønn øker med 65000 (BRUK +=)
// 4. saras lønn minker med 38000 ( BRUK -= )
// 5. Bruk console.log for å skrive ut alt i ansatteArray
