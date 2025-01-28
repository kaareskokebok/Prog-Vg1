Nedenfor finner du seks **enkle** eksempler på deler av løsningen, men **ikke en fullverdig løsning** for hvert krav. Hvert eksempel er et **MWE** (Minimal Working Example) med *noe* funksjonalitet, men uten å dekke alle mulige krav. Jeg har fjernet arrow-funksjoner, object-arrays og forsøkt å bruke enklere strukturer som for-løkker, if-setninger osv. 

Til slutt under hvert eksempel finner du tips til **hvordan du kan forbedre** MWE-et, slik at du kan utvikle et mer komplett system.

---

## 1. Delvis registreringsskjema med enkel validering

**Krav-ideer:**
- Registreringsskjema med fornavn, etternavn, e-post, passord.  
- Delvis løsning: Sjekker kun om feltene ikke er tomme. Viser beskjed hvis passordene ikke matcher.  

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Delvis Registreringsskjema</title>
</head>
<body>

<h1>Registrer ny bruker (delvis)</h1>

<form id="registerForm">
  <label for="fname">Fornavn:</label>
  <input type="text" id="fname" name="fname"><br><br>

  <label for="lname">Etternavn:</label>
  <input type="text" id="lname" name="lname"><br><br>

  <label for="email">E-post:</label>
  <input type="text" id="email" name="email"><br><br>

  <label for="password">Passord:</label>
  <input type="password" id="password" name="password"><br><br>
  
  <label for="confirmPassword">Bekreft passord:</label>
  <input type="password" id="confirmPassword" name="confirmPassword"><br><br>

  <button type="button" onclick="registerUser()">Registrer</button>
</form>

<p id="feedback"></p>

<script>
function registerUser() {
  var fname = document.getElementById("fname").value.trim();
  var lname = document.getElementById("lname").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var feedback = document.getElementById("feedback");

  // Enkel tom-sjekk
  if (fname === "" || lname === "" || email === "" || password === "" || confirmPassword === "") {
    feedback.innerText = "Vennligst fyll ut alle feltene.";
    return;
  }

  // Enkel passord-match
  if (password !== confirmPassword) {
    feedback.innerText = "Passordene stemmer ikke overens.";
    return;
  }

  feedback.innerText = "Bruker registrert (delvis løsning).";
}
</script>

</body>
</html>
```

### Hvordan forbedre?
1. **Mer avansert validering** (f.eks. e-postformat, alder, passordstyrke).  
2. **Lagring av brukere** (i array eller localStorage) for senere innlogging.  
3. **Bekreftelsesside** eller videresending (redirect) etter vellykket registrering.  
4. **Design** med CSS (for å gjøre det pent og brukervennlig).  

---

## 2. Delvis innlogging

**Krav-ideer:**
- Sjekk om brukernavn og passord stemmer.  
- Delvis løsning: Hardkodet brukernavn/passord. Enkelt if-sjekk.

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Delvis Innlogging</title>
</head>
<body>

<h1>Logg inn (delvis)</h1>

<input type="text" id="loginUsername" placeholder="Brukernavn"><br><br>
<input type="password" id="loginPassword" placeholder="Passord"><br><br>
<button onclick="login()">Logg inn</button>

<p id="loginFeedback"></p>

<script>
// Hardkodet brukernavn og passord (for eksempel)
var storedUsername = "demo";
var storedPassword = "pass";

function login() {
  var inputUsername = document.getElementById("loginUsername").value;
  var inputPassword = document.getElementById("loginPassword").value;
  var feedback = document.getElementById("loginFeedback");

  if (inputUsername === storedUsername && inputPassword === storedPassword) {
    feedback.innerText = "Innlogging vellykket (delvis løsning).";
  } else {
    feedback.innerText = "Feil brukernavn eller passord.";
  }
}
</script>

</body>
</html>
```

### Hvordan forbedre?
1. **Hente ekte brukerliste** (fra registrering eller localStorage).  
2. **Håndtere flere brukere** (ikke bare én).  
3. **Redirect / gå videre** til en beskyttet side om innlogging er riktig.  
4. **Feilhåndtering** og telling av forsøk for sikkerhet.  

---

## 3. Delvis handlekurv (legge til én vare om gangen)

