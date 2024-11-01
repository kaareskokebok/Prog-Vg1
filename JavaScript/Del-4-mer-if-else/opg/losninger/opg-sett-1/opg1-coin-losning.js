// Simulate flipping two coins
// Math.random() gives a random number between 0 and 1
// We'll consider 0 <= x < 0.5 as "Heads", and 0.5 <= x < 1 as "Tails"
let flip1 = Math.random() < 0.5 ? "Heads" : "Tails";
let flip2 = Math.random() < 0.5 ? "Heads" : "Tails";

// TODO: Replace true with the correct logical expressions
console.log("Flip results:", flip1, flip2);

if (flip1 == "Heads" && flip2 == "Heads") {
    console.log("Both coins are Heads!");
} else if (flip1 == "Tails" && flip2 == "Tails") {
    console.log("Both coins are Tails!");
} else if (flip1 == "Heads" || flip2 == "Heads") {
    console.log("Exactly one coin is Heads!");
} else {
    console.log("Unexpected result.");
}