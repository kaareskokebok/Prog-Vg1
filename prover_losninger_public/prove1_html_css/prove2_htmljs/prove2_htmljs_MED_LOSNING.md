# Prøve i HTML og JavaScript

## Del 1: Forklar koden eller finn feilen

---

**Oppgave 1:**

Hva vil følgende HTML-kode vise i nettleseren? Svar ved å tegne nettsiden slik du tror den vil se ut.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Min Første Side</title>
</head>
<body>
    <h1>Hei Verden!</h1>
    <p>Dette er en enkel nettside.</p>
    <hr>
    <ol>
        <li>Hei</li>
        <li>Morna</li>
    </ol>
</body>
</html>
```

---

**Løsningsforslag til Oppgave 1:**

Denne HTML-koden vil vise en nettside med følgende elementer:

1. **En hovedoverskrift**: "Hei Verden!" (`<h1>Hei Verden!</h1>`)
2. **Et avsnitt**: "Dette er en enkel nettside." (`<p>Dette er en enkel nettside.</p>`)
3. **En horisontal linje**: `<hr>`
4. **En nummerert liste**:
   - "Hei"
   - "Morna"

Nettsiden vil se omtrent slik ut:

---

**Hei Verden!**

Dette er en enkel nettside.

---

1. Hei
2. Morna

---

---

**Oppgave 2:**

Finn feilen i følgende JavaScript-kode og foreslå en løsning.

```javascript
var alder = 20;
if (alder > 18) {
    console.log("Du er myndig");
} else {
    console.log("Du er ikke myndig");
```

---

**Løsningsforslag til Oppgave 2:**

Feilen i koden er at den mangler en avsluttende klammeparentes `}` for `else`-blokken. Dette vil føre til en syntaksfeil.

**Rettet kode:**

```javascript
var alder = 20;
if (alder > 18) {
    console.log("Du er myndig");
} else {
    console.log("Du er ikke myndig");
}
```

---

---

**Oppgave 3:**

Hva er verdien av variabelen `sum` etter at denne koden er kjørt?

```javascript
var a = 10;
var b = "20";
var sum = a + b;
```

---

**Løsningsforslag til Oppgave 3:**

Variabelen `a` er et tall (`Number`) med verdien `10`, og variabelen `b` er en tekststreng (`String`) med verdien `"20"`. Når vi bruker plussoperatoren `+` mellom et tall og en streng, vil JavaScript konvertere tallet til en streng og utføre en sammenkobling (konkatenasjon).

Derfor blir:

```javascript
sum = "1020";
```

Variabelen `sum` er en streng med verdien `"1020"`.

---

---

**Oppgave 4:**

Forklar hva som skjer når brukeren klikker på knappen i denne koden.

HTML:

```html
<button id="visMelding">Klikk her</button>
<p id="melding"></p>
```

JavaScript:

```javascript
document.getElementById("visMelding").addEventListener("click", function() {
    document.getElementById("melding").innerHTML = "Knappen ble trykket!";
});
```

---

**Løsningsforslag til Oppgave 4:**

Når brukeren klikker på knappen med id `"visMelding"`, skjer følgende:

1. **Event Listener**: En lytter er lagt til knappen som venter på en "click"-hendelse.
2. **Funksjon Kalles**: Når knappen klikkes, kalles den anonyme funksjonen.
3. **Oppdaterer Innhold**: Funksjonen endrer innholdet i `<p>`-elementet med id `"melding"` ved å sette `innerHTML` til `"Knappen ble trykket!"`.
4. **Resultat**: Teksten "Knappen ble trykket!" vises under knappen.

---

---

**Oppgave 5:**

Finn og rett feilen i følgende kode som skal lese verdien fra et tekstfelt og vise det i et avsnitt.

HTML:

```html
<input type="text" id="inputTekst">
<button onclick="visTekst()">Vis Tekst</button>
<p id="utskrift"></p>
```

JavaScript:

```javascript
function visTekst() {
    var tekst = document.getElementById("inputTekst").innhold;
    document.getElementById("utskrift").innerHTML = tekst;
}
```

---

**Løsningsforslag til Oppgave 5:**

Feilen i koden er bruken av egenskapen `innhold` i stedet for `value` for å hente verdien fra input-feltet.

**Rettet kode:**

```javascript
function visTekst() {
    var tekst = document.getElementById("inputTekst").value;
    document.getElementById("utskrift").innerHTML = tekst;
}
```

**Forklaring:**

- **Feil Egenskap**: `innhold` er ikke en gyldig egenskap for å hente verdien fra et input-element.
- **Riktig Egenskap**: `value` brukes for å hente verdien som brukeren har skrevet inn i input-feltet.

---

# Prøve i HTML og JavaScript

## Del 2: Fullfør programmene

---

**Oppgave 6:**

Fullfør funksjonen slik at den undersøker om passordet som er skrevet inn er det riktige. I if-setningen i koden MÅ du benytte deg av variabelen `riktigPassord`.

HTML:

```html
<input type="text" id="inpPass" placeholder="passord">
<button onclick="sjekk()">Hils</button>
<p id="txtUt"></p>
```

JavaScript:

```javascript
function sjekk() {
    let riktigPassord = "arne123";
    let pass = document.getElementById("inpPass").value;
    // Skriv koden her

}
```

---

**Løsningsforslag til Oppgave 6:**

Vi skal sammenligne brukerens inntastede passord med variabelen `riktigPassord`. Hvis passordet er korrekt, kan vi hilse på brukeren eller gi en bekreftelse. Hvis ikke, kan vi gi en feilmelding.

**Fullstendig JavaScript-kode:**

```javascript
function sjekk() {
    let riktigPassord = "arne123";
    let pass = document.getElementById("inpPass").value;

    if (pass === riktigPassord) {
        document.getElementById("txtUt").innerHTML = "Velkommen!";
    } else {
        document.getElementById("txtUt").innerHTML = "Feil passord.";
    }
}
```

**Forklaring:**

- Vi henter verdien brukeren har skrevet inn fra input-feltet med `document.getElementById("inpPass").value`.
- Vi bruker en `if`-setning til å sjekke om `pass` er lik `riktigPassord`.
  - Merk at vi bruker `===` for en strikt likhetssjekk.
- Basert på resultatet av sammenligningen, oppdaterer vi innholdet i `<p>`-elementet med id `txtUt`.

---

---

**Oppgave 7:**

Fullfør funksjonen slik at den undersøker om et tall som brukeren skriver inn er positivt (større enn 0) eller ikke og viser resultatet i et avsnitt.

HTML:

```html
<input type="number" id="tall" placeholder="Skriv inn et tall">
<button onclick="sjekkTall()">Sjekk Tall</button>
<p id="resultat"></p>
```

JavaScript:

```javascript
function sjekkTall() {
    var nummer = Number(document.getElementById("tall").value);
    // Skriv koden her
}
```

---

**Løsningsforslag til Oppgave 7:**

Vi skal sjekke om `nummer` er større enn 0. Basert på dette skal vi vise en melding til brukeren.

**Fullstendig JavaScript-kode:**

```javascript
function sjekkTall() {
    var nummer = Number(document.getElementById("tall").value);

    if (nummer > 0) {
        document.getElementById("resultat").innerHTML = "Tallet er positivt.";
    } else if (nummer < 0) {
        document.getElementById("resultat").innerHTML = "Tallet er negativt.";
    } else if (nummer === 0) {
        document.getElementById("resultat").innerHTML = "Tallet er null.";
    } else {
        document.getElementById("resultat").innerHTML = "Vennligst skriv inn et gyldig tall.";
    }
}
```

**Forklaring:**

- Vi konverterer input til et tall med `Number()` for å sikre at vi kan sammenligne det numerisk.
- Vi bruker en `if...else if...else`-struktur for å sjekke om tallet er større enn, mindre enn eller lik 0.
- Hvis brukeren ikke skriver inn et gyldig tall (f.eks. lar feltet være tomt), gir vi en melding om å skrive inn et gyldig tall.

---

---

**Oppgave 8:**

Lag koden som henter valgt verdi fra en dropdown-meny og viser en melding i et avsnitt når brukeren klikker på en knapp. For eksempel kan utskriften være

- Du valgte Katt.

HTML:

```html
<select id="dyr">
    <option value="Hund">Hund</option>
    <option value="Katt">Katt</option>
    <option value="Fugl">Fugl</option>
