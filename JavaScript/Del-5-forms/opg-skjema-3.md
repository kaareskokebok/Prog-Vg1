**Oppgave 1: Lisas Limonade**

Lag en nettside for **Lisas Limonade** hvor brukeren kan bestille forskjellige typer limonade. Nettsiden skal inneholde:

- Et bilde av limonade (bruk `img`-taggen).
- Et skjema hvor brukeren kan:
  - Velge antall glass (bruk `input type="number"`).
  - Velge smak (bruk `select` med alternativer som sitron, bringebær og mango).
  - Velge om de vil ha isbiter (bruk en `checkbox`).
- Når brukeren sender inn skjemaet, skal en bekreftelsestekst vises med bestillingsdetaljene.

**Her er starten på koden for å komme i gang:**

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Lisas Limonade</title>
    <style>
        img {
            width: 200px;
        }
    </style>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Lisas Limonade</h1>
    <img src="https://cdn.pixabay.com/photo/2017/06/06/22/55/lemonade-2372770_960_720.jpg" alt="Bilde av limonade">

    <form id="bestillingsskjema">
        <label for="antall">Antall glass:</label><br>
        <input type="number" id="antall" min="1" max="10" required><br>

        <label for="smak">Velg smak:</label><br>
        <select id="smak" required>
            <option value="">Velg smak</option>
            <option value="sitron">Sitron</option>
            <option value="bringebær">Bringebær</option>
            <option value="mango">Mango</option>
        </select><br>

        <input type="checkbox" id="isbiter">
        <label for="isbiter">Legg til isbiter</label><br>

        <input type="submit" value="Bestill">
    </form>

    <p id="bekreftelse"></p>
</body>
</html>
```

**Din oppgave:**

Fullfør JavaScript-koden i `script.js` slik at når brukeren sender inn skjemaet, vises en bekreftelsestekst med bestillingsdetaljene. Bekreftelsesteksten bør inneholde:

- Antall glass.
- Valgt smak.
- Om brukeren ønsker isbiter eller ikke.

---

**Oppgave 2: Parkens Paradis**

Lag en nettside for **Parkens Paradis** hvor besøkende kan kjøpe inngangsbilletter. Nettsiden skal inkludere:

- **En video av parken** som spilles av automatisk uten lyd. Finn en passende video på internett ved å bruke en URL, og bruk `<video>`-taggen med attributtene `autoplay` og `muted`.

- **Et skjema** der brukeren kan:

  - **Velge antall billetter** for hver kategori:
    - **Voksen** (bruk `input type="number"`) – pris: **100kr** per billett.
    - **Barn** (bruk `input type="number"`) – pris: **50kr** per billett.
    - **Pensjonist** (bruk `input type="number"`) – pris: **70kr** per billett.
  
  - **Velge besøksdato** (bruk `input type="date`).

- Når brukeren sender inn skjemaet, skal en **bekreftelse** vises med en oppsummering av bestillingen, inkludert:

  - Antall billetter for hver kategori.
  - Besøksdato.
  - **Totalpris** for bestillingen.

---

**Din oppgave:**

Lag både HTML- og JavaScript-koden for nettsiden. Sørg for at:

- Videoen av parken vises øverst på siden og spilles av automatisk uten lyd.

- Skjemaet er brukervennlig og validerer input (for eksempel, antall billetter må være minst 0, og totalantallet må være minst 1).

- Bekreftelsesteksten inneholder all relevant informasjon om bestillingen, inkludert totalprisen basert på antall billetter og pris per kategori.

---

**Tips:**

- **For å vise videoen**, bruk `<video>`-taggen med attributtene `src`, `autoplay`, `muted` og `loop`. Eksempel:

  ```html
  <video src="URL_TIL_VIDEOEN" autoplay muted loop></video>
  ```

  Husk å erstatte `URL_TIL_VIDEOEN` med en faktisk URL til en video av en park.

- **For skjemaet**:

  - Bruk `input type="number"` for å la brukeren velge antall billetter. Sett `min="0"` for å hindre negative tall.

  - Bruk `input type="date"` for å la brukeren velge besøksdato.

- **I JavaScript**:

  - Bruk `document.getElementById` og `document.querySelector` for å hente verdier fra skjemaet.

  - Opprett en funksjon som håndterer `submit`-hendelsen på skjemaet for å behandle bestillingen.

  - Forhindre at siden laster på nytt ved å inkludere `event.preventDefault()` i funksjonen din.

  - **For å beregne totalprisen**:

    - Multipliser antall billetter i hver kategori med prisen for den kategorien.
    - Summer resultatene for alle kategorier.

  - **For å validere at minst én billett er valgt**, sjekk om summen av antall billetter er større enn 0.

- **For bekreftelsesteksten**:

  - Vis antall billetter per kategori og deres individuelle priser.

  - Vis totalprisen for hele bestillingen.

  - Inkluder besøksdatoen.

---

**Eksempel på hvordan bekreftelsesteksten kan se ut:**

```html
<h3>Takk for din bestilling!</h3>
<p>Du har bestilt billetter for følgende kategorier:</p>
<ul>
  <li>Voksen: 2 billetter x 100kr = 200kr</li>
  <li>Barn: 1 billett x 50kr = 50kr</li>
  <li>Pensjonist: 0 billetter x 70kr = 0kr</li>
</ul>
<p>Besøksdato: 12.12.2024</p>
<p><strong>Totalpris: 250kr</strong></p>
```

---

**Lykke til med oppgaven!**

