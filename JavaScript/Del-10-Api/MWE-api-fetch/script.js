// Eksempel på et enkelt API-kall mot JSONPlaceholder
// Denne nett-tjenesten returnerer testdata i JSON-format
const apiUrl = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';

// Funksjon for å hente data (bruker async/await for lesbarhet)
async function fetchData() {
    try {
        // Henter data fra API
        const response = await fetch(apiUrl);

        // Konverterer til JSON
        const data = await response.json();

        // Viser data i nettleseren
        document.getElementById('result').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Noe gikk galt ved henting av data:', error);
        document.getElementById('result').innerText = 'Det oppsto en feil ved henting av data.';
    }
}

// Kall funksjonen umiddelbart når siden lastes
fetchData();