</select>
<button onclick="visDyr()">Vis Dyr</button>
<p id="valg"></p>
```

JavaScript:

```javascript
function visDyr() {
    // Skriv koden her
}
```

---

**Løsningsforslag til Oppgave 8:**

Vi skal hente den valgte verdien fra `<select>`-elementet og vise det i `<p>`-elementet.

**Fullstendig JavaScript-kode:**

```javascript
function visDyr() {
    var valgtDyr = document.getElementById("dyr").value;
    document.getElementById("valg").innerHTML = "Du valgte " + valgtDyr + ".";
}
```

**Forklaring:**

- Vi henter den valgte verdien fra dropdown-menyen med `document.getElementById("dyr").value`.
- Vi oppdaterer innholdet i `<p>`-elementet med id `valg` for å vise hvilken dyreart brukeren har valgt.
- Meldingen bygges ved å kombinere strengen `"Du valgte "` med variabelen `valgtDyr`.

---

---

**Oppgave 9:**

Fullfør funksjonen slik at den leser inn to tall fra input-felt, sammenligner dem, og viser hvilket tall som er størst, eller om de er like.

HTML:

```html
<input type="number" id="tall1" placeholder="Tall 1">
<input type="number" id="tall2" placeholder="Tall 2">
<button onclick="sammenlignTall()">Sammenlign</button>
<p id="resultat"></p>
```

JavaScript:

```javascript
function sammenlignTall() {
    var tall1 = Number(document.getElementById("tall1").value);
    var tall2 = Number(document.getElementById("tall2").value);
    // Skriv koden her
}
```

---

**Løsningsforslag til Oppgave 9:**

Vi skal sammenligne `tall1` og `tall2` og vise resultatet til brukeren.

**Fullstendig JavaScript-kode:**

```javascript
function sammenlignTall() {
    var tall1 = Number(document.getElementById("tall1").value);
    var tall2 = Number(document.getElementById("tall2").value);

    if (tall1 > tall2) {
        document.getElementById("resultat").innerHTML = tall1 + " er større enn " + tall2 + ".";
    } else if (tall1 < tall2) {
        document.getElementById("resultat").innerHTML = tall2 + " er større enn " + tall1 + ".";
    } else if (tall1 === tall2) {
        document.getElementById("resultat").innerHTML = "Tallene er like.";
    } else {
        document.getElementById("resultat").innerHTML = "Vennligst skriv inn gyldige tall.";
    }
}
```

**Forklaring:**

- Vi bruker `Number()` for å sikre at vi sammenligner numeriske verdier.
- `if`-setningene sammenligner de to tallene:
  - Hvis `tall1` er større enn `tall2`, viser vi det.
  - Hvis `tall2` er større enn `tall1`, viser vi det.
  - Hvis de er like, gir vi beskjed om det.
- Hvis inputtene ikke er gyldige tall (f.eks. tomme felt), gir vi en feilmelding.

---

---

**Oppgave 10:**

Skriv JavaScript-koden som sjekker alderen brukeren skriver inn i et input-felt, og viser om brukeren er et barn (0-12 år), en tenåring (13-19 år) eller en voksen (20 år og oppover).

HTML:

```html
<input type="number" id="alder" placeholder="Skriv inn din alder">
<button onclick="sjekkAlder()">Sjekk Alder</button>
<p id="kategori"></p>
```

JavaScript:

```javascript
function sjekkAlder() {
    var alder = Number(document.getElementById("alder").value);
    // Skriv koden her
}
```

---

**Løsningsforslag til Oppgave 10:**

Vi skal sjekke hvilken alderskategori brukeren tilhører basert på alderen de skriver inn.

**Fullstendig JavaScript-kode:**

```javascript
function sjekkAlder() {
    var alder = Number(document.getElementById("alder").value);

    if (alder >= 0 && alder <= 12) {
        document.getElementById("kategori").innerHTML = "Du er et barn.";
    } else if (alder >= 13 && alder <= 19) {
        document.getElementById("kategori").innerHTML = "Du er en tenåring.";
    } else if (alder >= 20) {
        document.getElementById("kategori").innerHTML = "Du er en voksen.";
    } else {
        document.getElementById("kategori").innerHTML = "Vennligst skriv inn en gyldig alder.";
    }
}
```

**Forklaring:**

- Vi konverterer input til et tall med `Number()`.
- Vi bruker en serie `if...else if...else`-setninger for å sjekke hvilken aldersgruppe alderen faller inn under:
  - **Barn**: 0 til 12 år.
  - **Tenåring**: 13 til 19 år.
  - **Voksen**: 20 år og oppover.
- Hvis alderen er negativ eller ikke et gyldig tall, gir vi en feilmelding.

---

# Prøve i HTML og JavaScript

## Del 3: Større oppgaver

---

**Oppgave 11:**

Lag et program som beregner gjennomsnittet av tre tall som brukeren skriver inn. Vis resultatet i et avsnitt. Hvis gjennomsnittet er over 50, skal det også vises en melding som sier "Gjennomsnittet er over 50".

HTML:

```html
<input type="number" id="tall1" placeholder="Tall 1">
<input type="number" id="tall2" placeholder="Tall 2">
<input type="number" id="tall3" placeholder="Tall 3">
<button onclick="beregnGjennomsnitt()">Beregn Gjennomsnitt</button>
<p id="resultat"></p>
```

JavaScript:

```javascript
function beregnGjennomsnitt() {
    var tall1 = Number(document.getElementById("tall1").value);
    var tall2 = Number(document.getElementById("tall2").value);
    var tall3 = Number(document.getElementById("tall3").value);

    // Skriv koden her
}
```

---

**Løsningsforslag til Oppgave 11:**

Vi skal lage en funksjon som beregner gjennomsnittet av tre tall og viser resultatet i et avsnitt. Hvis gjennomsnittet er over 50, skal vi vise en ekstra melding.

**Fullstendig JavaScript-kode:**

```javascript
function beregnGjennomsnitt() {
    var tall1 = Number(document.getElementById("tall1").value);
    var tall2 = Number(document.getElementById("tall2").value);
    var tall3 = Number(document.getElementById("tall3").value);

    var gjennomsnitt = (tall1 + tall2 + tall3) / 3;

    var melding = "Gjennomsnittet er " + gjennomsnitt.toFixed(2) + ".";

    if (gjennomsnitt > 50) {
        melding += " Gjennomsnittet er over 50.";
    }

    document.getElementById("resultat").innerHTML = melding;
}
```

**Forklaring:**

- **Hente verdier**: Vi henter tallene fra input-feltene og konverterer dem til tall ved hjelp av `Number()`.
- **Beregne gjennomsnitt**: Vi summerer tallene og deler på 3.
- **Formatere resultatet**: Bruker `toFixed(2)` for å vise gjennomsnittet med to desimaler.
- **Sjekke om gjennomsnittet er over 50**: Hvis ja, legger vi til en ekstra melding.
- **Vise resultatet**: Oppdaterer innholdet i `<p>`-elementet med id `"resultat"`.

---

---

**Oppgave 12:**

Lag en nettside der brukeren kan gi tilbakemelding på en film de har sett. Skjemaet skal inneholde:

- Et tekstfelt for navn
- Et nummerfelt for alder
- En dropdown-meny for å velge filmens sjanger
- Radioknapper for å vurdere filmen fra 1 til 5 stjerner
- Et tekstområde for kommentarer
- En knapp for å sende inn tilbakemeldingen

Når brukeren sender inn skjemaet, skal du med JavaScript hente ut informasjonen og vise en takkebeskjed på siden som inkluderer all informasjonen brukeren har fylt inn. Hvis brukeren gir mindre enn 3 stjerner, skal det i tillegg vises en melding som beklager at filmen ikke møtte forventningene, og spørre hva som kunne vært bedre.

**NB! Skriv kun JavaScript-koden som håndterer innsendingen og visningen av beskjeden.**

HTML:

```html
<form id="filmTilbakemelding">
    <label for="inpNavn">Navn:</label>
    <input type="text" id="inpNavn"><br>

    <label for="inpAlder">Alder:</label>
    <input type="number" id="inpAlder"><br>

    <label for="selSjanger">Velg filmens sjanger:</label>
    <select id="selSjanger">
        <option value="Action">Action</option>
        <option value="Komedie">Komedie</option>
        <option value="Drama">Drama</option>
        <option value="Skrekk">Skrekk</option>
        <option value="Animasjon">Animasjon</option>
    </select><br>

    <p>Vurder filmen:</p>
    <input type="radio" name="radVurdering" value="1" id="stjerne1">
    <label for="stjerne1">1 stjerne</label><br>
    <input type="radio" name="radVurdering" value="2" id="stjerne2">
    <label for="stjerne2">2 stjerner</label><br>
    <input type="radio" name="radVurdering" value="3" id="stjerne3">
    <label for="stjerne3">3 stjerner</label><br>
    <input type="radio" name="radVurdering" value="4" id="stjerne4">
    <label for="stjerne4">4 stjerner</label><br>
    <input type="radio" name="radVurdering" value="5" id="stjerne5">
    <label for="stjerne5">5 stjerner</label><br>

    <label for="txtKommentar">Kommentar:</label><br>
    <textarea id="txtKommentar" rows="4" cols="50"></textarea><br>

    <input type="submit" value="Send inn">
