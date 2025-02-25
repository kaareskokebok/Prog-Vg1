let deckId = null;
let backURL = "https://deckofcardsapi.com/static/img/back.png";
let ordbok = {
    "HEARTS":"hjerter",
    "SPADES":"spar",
    "DIAMONDS":"ruter",
    "CLUBS":"kløver"
};
async function startGame() {
    try {
        // 1. Request a new, shuffled deck
        const deckResponse = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
        const deckData = await deckResponse.json();
        deckId = deckData.deck_id;  // Id til denne kortstokken

        // 2. Display backside of a card
        document.getElementById('currentCard').src = backURL;
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
        // 2. Display that card
        const cardImageURL = drawData.cards[0].image;
        document.getElementById('currentCard').src = cardImageURL;

        const verdi = drawData["cards"][0]["value"];
        const farge = drawData["cards"][0]["suit"];
        const fargeNorsk = ordbok[farge];

        const txt = `Du fikk ${fargeNorsk} ${verdi}`;
        document.getElementById("txtUt").textContent = txt;

        // TODO 1: Hvis du fikk mindre enn 10, skriv ut "mindre enn 10".
        if (verdi) {
            // Fullfør
        }
        // TODO 2: Hvis du fikk Ess (ACE), skriv ut hurra!
        // TODO 3: Hvis du fikk knekt, dronning, konge eller ess, skriv ut "bra kort!"
    } catch (error) {
        console.error('Error:', error);
    }
}
// Attach event listener
document.getElementById('drawCardBtn').addEventListener('click', drawCard);

// startGame kjøres når nettsiden lastes inn første gang
startGame();
drawData["cards"][0]["value"];