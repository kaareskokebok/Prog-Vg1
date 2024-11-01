**Oppgave 1: Enkel if-setning**

Lag et program der brukeren kan skrive inn en temperatur i Celsius. Hvis temperaturen er under 0 grader, skal programmet skrive ut "Det er frost i dag!".

**Steg:**

1. **Opprett en HTML-side** med en input-boks der brukeren kan skrive inn temperaturen.
2. **Legg til en knapp** som, når den klikkes, kjører en funksjon for å sjekke temperaturen.
3. **Hent verdien** fra input-boksen i JavaScript og lagre den i en variabel.
4. **Skriv en if-setning** som sjekker om temperaturen er under 0.
5. **Vis meldingen** "Det er frost i dag!" på nettsiden hvis betingelsen er sann.

*Kodehjelp:*

```html
<input id="inpTemp" type="number" placeholder="Skriv inn temperaturen">
<button onclick="sjekkTemperatur()">Sjekk temperatur</button>
<p id="txtUt"></p>
```

```javascript
function sjekkTemperatur() {
    let temperatur = Number(document.getElementById("inpTemp").value);
    // Skriv if-setningen her
}
```

---

**Oppgave 2: If og else**

Lag et program der brukeren kan skrive inn et tall. Programmet skal sjekke om tallet er partall eller oddetall og gi en tilbakemelding.

**Steg:**

1. **Lag en HTML-side** med en input-boks for tallinndata.
2. **Legg til en knapp** som kaller en funksjon for å sjekke tallet når den trykkes.
3. **Hent tallet** fra input-boksen i JavaScript og konverter det til et nummer.
4. **Bruk en if-else-setning** for å sjekke om tallet er delelig med 2.
5. **Vis meldingen** "Tallet er et partall" eller "Tallet er et oddetall" på nettsiden.

*Kodehjelp:*

```javascript
function sjekkTall() {
    let tall = Number(document.getElementById("inpTall").value);
    if (tall % 2 === 0) {
        // Skriv ut at tallet er et partall
    } else {
        // Skriv ut at tallet er et oddetall
    }
}
```

---

**Oppgave 3: If, else if og else med bilde og lyd**

Lag et spill der brukeren skal gjette hvilket tall mellom 1 og 100 datamaskinen har valgt. Programmet skal gi forskjellige tilbakemeldinger basert på hvor nær gjetningen er det hemmelige tallet, ved å bruke if, else if og else. Spilleren får tre forsøk, og spillet inkluderer bilde og lyd.

**Steg:**

1. **Opprett en HTML-side** med en passende bakgrunn eller bilde som representerer et tallspill.
2. **La programmet velge et hemmelig tall** mellom 1 og 20 når siden lastes inn, og spill av en lyd for å signalisere at spillet har startet.
3. **La brukeren skrive inn** en gjetning i en input-boks.
4. **Når brukeren sender inn gjetningen**, bruk en if, else if, else-struktur i JavaScript for å gi tilbakemelding:
   - **Hvis gjetningen er lik det hemmelige tallet**, vis meldingen "Gratulerer! Du gjettet riktig tall!" og vis et vinnerbilde.
   - **Hvis forskjellen mellom gjetningen og det hemmelige tallet er mindre enn 4**, vis meldingen "Varmt! Du er veldig nær."
   - **Hvis forskjellen er større eller lik 8**, vis meldingen "Kaldt! Du er langt unna."
5. **Etter fire forsøk**, hvis brukeren ikke har gjettet riktig, vis meldingen "Spillet er over! Det hemmelige tallet var X." hvor X er det hemmelige tallet. Spill av passende "Game Over" lyd.

*Ingen kodehjelp gis for denne oppgaven. Bruk kreativiteten din og det du har lært for å løse den!*