document.getElementById('filmTilbakemelding').addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindrer sideoppdatering

    // Hent data fra skjemaet
    let navn = document.getElementById("inpNavn").value;
    let alder = Number(document.getElementById("inpAlder").value);
    let sjanger = document.getElementById("selSjanger").value;
    let vurdering = document.querySelector('input[name="radVurdering"]:checked').value;
    let kommentar = document.getElementById("txtKommentar").value;

    // Lag takkebeskjeden
    let beskjed = `<h3>Takk for din tilbakemelding!</h3>
    <p>Navn: ${navn}</p>
    <p>Alder: ${alder}</p>
    <p>Sjanger: ${sjanger}</p>
    <p>Vurdering: ${vurdering} stjerne(r)</p>
    <p>Kommentar: ${kommentar}</p>`;

    // Sjekk om vurderingen er mindre enn 3 stjerner
    if (Number(vurdering) < 3) {
        beskjed += `<p>Vi beklager at filmen ikke møtte dine forventninger. Hva kunne vært bedre?</p>`;
    }

    // Vis beskjeden på siden
    document.getElementById("txtUt").innerHTML = beskjed;
});
