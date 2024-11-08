# Reaksjonstid Multiplayer

## Introduksjon
Denne nettsiden benytter seg av Firebase database, og ngrok for å få din lokale server tilgjengelig på internett. Realtime synkronisering mellom spillerne skjer gjennom Firebase. Når du er ferdig, kan du invitere venner til å spille sammen med deg.

For å få spillet til å starte samtidig for alle spillere, la spillere registrere navnene sine, og spille flere runder, trenger vi en måte for klientene å kommunisere i sanntid. Vi kan oppnå dette ved å bruke **Firebase Realtime Database**, som lar oss synkronisere data mellom klientene uten å måtte sette opp en egen server. Her er hvordan du kan gjøre det:

---

### **Steg 1: Opprett et Firebase-prosjekt**

1. **Gå til Firebase Console:**

   - Besøk [Firebase Console](https://console.firebase.google.com/) og logg inn med Google-kontoen din.

2. **Opprett et nytt prosjekt:**

   - Klikk på **"Add project"**.
   - Gi prosjektet ditt et navn, for eksempel **"RaskesteKlikkerSpill"**.
   - Følg instruksjonene for å opprette prosjektet.

---

### **Steg 2: Legg til Firebase til web-appen din**

1. **Legg til en web-app i prosjektet:**

   - I Firebase-prosjektets oversikt, klikk på **"</> (Web)"** for å legge til en web-app.
   - Gi web-appen et navn og klikk på **"Register app"**.

2. **Kopier Firebase-konfigurasjonskoden:**

   - Etter registrering vil du få en Firebase-konfigurasjonskode. Kopier denne; vi skal bruke den senere.

---

### **Steg 3: Oppdater `index.html` med Firebase SDK**

I `index.html`, legg til Firebase SDK og konfigurasjonen i `<head>`-delen:

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Raskeste Klikker</title>
    <link rel="stylesheet" href="style.css">

    <!-- Firebase App (The core Firebase SDK) -->
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <!-- Firebase Realtime Database -->
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"></script>
    <!-- Din Firebase-konfigurasjon -->
    <script>
        // Firebase-konfigurasjon
        var firebaseConfig = {
            apiKey: "DIN_API_KEY",
            authDomain: "DITT_PROSJEKT.firebaseapp.com",
            databaseURL: "https://DITT_PROSJEKT.firebaseio.com",
            projectId: "DITT_PROSJEKT",
            storageBucket: "DITT_PROSJEKT.appspot.com",
            messagingSenderId: "DIN_SENDER_ID",
            appId: "DIN_APP_ID"
        };
        // Initialiser Firebase
        firebase.initializeApp(firebaseConfig);
    </script>
</head>
<body>

    <!-- Innhold kommer her -->

    <script src="script.js"></script>
</body>
</html>
```

> **Merk:** Erstatt `"DIN_API_KEY"`, `"DITT_PROSJEKT"`, osv., med informasjonen fra Firebase-konfigurasjonen din.

---

### **Steg 4: Oppdater HTML for registrering og spill**

I `index.html`, legg til felter for antall spillere og navn, og oppdater spillområdet:

```html
<body>
    <h1>Raskeste Klikker</h1>

    <div id="registreringsSkjema">
        <label for="antallSpillere">Antall spillere:</label>
        <input type="number" id="antallSpillere" min="1" max="100">
        <br><br>
        <label for="spillerNavn">Ditt navn:</label>
        <input type="text" id="spillerNavn" placeholder="Skriv inn navnet ditt">
        <br><br>
        <button onclick="registrerSpiller()">Registrer</button>
        <p id="ventMelding"></p>
    </div>

    <div id="spillOmråde" style="display: none;">
        <p>Klikk på knappen så fort du kan!</p>
        <button id="klikkKnapp" onclick="klikk()" disabled>Klikk her!</button>
        <p id="melding"></p>
    </div>

    <script src="script.js"></script>
</body>
```

---

### **Steg 5: Grunnleggende styling i `style.css`**

```css
body {
    text-align: center;
    font-family: Arial, sans-serif;
    margin-top: 50px;
}

#startKnapp, #klikkKnapp, #registrerKnapp {
    padding: 15px 30px;
    font-size: 16px;
    cursor: pointer;
}

#melding, #ventMelding {
    font-size: 18px;
    color: green;
    margin-top: 20px;
}
```

---

### **Steg 6: Oppdater `script.js` med sanntidsfunksjonalitet**

```javascript
var database = firebase.database();
var spillID = 'spill1'; // Bruk en fast spill-ID
var antallSpillere;
var spillereRegistrert = 0;
var startTid;

function registrerSpiller() {
    var navn = document.getElementById('spillerNavn').value || 'Anonym';
    antallSpillere = parseInt(document.getElementById('antallSpillere').value);

    if (!antallSpillere) {
        alert('Vennligst angi antall spillere.');
        return;
    }

    // Registrer spilleren i Firebase
    var spillerRef = database.ref(spillID + '/spillere').push();
    spillerRef.set({
        navn: navn,
        klikket: false,
        tid: 0
    });

    // Lytt etter endringer i spillere
    database.ref(spillID + '/spillere').on('value', function(snapshot) {
        spillereRegistrert = snapshot.numChildren();
        if (spillereRegistrert === antallSpillere) {
            startSpill();
        } else {
            document.getElementById('ventMelding').innerText = 'Venter på andre spillere... (' + spillereRegistrert + '/' + antallSpillere + ')';
        }
    });

    // Skjul registreringsskjemaet
    document.getElementById('registreringsSkjema').style.display = 'none';
}

