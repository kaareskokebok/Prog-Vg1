// Roll the die three times
let roll1 = Math.floor(Math.random() * 6) + 1;
let roll2 = Math.floor(Math.random() * 6) + 1;
let roll3 = Math.floor(Math.random() * 6) + 1;

console.log("Dice rolls:", roll1, roll2, roll3);

if (roll1 === 6 && roll2 === 6 && roll3 === 6) {
    console.log("All rolls are 6!");
} 
else if (roll1 === 6 || roll2 === 6 || roll3 === 6) {
    console.log("At least one roll is a 6!");
} 
// HVA VET VI NÅ? ingen seksere
else {
    console.log("None of the rolls are 6!");
} 