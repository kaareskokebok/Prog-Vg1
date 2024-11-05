// Simulate the Fortune Teller
console.log("Welcome to the Fortune Teller!");

// Generate a random number between 0 and 1
let randomNumber = Math.random();
console.log(randomNumber);
// TODO: Determine the outcome based on randomNumber
// Assign boolean variables isGreatDay, isAverageDay
// Ensure each outcome has approximately a 33% chance

// Example:
let isGreatDay = randomNumber < 0.33;
console.log(isGreatDay);
// mellom 0.33 og 0.66
let isAverageDay = randomNumber >= 0.33 && randomNumber < 0.66;
console.log(isAverageDay)
// Variable to store the message
let message = "";

// Determine the type of day and set the message
if (isGreatDay) {
    message = "Today is going to be a great day!";
} 
else if (isAverageDay) {
    message = "Today will be an average day.";
} 
else {
    message = "Today might not be so good.";
}

console.log(message);