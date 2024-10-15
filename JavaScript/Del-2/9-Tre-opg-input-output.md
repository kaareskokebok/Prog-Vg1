# Oppgaver input output

---

### **Oppgave 1: Sammenslåing av setninger**

**Del 1:**

Lag en HTML-side med en overskrift som sier **"Sammenslåing av setninger"**.

**Kodehjelp:**

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Sammenslåing av setninger</title>
</head>
<body>
    <h1>Sammenslåing av setninger</h1>
    <!-- Resten av innholdet kommer her -->
</body>
</html>
```

---

**Del 2:**

Legg til to `<input>`-felt av typen `text` der brukeren kan skrive inn to setninger.

**Kodehjelp:**

```html
<p>Skriv inn to setninger:</p>
<input type="text" id="inpSetning1" placeholder="Første setning">
<input type="text" id="inpSetning2" placeholder="Andre setning">
```

---

**Del 3:**

Legg til en knapp med teksten **"Slå sammen"** som kjører en JavaScript-funksjon når den blir trykket på.

**Kodehjelp:**

```html
<button onclick="slaaSammen()">Slå sammen</button>
```

---

**Del 4:**

Skriv en JavaScript-funksjon som henter verdiene fra input-feltene, slår dem sammen til én setning, og viser resultatet i et `<p>`-element med `id="txtUt"`.

**Kodehjelp:**

```html
<script>
    function slaaSammen() {
        // Hent verdier fra input-feltene
        let setning1 = document.getElementById("inpSetning1").value;
        let setning2 = document.getElementById("inpSetning2").value;

        // Slå sammen setningene
        let sammensattSetning = setning1 + " " + setning2;

        // Vis resultatet
        document.getElementById("txtUt").textContent = sammensattSetning;
    }
</script>
```

---

**Del 5:**

Legg til et `<p>`-element med `id="txtUt"` der resultatet skal vises. Test programmet ved å skrive inn forskjellige setninger og sjekk at de blir korrekt slått sammen.

**Kodehjelp:**

```html
<p id="txtUt"></p>
```

---

**Ekstraoppgave:**

- Finn ut hvordan du kan legge til et tredje input-felt der brukeren kan skrive inn et skilletegn (for eksempel et komma eller et utropstegn) som skal settes mellom de to setningene.
- Undersøk hvordan du kan bruke JavaScript til å endre teksten til store bokstaver eller små bokstaver før setningene slås sammen.

---

### **Oppgave 2: Beregn alder basert på fødselsår**

**Del 1:**

Lag en HTML-side med en overskrift som sier **"Beregn din alder"**.

**Kodehjelp:**

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Beregn din alder</title>
</head>
<body>
    <h1>Beregn din alder</h1>
    <!-- Resten av innholdet kommer her -->
</body>
</html>
```

---

**Del 2:**

Legg til et `<input>`-felt der brukeren kan skrive inn sitt fødselsår.

**Kodehjelp:**

```html
<p>Skriv inn ditt fødselsår:</p>
<input type="number" id="inpFodselsaar" placeholder="For eksempel 2005">
```

---

**Del 3:**

Legg til en knapp med teksten **"Beregn alder"** som kjører en JavaScript-funksjon når den blir trykket på.

**Kodehjelp:**

```html
<button onclick="beregnAlder()">Beregn alder</button>
```

---

**Del 4:**

Skriv en JavaScript-funksjon som henter fødselsåret fra input-feltet, beregner alderen basert på inneværende år, og viser resultatet i et `<p>`-element med `id="txtUt"`.

**Kodehjelp:**

```html
<script>
    function beregnAlder() {
        // Hent fødselsår fra input-feltet
        let fodselsaar = Number(document.getElementById("inpFodselsaar").value);

        // Få inneværende år
        let dagensDato = new Date();
        let innevaerendeAar = dagensDato.getFullYear();

        // Beregn alder
        let alder = innevaerendeAar - fodselsaar;

        // Vis resultatet
        document.getElementById("txtUt").textContent = "Du er " + alder + " år gammel.";
    }
</script>
```

---

**Del 5:**

Legg til et `<p>`-element med `id="txtUt"` der alderen skal vises. Test programmet ved å legge inn forskjellige fødselsår og sjekk at riktig alder vises.

**Kodehjelp:**

```html
<p id="txtUt"></p>
```

---

**Ekstraoppgave:**

- Finn ut hvordan du kan håndtere feilinput, for eksempel hvis brukeren skriver inn et ugyldig årstall eller lar feltet være tomt. Bruk `if`-setninger til å sjekke om input er gyldig, og vis en feilmelding hvis den ikke er det.
- Undersøk hvordan du kan beregne nøyaktig alder basert på fødselsdato (dag, måned, år) i stedet for bare fødselsår.

---

### **Oppgave 3: Temperaturkonvertering fra Celsius til Fahrenheit**

**Del 1:**

Lag en HTML-side med en overskrift som sier **"Konverter temperatur fra Celsius til Fahrenheit"**.

---

**Del 2:**

Legg til et `<input>`-felt der brukeren kan skrive inn en temperatur i Celsius.

---

**Del 3:**

Legg til en knapp med teksten **"Konverter"** som kjører en JavaScript-funksjon når den blir trykket på.

---

**Del 4:**

Skriv en JavaScript-funksjon som henter verdien fra input-feltet, konverterer temperaturen til Fahrenheit ved hjelp av formelen `F = C * 9/5 + 32`, og viser resultatet i et `<p>`-element med `id="txtUt"`.

---

**Del 5:**

Test programmet ved å konvertere ulike temperaturer og sjekk at resultatene er korrekte.

---

**Ekstraoppgave:**

- Finn ut hvordan du kan legge til en funksjon som også konverterer fra Fahrenheit til Celsius.
- Lag en nedtrekksmeny eller radioknapper slik at brukeren kan velge hvilken vei konverteringen skal gå.

---

Lykke til med oppgavene!
