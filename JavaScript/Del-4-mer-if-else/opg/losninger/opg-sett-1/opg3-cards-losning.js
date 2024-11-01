// Simulate drawing two cards from a deck
let card1 = Math.floor(Math.random() * 13) + 1;
let card2 = Math.floor(Math.random() * 13) + 1;

// TODO: Replace true with the correct logical expressions
console.log("Drawn cards:", card1, card2);
// 11, 12 og 13 er knekt dame og konge (face cards)
if (card1 >= 11 && card2 >= 11) {
    console.log("Both cards are face cards!");
} else if (card1 === card2) {
    console.log("Both cards have the same value!");
} else if (card1 === 1 || card2 === 1) {
    console.log("At least one card is an Ace!");
} else {
    console.log("Cards drawn are:", card1, card2);
}