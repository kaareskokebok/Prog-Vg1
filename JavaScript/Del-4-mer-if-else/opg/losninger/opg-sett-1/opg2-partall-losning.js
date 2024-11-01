// Generate two random numbers between 1 and 100
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;

// TODO: Replace true with the correct logical expressions
console.log("Generated numbers:", num1, num2);

if (num1 % 2 === 0 && num2 % 2 === 0) {
    console.log("Both numbers are even!");
} else if (num1 % 5 === 0 && num2 % 5 === 0) {
    console.log("Both numbers are multiples of 5!");
} 
    else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    console.log("Both numbers are odd!");
} else {
    console.log("One number is even and one is odd!");
}  