**Krav-ideer:**
- Mulighet til å legge til varer i en "kurv".  
- Delvis løsning: Bruker ett array *kun for varenavn* (ikke objekter), og for-løkke for å vise handlekurv.

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Delvis Handlekurv</title>
</head>
<body>

<h1>Handlekurv (delvis)</h1>

<button onclick="addItem('T-skjorte')">Legg til T-skjorte</button>
<button onclick="addItem('Bukse')">Legg til Bukse</button>
<button onclick="addItem('Jakke')">Legg til Jakke</button>

<h2>Din handlekurv</h2>
<div id="cartDisplay"></div>

<script>
var cart = []; // Bare navn i et array

function addItem(itemName) {
  // Legg til varen i cart-arrayet
  cart.push(itemName);
  updateCart();
}

function removeItem(index) {
  // Fjern basert på index
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  var cartDiv = document.getElementById("cartDisplay");
  cartDiv.innerHTML = "";

  // Hvis handlekurven er tom
  if (cart.length === 0) {
    cartDiv.innerText = "Handlekurven er tom.";
    return;
  }

  // Vis alle varer
  for(var i = 0; i < cart.length; i++) {
    var itemElement = document.createElement("div");
    itemElement.innerHTML = cart[i] + 
      " <button onclick='removeItem(" + i + ")'>Fjern</button>";
    cartDiv.appendChild(itemElement);
  }
}
</script>

</body>
</html>
```

### Hvordan forbedre?
1. **Pris**: Legg til en egen array for priser (slik at indexene stemmer).  
2. **Totalsum**: Summer pris-array for å vise total.  
3. **Datahåndtering**: Lagre handlekurv i localStorage, så den ikke forsvinner hvis siden lukkes.  
4. **Produktliste**: Ha en dynamisk liste med varer, slik at du kan lage en for-løkke for å vise alle produkter.  

---

## 4. Delvis profilside

**Krav-ideer:**
- Vise registrert informasjon.  
- Delvis løsning: Viser hardkodede data fra en "innlogget bruker". Lar deg kun endre navnet med et enkelt inputfelt.

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Delvis Profilside</title>
</head>
<body>

<h1>Min Profil (delvis)</h1>
<div id="profileInfo"></div>
<button onclick="showEditForm()">Endre navn</button>

<div id="editForm" style="display: none;">
  <h3>Oppdater Navn</h3>
  <input type="text" id="newName">
  <button onclick="updateName()">Lagre</button>
</div>

<p id="feedback"></p>

<script>
var currentUserName = "Ola Nordmann"; // Hardkodet

function displayProfile() {
  var infoDiv = document.getElementById("profileInfo");
  infoDiv.innerHTML = "Navn: " + currentUserName;
}

function showEditForm() {
  document.getElementById("editForm").style.display = "block";
  document.getElementById("newName").value = currentUserName;
}

function updateName() {
  var newNameValue = document.getElementById("newName").value.trim();
  var feedback = document.getElementById("feedback");

  if(newNameValue === "") {
    feedback.innerText = "Navn kan ikke være tomt.";
    return;
  }
  currentUserName = newNameValue;
  feedback.innerText = "Navn oppdatert (delvis løsning).";
  displayProfile();
}

// Init
displayProfile();
</script>

</body>
</html>
```

### Hvordan forbedre?
1. **Flerfelt**: Gjør det mulig å endre e-post, adresse, passord m.m.  
2. **Lagring**: Oppdater brukerinfo i localStorage eller en global array av brukere.  
3. **Autentisering**: Sørg for at kun innlogget bruker kan se og endre sin profil.  

---

## 5. Delvis passordvalidering

**Krav-ideer:**
- Passord må oppfylle visse minstekrav (minst 8 tegn, stor bokstav, liten bokstav, tall).  
- Delvis løsning: Viser en veldig enkel sjekk i en if-setning.

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Delvis Passordvalidering</title>
</head>
<body>

<h1>Registrering med enkel passordvalidering (delvis)</h1>

<label for="regPass">Velg passord:</label>
<input type="password" id="regPass" oninput="checkPass()">
<p id="passFeedback"></p>

