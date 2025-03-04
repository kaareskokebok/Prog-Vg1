let liv = 3;
let poeng = 0;
let deckId = null;
let backURL = "https://deckofcardsapi.com/static/img/back.png";
let ordbok = {
    "HEARTS": "hjerter",
    "SPADES": "spar",
    "DIAMONDS": "ruter",
    "CLUBS": "kløver"
};
let verdiOversetter = {
    "JACK": 11,
    "QUEEN": 12,
    "KING": 13,
    "ACE": 14
};

let currentCard = null;
let nextCard = null;
async function startGame() {
    try {
        // 1. Request a new, shuffled deck
        const deckResponse = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
        const deckData = await deckResponse.json();
        deckId = deckData.deck_id;  // Id til denne kortstokken

        // 2. Display backside of a card
        document.getElementById('currentCard').src = backURL;
        document.getElementById('nextCard').src = backURL;

        // 3. Make guessbuttons inactive
        document.querySelectorAll(".guess-button").forEach(guessbtn => {
            guessbtn.disabled = true;
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

async function nyRunde() {
    try {

        currentCard = nextCard;
        const currentCardURL = currentCard.image;
        // 2. Display backside of a nextcard
        document.getElementById('currentCard').src = currentCardURL;
        document.getElementById('nextCard').src = backURL;
        nextCard = null;

    } catch (error) {
        console.error('Error:', error);
    }
}
async function drawCard() {
    try {
        // 1. Draw one card
        const drawResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const drawData = await drawResponse.json();
        console.log(drawData);
        // 1.5. Save the card
        currentCard = drawData.cards[0];
        // 2. Display that card
        const cardImageURL = drawData.cards[0].image;
        document.getElementById('currentCard').src = cardImageURL;
        document.getElementById('nextCard').src = backURL;

        // 3. Skriv ut verdiene
        writeValue(drawData)

        // 4. Skru på gjett-knappene
        gjettknapperPaa();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function drawNextCard() {
    try {
        // 1. Draw one card
        const drawResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const drawData = await drawResponse.json();
        console.log(drawData);
        // 1.5. Save card
        nextCard = drawData.cards[0];
        // 2. Display that card
        const cardImageURL = drawData.cards[0].image;
        document.getElementById('nextCard').src = cardImageURL;

    } catch (error) {
        console.error('Error:', error);
    }
}

function gjettknapperPaa() {
    document.querySelectorAll(".guess-button").forEach(guessbtn => {
        guessbtn.disabled = false;
    })
    document.getElementById('drawCardBtn').disabled = true;
}

function gjettknapperAv() {
    document.querySelectorAll(".guess-button").forEach(guessbtn => {
        guessbtn.disabled = true;
    });
    document.getElementById('drawCardBtn').disabled = false;
}
function getValue(cardobj) {
    let verdi = cardobj.value;
    if (isNaN(verdi)) {
        verdi = verdiOversetter[verdi];
    }
    return verdi;
}
function writeValue(drawData) {
    let verdi = getValue(drawData.cards[0]);

    const farge = drawData["cards"][0]["suit"];
    const fargeNorsk = ordbok[farge];

    const txt = `Du fikk ${fargeNorsk} ${verdi}. Gjetter du høyere eller lavere?`;
    document.getElementById("txtUt").textContent = txt;
}

async function handleGuess(direction) {
    // Wait for the new card to finish fetching
    await drawNextCard();

    let curValue = getValue(currentCard);
    let nextValue = getValue(nextCard);

    if (direction === "higher" && nextValue > curValue || direction === "lower" && nextValue < curValue) {
        const txt = `Riktig!`;
        document.getElementById("txtUt").textContent = txt;
        poeng++;
    } else {
        const txt = `Feil!`;
        document.getElementById("txtUt").textContent = txt;
        liv--;
    }
    document.getElementById("txtLiv").textContent = `Liv : ${liv}`;
    document.getElementById("txtPoeng").textContent = `Poeng : ${poeng}`;

    gjettknapperAv();

    checkGameOver();
}

function checkGameOver() {
    if(liv === 0 || poeng === 26) {
        document.getElementById('drawCardBtn').disabled = true;
    }
    setTimeout(() => {
        if (liv === 0) {
            document.body.innerHTML = "<h1>GAME OVER! DU TAPTE!</h1>";
        }
        if (poeng === 26) {
            document.body.innerHTML = "<h1>HELT SINNSYKT! DU VANT SPILLET! DU VINNER PRINSESSA OG HALVE KONGERIKET!</h1>";
        }
    }, 2000)

}
// Attach event listener
document.getElementById('drawCardBtn').addEventListener('click', drawCard);
document.getElementById('guessHigherBtn').addEventListener('click', () => handleGuess("higher"));
document.getElementById('guessLowerBtn').addEventListener('click', () => handleGuess("lower"));
// startGame kjøres når nettsiden lastes inn første gang
startGame();