</form>

<p id="txtUt"></p>
```

Fortsett på denne:

```javascript
document.getElementById('filmTilbakemelding').addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindrer sideoppdatering

    // Hent data fra skjemaet
    let navn = document.getElementById("inpNavn").value;
    let alder = Number(document.getElementById("inpAlder").value);
    let sjanger = document.getElementById("selSjanger").value;
    let vurdering = document.querySelector('input[name="radVurdering"]:checked').value;
    let kommentar = document.getElementById("txtKommentar").value;

    // TODO: fullfør oppgaven

});
```

---

**Løsningsforslag til Oppgave 12:**

Vi skal fullføre JavaScript-koden for å håndtere innsendingen av skjemaet, hente ut informasjonen, og vise en takkebeskjed som inkluderer all informasjonen. Hvis vurderingen er mindre enn 3 stjerner, skal vi også vise en beklagelsesmelding.

**Fullstendig JavaScript-kode:**

```javascript
document.getElementById('filmTilbakemelding').addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindrer sideoppdatering

    // Hent data fra skjemaet
    let navn = document.getElementById("inpNavn").value;
    let alder = Number(document.getElementById("inpAlder").value);
    let sjanger = document.getElementById("selSjanger").value;
    let vurdering = document.querySelector('input[name="radVurdering"]:checked').value;
    let kommentar = document.getElementById("txtKommentar").value;

    // Bygg takkebeskjeden
    let melding = "Takk for tilbakemeldingen, " + navn + "!<br>";
    melding += "Alder: " + alder + "<br>";
    melding += "Sjanger: " + sjanger + "<br>";
    melding += "Vurdering: " + vurdering + " stjerne";
    if (vurdering !== "1") {
        melding += "r"; // Legger til 'r' for flertall
    }
    melding += "<br>";
    melding += "Kommentar: " + kommentar + "<br>";

    // Sjekk om vurderingen er mindre enn 3
    if (Number(vurdering) < 3) {
        melding += "<br>Vi beklager at filmen ikke møtte dine forventninger.";
        melding += "<br>Vi setter pris på om du kan fortelle oss hva som kunne vært bedre.";
    }

    // Vis beskjeden på siden
    document.getElementById("txtUt").innerHTML = melding;

    // Nullstill skjemaet etter innsending (valgfritt)
    document.getElementById("filmTilbakemelding").reset();
});
```

**Forklaring:**

- **Hente data fra skjemaet:**
  - Vi bruker `document.getElementById()` og `document.querySelector()` for å hente verdiene brukeren har skrevet inn.
  - `alder` og `vurdering` konverteres til tall med `Number()` når det er nødvendig.
- **Bygge meldingen:**
  - Starter med en personlig takk til brukeren ved å inkludere navnet.
  - Legger til alder, valgt sjanger, vurdering og kommentar.
  - Håndterer flertall på ordet "stjerne" ved å sjekke om vurderingen er ulik "1".
- **Ekstra melding ved lav vurdering:**
  - Hvis vurderingen er mindre enn 3, legger vi til en beklagelsesmelding og oppfordrer til mer detaljert tilbakemelding.
- **Vise meldingen:**
  - Oppdaterer innholdet i `<p>`-elementet med id `"txtUt"` ved å sette `innerHTML` til den sammensatte meldingen.
- **Nullstille skjemaet:**
  - Etter at meldingen er vist, nullstiller vi skjemaet ved å kalle `reset()` på skjemaet. Dette er valgfritt, men gir en bedre brukeropplevelse.

**Eksempel på melding som kan vises:**

```
Takk for tilbakemeldingen, Maria!
Alder: 25
Sjanger: Drama
Vurdering: 2 stjerner
Kommentar: Historien var ikke engasjerende.

Vi beklager at filmen ikke møtte dine forventninger.
Vi setter pris på om du kan fortelle oss hva som kunne vært bedre.
```
---