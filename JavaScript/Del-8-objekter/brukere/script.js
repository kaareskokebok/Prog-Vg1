function loggInn() {
    let user = document.getElementById("inpUser").value;
    let passw = document.getElementById("inpPass").value;

    // sjekk gyldig brukernavn
    // ! leses NOT
    if (!(user in brukerliste)) {
        document.getElementById("txtUt").textContent = "Ugyldig brukernavn";
        return;  // Avslutt funksjonen
    }

    // Sjekk passord
    if (passw === brukerliste[user]) {
        document.getElementById("txtUt").textContent = "Du er logget inn!";
    }else{
        document.getElementById("txtUt").textContent = "Feil passord";
    }
}

let btnLoggInn = document.getElementById("btnLoggInn");
btnLoggInn.addEventListener("click", loggInn);

let brukerliste = {
    jens : "1234",
    arne : "2341",
    ali : "123",
    per : "qwe",
    sara : "pen"
};