<script>
function checkPass() {
  var passValue = document.getElementById("regPass").value;
  var feedback = document.getElementById("passFeedback");

  // Minimalt passordkrav: 8 tegn
  if (passValue.length < 8) {
    feedback.innerText = "Passordet må ha minst 8 tegn.";
    return;
  }

  // Sjekker om det finnes store bokstaver
  var foundUpper = false;
  var foundNumber = false;
  for(var i = 0; i < passValue.length; i++) {
    var ch = passValue.charAt(i);
    if(ch === ch.toUpperCase() && isNaN(ch) && ch.match(/[A-Z]/)) {
      foundUpper = true;
    }
    if(!isNaN(ch)) {
      // Hvis ch er et tall
      foundNumber = true;
    }
  }

  if(!foundUpper || !foundNumber) {
    feedback.innerText = "Passordet må inneholde minst én stor bokstav og ett tall.";
    return;
  }

  feedback.innerText = "Passord godkjent (delvis løsning).";
}
</script>

</body>
</html>
```

### Hvordan forbedre?
1. **Flere krav**: Mindre bokstaver, spesialtegn, ulike regex-mønstre osv.  
2. **Vis passordstyrke**: For eksempel en fargeskala (svak, middels, sterk).  
3. **Kombiner** med brukerregistrering og lagring.  

---

## 6. Delvis admin-visning

**Krav-ideer:**
- Admin skal se alle brukere.  
- Delvis løsning: Hardkodet "admin" - brukernavn og passord. Viser en enkel liste av brukernavn i en vanlig array, *uten* objekter.

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Delvis Admin-visning</title>
</head>
<body>

<h1>Admin-innlogging (delvis)</h1>
<input type="text" id="adminUser" placeholder="Brukernavn">
<input type="password" id="adminPass" placeholder="Passord">
<button onclick="adminLogin()">Logg inn</button>
<p id="adminFeedback"></p>

<div id="allUsers" style="display:none;">
  <h2>Liste over brukernavn</h2>
  <ul id="userList"></ul>
</div>

<script>
var adminUsername = "admin";
var adminPassword = "1234";

// Brukere lagret i et enkelt array (kun brukernavn)
var allRegisteredUsernames = ["demo", "ola", "kari"];

function adminLogin() {
  var inputUser = document.getElementById("adminUser").value;
  var inputPass = document.getElementById("adminPass").value;
  var feedback = document.getElementById("adminFeedback");

  if(inputUser === adminUsername && inputPass === adminPassword) {
    feedback.innerText = "Admin innlogging vellykket (delvis).";
    showAllUsers();
  } else {
    feedback.innerText = "Feil brukernavn eller passord for admin.";
  }
}

function showAllUsers() {
  var userSection = document.getElementById("allUsers");
  userSection.style.display = "block";

  var userList = document.getElementById("userList");
  userList.innerHTML = "";

  // Viser alle brukernavn i en <ul>
  for(var i = 0; i < allRegisteredUsernames.length; i++) {
    var li = document.createElement("li");
    li.innerText = allRegisteredUsernames[i];
    userList.appendChild(li);
  }
}
</script>

</body>
</html>
```

### Hvordan forbedre?
1. **Flere brukerdata**: Ikke bare brukernavn, men også e-post, alder osv. (da kan du bruke flere arrays, eller vurdere objekter).  
2. **Redigere/slette brukere**: La admin gjøre endringer på brukere i denne oversikten.  
3. **Autentisering**: Husk å sjekke at kun "admin" kan se denne siden.  
4. **Dynamisk**: Kombiner med registreringssiden, slik at nye brukere dukker opp i oversikten.  

---

## Oppsummering

**Disse MWE-ene** er ment som *illustrasjoner* på deler av funksjonaliteten som er nevnt i oppgaven. De **dekker ikke alt** du trenger. Du kan kombinere dem, videreutvikle funksjonaliteten, og velge data-lagring som passer (f.eks. `localStorage`, arrays, eller en backend).

**Tips for å bygge videre:**
1. **Dataintegrasjon**: Koble registrering og innlogging sammen ved å *lagre* nye brukere i et globalt array eller `localStorage` i nettleseren.  
2. **Sessions / localStorage**: Behold info om *hvem* som er innlogget, slik at du kan vise handlekurv eller profilinfo.  
3. **Flere arrays**: Hvis du ikke vil bruke *object arrays*, kan du lage parallelle arrays for brukernavn, passord, e-post osv., der `index` 0 i hver array tilhører samme bruker.  
4. **Sikkerhet**: Ikke la alt være hardkodet i front-end, og vurder lengre passord, passordhashing, mm.  
5. **Design**: Bruk CSS til å gjøre sidene brukervennlige og pene.  