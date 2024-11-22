function bestill(event) {
    // unngå at form laster inn siden på nytt
    event.preventDefault();
    //  document.getElementById("txtUt").textContent = "test";
    // Registrer bestillingsdata
    let antall = Number(document.getElementById("inpAntall").value);
    let str = document.getElementById("selSize").value;
    let drikke = document.querySelector('input[name="radDrikke"]:checked').value;

    // Lag bekreftelsestekst
    let txt = `<h3>Din bestilling</h3>
    <ul>
    <li>Antall burgere: ${antall}</li>
    <li>Størrelse: ${str}</li>
    <li>Drikke: ${drikke}</li>
    </ul>
    <hr>
    <p>Håper maten smaker, velkommen tilbake!</p>
    `;
    document.getElementById("txtUt").innerHTML = txt;
}

let skjema = document.getElementById("skjema");

// Når vi klikker bestill knappen, kjør bestill-
// funksjonen i javascript
skjema.addEventListener("submit", bestill);
