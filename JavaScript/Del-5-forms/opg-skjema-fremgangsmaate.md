**Lag ditt eget skjema: Filmtilbakemelding**

Du skal lage et skjema der brukere kan gi tilbakemelding på en film de nettopp har sett. Skjemaet skal inneholde:

- **Navn** (input type="text")
- **Alder** (input type="number")
- **Velg filmens sjanger** (select)
    - Alternativer: Action, Komedie, Drama, Skrekk, Animasjon
- **Vurder filmen** (radio buttons)
    - Alternativer: 1 stjerne, 2 stjerner, 3 stjerner, 4 stjerner, 5 stjerner
- **Kommentar** (textarea)
- **Send inn** (submit-knapp)

**Når brukeren sender inn skjemaet, skal du i JavaScript:**

- Hente dataene fra skjemaet
- Vise en takkebeskjed som inkluderer:
    - Brukerens navn og alder.
    - Den valgte sjangeren.
    - Vurderingen gitt (antall stjerner).
    - Kommentaren brukeren har skrevet.
- Hvis brukeren har gitt mindre enn 3 stjerner, legg til en melding som spør hva som kunne vært bedre.


## Gjør slik:
**Steg 1: Opprett HTML-strukturen**

- Start med å lage en HTML-fil og inkluder de grunnleggende taggene som `<!DOCTYPE html>`, `<html>`, `<head>`, og `<body>`.

**Steg 2: Lag skjemaet i `<body>`**

- Inne i `<body>`, opprett et `<form>`-element med et unikt id-attributt, for eksempel `id="filmTilbakemelding"`.

**Steg 3: Legg til input-felter for navn og alder**

- Inne i skjemaet, legg til:

  ```html
  <label for="inpNavn">Navn:</label>
  <input type="text" id="inpNavn">
  <br>
  <label for="inpAlder">Alder:</label>
  <input type="number" id="inpAlder">
  ```

**Steg 4: Legg til en `<select>` for filmens sjanger**

- Legg til en dropdown-meny for sjanger:

  ```html
  <label for="selSjanger">Velg filmens sjanger:</label>
  <select id="selSjanger">
      <option value="Action">Action</option>
      <option value="Komedie">Komedie</option>
      <option value="Drama">Drama</option>
      <option value="Skrekk">Skrekk</option>
      <option value="Animasjon">Animasjon</option>
  </select>
  ```

**Steg 5: Legg til radio-knapper for vurdering**

- Opprett radio-knapper for vurdering:

  ```html
  <p>Vurder filmen:</p>
  <input type="radio" name="radVurdering" value="1" id="stjerne1">
  <label for="stjerne1">1 stjerne</label>
  <br>
  <input type="radio" name="radVurdering" value="2" id="stjerne2">
  <label for="stjerne2">2 stjerner</label>
  <br>
  <input type="radio" name="radVurdering" value="3" id="stjerne3">
  <label for="stjerne3">3 stjerner</label>
  <br>
  <input type="radio" name="radVurdering" value="4" id="stjerne4">
  <label for="stjerne4">4 stjerner</label>
  <br>
  <input type="radio" name="radVurdering" value="5" id="stjerne5">
  <label for="stjerne5">5 stjerner</label>
  ```

**Steg 6: Legg til en textarea for kommentarer**

- Legg til et felt for kommentarer:

  ```html
  <label for="txtKommentar">Kommentar:</label>
  <br>
  <textarea id="txtKommentar" rows="4" cols="50"></textarea>
  ```

**Steg 7: Legg til en submit-knapp**

- Legg til en knapp for å sende inn skjemaet:

  ```html
  <br>
  <input type="submit" value="Send inn">
  ```

**Steg 8: Skriv JavaScript-koden**

- Legg til en `<script>`-tag i `<head>` eller koble til en ekstern JavaScript-fil.
- Inne i JavaScript-filen:

  ```javascript
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
  ```

- Legg til et `<p id="txtUt"></p>` i HTML der beskjeden skal vises.

Dette vil gi deg et fungerende skjema som samler inn brukerens tilbakemelding og viser en tilpasset beskjed når skjemaet sendes inn.