function startSpill() {
    document.getElementById('spillOmråde').style.display = 'block';
    document.getElementById('melding').innerText = '';
    var tilfeldigTid = Math.random() * 5000 + 2000; // Mellom 2 og 7 sekunder

    setTimeout(function() {
        // Sett starttid i Firebase
        database.ref(spillID + '/startTid').set(firebase.database.ServerValue.TIMESTAMP);
    }, tilfeldigTid);
}

// Lytt etter starttid
database.ref(spillID + '/startTid').on('value', function(snapshot) {
    if (snapshot.exists()) {
        startTid = snapshot.val();
        document.getElementById('klikkKnapp').disabled = false;
    }
});

function klikk() {
    var sluttTid = new Date().getTime();
    var reaksjonstid = (sluttTid - startTid) / 1000;
    var navn = document.getElementById('spillerNavn').value || 'Anonym';

    // Oppdater spillerens reaksjonstid i Firebase
    database.ref(spillID + '/spillere').orderByChild('navn').equalTo(navn).once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            childSnapshot.ref.update({
                klikket: true,
                tid: reaksjonstid
            });
        });
    });

    document.getElementById('melding').innerText = 'Du klikket på ' + reaksjonstid + ' sekunder!';
    document.getElementById('klikkKnapp').disabled = true;
}

// Lytt etter om alle har klikket
database.ref(spillID + '/spillere').on('value', function(snapshot) {
    var spillere = snapshot.val();
    var alleKlikket = true;
    var resultater = [];

    snapshot.forEach(function(childSnapshot) {
        var spiller = childSnapshot.val();
        if (!spiller.klikket) {
            alleKlikket = false;
        } else {
            resultater.push({
                navn: spiller.navn,
                tid: spiller.tid
            });
        }
    });

    if (alleKlikket && resultater.length === antallSpillere) {
        // Sorter resultater etter tid
        resultater.sort(function(a, b) {
            return a.tid - b.tid;
        });

        // Vis resultater
        var resultatTekst = 'Resultater:\n';
        for (var i = 0; i < resultater.length; i++) {
            resultatTekst += (i + 1) + '. ' + resultater[i].navn + ': ' + resultater[i].tid + ' sekunder\n';
        }
        alert(resultatTekst);

        // Tilbakestill spillet for neste runde
        resetSpill();
    }
});

function resetSpill() {
    // Fjern spilldata fra Firebase
    database.ref(spillID).remove();

    // Tilbakestill grensesnittet
    document.getElementById('registreringsSkjema').style.display = 'block';
    document.getElementById('spillOmråde').style.display = 'none';
    document.getElementById('ventMelding').innerText = '';
    document.getElementById('spillerNavn').value = '';
    document.getElementById('antallSpillere').value = '';
    document.getElementById('klikkKnapp').disabled = true;
    document.getElementById('melding').innerText = '';
}
```

---

### **Steg 7: Test spillet med flere spillere**

1. **Start en lokal server:**

   - Åpne terminalen i prosjektmappen din.
   - Kjør `python -m http.server 8000` (for Python 3) eller `python -m SimpleHTTPServer 8000` (for Python 2).

2. **Start ngrok:**

   - Kjør `ngrok http 8000` i en annen terminal.
   - Ngrok vil gi deg en offentlig URL, for eksempel `http://abc123.ngrok.io`.

3. **Del lenken:**

   - Del ngrok-lenken med alle spillerne.

4. **Spill spillet:**

   - Alle spillere går til lenken.
   - Hver spiller angir **samme antall spillere** og skriver inn navnet sitt.
   - Når alle har registrert seg, vil spillet starte automatisk etter en tilfeldig forsinkelse.
   - Klikk på knappen så raskt som mulig når den blir aktivert.
   - Resultatene vises når alle har klikket, og spillet tilbakestilles for neste runde.

---

### **Merk:**

- **Sanntidssynkronisering:** Ved å bruke Firebase Realtime Database kan vi synkronisere data mellom alle klienter i sanntid.
- **Enkel implementering:** Dette krever ingen egen server eller backend-kode; alt håndteres i klienten.
- **Begrensninger:** For enkelhet har vi ikke implementert avanserte funksjoner som autentisering eller omfattende feilhåndtering.

---

### **Utvidelser:**

- **Flere runder:** Legg til en rundeteller og spill over flere runder. Hold oversikt over total poengsum.
- **Sikkerhet:** Implementer Firebase sikkerhetsregler for å beskytte dataene dine.
- **Unike spill-IDer:** Tillat flere spill ved å generere unike spill-IDer som spillere kan bli med i.
- **Forbedret UI:** Gjør grensesnittet mer attraktivt med bedre styling og grafikk.
- **Feilhåndtering:** Legg til feilmeldinger og håndter scenarioer der spillere kobler fra eller ikke klikker.

---

Ved å følge disse trinnene har du nå et multiplayer-spill der alle spillere starter samtidig, registrerer navnene sine, og kan spille flere runder sammen. Dette gir en morsom og interaktiv opplevelse for hele gruppen eller klassen.