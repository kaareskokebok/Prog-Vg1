let klasse = {
    navn: "1imb",
    elever: ["ali","jens","adrianas","sara"],
    lærer: {
        navn:"per",
        fag:"matte",
        alder:65
    }
};
console.log(klasse["navn"]);
console.log(klasse["elever"]); // [ 'ali', 'jens', 'adrianas', 'sara']
console.log(klasse["elever"][0]);  // ali
console.log(klasse["elever"][3]); // sara
// Oppgave, hent ut matte
console.log(klasse["lærer"]["fag"]);