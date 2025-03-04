// Melk: kjølevare, 25 kr, varenavn er melk
// ARRAY
let vareArray = ["kjølevare", 25, "melk"];
vareArray[0];  // kjølevare
vareArray[2];  // melk

// OBJEKT
let vare = {
    varetype : "kjølevare",
    varenavn : "melk",
    pris : 25
};
vare.varetype;  // kjølevare
vare["varetype"];  // kjølevare
vare.pris;  // 25

let vare2 = {
    varetype : "tørrvare",
    varenavn : "knekkebrød",
    pris : 35
};

// Brukeren kjøper 3 stk vare, og 4 stk vare2
let summ = 3*vare.pris + 4*vare2.pris;
console.log(summ);

