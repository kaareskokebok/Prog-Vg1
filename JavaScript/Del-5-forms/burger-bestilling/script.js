function bestill(event) {
    // unngå at form laster inn siden på nytt
    event.preventDefault();
    //  document.getElementById("txtUt").textContent = "test";
    // Registrer bestillingsdata
    let antall = Number(document.getElementById("inpAntall").value);
    let 
}

let skjema = document.getElementById("skjema");

// Når vi klikker bestill knappen, kjør bestill-
// funksjonen i javascript
skjema.addEventListener("submit", bestill);
