Sure! Here's the complete set of **5 exercises** updated to avoid arrays, with the first **3 exercises** including template code where you can fill in. The exercises focus on logical expressions and `if-else` statements in JavaScript.

---

### **Exercise 1: Coin Flip Simulation**

**Description:**

Simulate flipping two coins and check for the following conditions:

- Both coins land on **Heads**.
- Both coins land on **Tails**.
- Exactly one coin lands on **Heads**.
- Else, print the result of both coin flips.

**Template Code:**

```javascript
// Simulate flipping two coins
// Math.random() gives a random number between 0 and 1
// We'll consider 0 <= x < 0.5 as "Heads", and 0.5 <= x < 1 as "Tails"
let flip1 = Math.random() < 0.5 ? "Heads" : "Tails";
let flip2 = Math.random() < 0.5 ? "Heads" : "Tails";

// TODO: Replace true with the correct logical expressions
console.log("Flip results:", flip1, flip2);

if (true) {
    console.log("Both coins are Heads!");
} else if (true) {
    console.log("Both coins are Tails!");
} else if (true) {
    console.log("Exactly one coin is Heads!");
} else {
    console.log("Unexpected result.");
}
```

---

### **Exercise 2: Random Number Properties**

**Description:**

Generate two random numbers between **1 and 100** and check for the following conditions:

- Both numbers are **even**.
- Both numbers are **odd**.
- One number is **even** and the other is **odd**.
- Both numbers are **multiples of 5**.
- Else, print the numbers.

**Template Code:**

```javascript
// Generate two random numbers between 1 and 100
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;

// TODO: Replace true with the correct logical expressions
console.log("Generated numbers:", num1, num2);

if (true) {
    console.log("Both numbers are even!");
} else if (true) {
    console.log("Both numbers are odd!");
} else if (true) {
    console.log("One number is even and one is odd!");
} else if (true) {
    console.log("Both numbers are multiples of 5!");
} else {
    console.log("Numbers are:", num1, num2);
}
```

**Hint on Checking Even or Odd Numbers:**

To check if a number is **even** or **odd**, use the modulus operator `%`, which gives the remainder of division.

- **Even Number:** A number is even if it is divisible by 2 (i.e., the remainder is 0).

    ```javascript
    if (number % 2 === 0) {
        // number is even
    }
    ```

- **Odd Number:** A number is odd if it is not divisible by 2 (i.e., the remainder is not 0).

    ```javascript
    if (number % 2 !== 0) {
        // number is odd
    }
    ```

To check if a number is a **multiple of 5**:

```javascript
if (number % 5 === 0) {
    // number is a multiple of 5
}
```

---

### **Exercise 3: Card Drawing Simulation**

**Description:**

Simulate drawing two cards from a deck (numbers between **1 and 13**, where **11=Jack**, **12=Queen**, **13=King**, and **1=Ace**). Check for the following conditions:

- Both cards are **face cards** (Jack, Queen, King).
- Both cards have the **same value**.
- At least one card is an **Ace** (value of 1).
- Else, print the card values.

**Template Code:**

```javascript
// Simulate drawing two cards from a deck
let card1 = Math.floor(Math.random() * 13) + 1;
let card2 = Math.floor(Math.random() * 13) + 1;

// TODO: Replace true with the correct logical expressions
console.log("Drawn cards:", card1, card2);

if (true) {
    console.log("Both cards are face cards!");
} else if (true) {
    console.log("Both cards have the same value!");
} else if (true) {
    console.log("At least one card is an Ace!");
} else {
    console.log("Cards drawn are:", card1, card2);
}
```

---

### **Exercise 4: Fortune Teller Simulation**

**Description:**

Create a program that simulates a **Fortune Teller**. The program should:

- Randomly decide whether the user's day will be **"great"**, **"average"**, or **"not so good"**.
- Use **boolean variables** to determine the outcome.
- Use **strings** to display the message.
- Incorporate **randomness** to decide the outcome, with approximately a **33% chance** for each possible result.

**Instructions:**

- Use `Math.random()` to generate randomness.
- Assign boolean variables based on the random number to represent each possible outcome.
- Use `if-else` statements to set the message according to the outcome.
- Think about how to divide the range of `Math.random()` to achieve a 33% chance for each outcome.

**Template Code:**

```javascript
// Simulate the Fortune Teller
console.log("Welcome to the Fortune Teller!");

// Generate a random number between 0 and 1
let randomNumber = Math.random();

// TODO: Determine the outcome based on randomNumber
// Assign boolean variables isGreatDay, isAverageDay
// Ensure each outcome has approximately a 33% chance

// Example:
// let isGreatDay = /* condition based on randomNumber */;
// let isAverageDay = /* another condition */;

// Variable to store the message
let message = "";

// Determine the type of day and set the message
if (/* condition for a great day */) {
    message = "Today is going to be a great day!";
} else if (/* condition for an average day */) {
    message = "Today will be an average day.";
} else {
    message = "Today might not be so good.";
}

console.log(message);
```

**Hints:**

- **Using Randomness to Achieve 33% Chance:**

  - `Math.random()` generates a number between **0** (inclusive) and **1** (exclusive).
  - To create a **33% chance** for each outcome, divide the range **0 to 1** into three equal parts:
    - **Great Day:** `randomNumber` less than **0.33**.
    - **Average Day:** `randomNumber` greater than or equal to **0.33** and less than **0.66**.
    - **Not So Good Day:** `randomNumber` greater than or equal to **0.66**.

**Tips:**

- **Testing Your Program:**

  - Run your program multiple times to ensure all three outcomes occur roughly equally.
  - Adjust your conditions if the probabilities seem off.

- **Understanding Boolean Logic:**

  - Remember that boolean variables (`true` or `false`) can be used directly in `if` statements.
  - Ensure your conditions do not overlap so that only one outcome is `true` at a time.

---

### **Exercise 5: Dice Roll Analysis**

**Description:**

Simulate rolling a die **three times** and check for the following conditions:

- **Any** of the rolls is a **6**.
- **All** the rolls are **6**.
- **None** of the rolls is a **6**.
- Else, print the roll results.

**Instructions:**

- Use `Math.random()` to simulate the die rolls.
- Use logical expressions to check the conditions.

**Sample Code:**

```javascript
// Roll the die three times
let roll1 = Math.floor(Math.random() * 6) + 1;
let roll2 = Math.floor(Math.random() * 6) + 1;
let roll3 = Math.floor(Math.random() * 6) + 1;

console.log("Dice rolls:", roll1, roll2, roll3);

if (/* condition for all rolls being 6 */) {
    console.log("All rolls are 6!");
} else if (/* condition for any roll being 6 */) {
    console.log("At least one roll is a 6!");
} else if (/* condition for none being 6 */) {
    console.log("None of the rolls are 6!");
} else {
    console.log("Roll results are:", roll1, roll2, roll3);
}
```

---

**Notes to Students:**

- For the first three exercises, focus on replacing the `true` placeholders with the correct logical expressions using operators like `&&` (AND), `||` (OR), and `!` (NOT).
- Make sure to use comparison operators such as `===`, `!==`, `<`, `>`, etc., where appropriate.
- Remember, you can check for multiple conditions using logical operators.

**Happy Coding!**
