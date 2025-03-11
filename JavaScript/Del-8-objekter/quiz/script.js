// https://github.com/kaareskokebok/Prog-Vg1/tree/main/JavaScript/Del-8-objekter/quiz
function sjekkSvar(event) {
    // Sjekk om ENTER ble trykket
    if(event.key === "Enter") {
        // txtUt.textContent = "ENTER trykket";
        let brukersvar = inpSvar.value;
        // Sjekk mot fasit
        if ( brukersvar === spm1.svar ) {
            txtUt.textContent = "Riktig!";
            // TODO: oppdater poeng
        }else {
            txtUt.textContent = `Feil! Rett svar er ${spm1.svar}`;
        }
        level++;
        nesteSpm();
    }
}

function nesteSpm(){
    if(level === 2) {
        // Endre spm1 sitt spm og svar til
        // "I hvilket fylke ligger Mehamn?", "Finnmark"
        spm1.spm = "I hvilket fylke ligger Mehamn?";
        // TODO: spm1.svar

    } else if (level === 3) {
        // Endre spm1 sitt spm og svar til ditt eget spørsmål
    } else if (level === 4) {
        // Gi tilbakemelding: Quiz ferdig.
        // Vis poengene og gi tilpasset tilbakemelding. 
    }
}
// level 1, du er på spm 1
// level 2, du klarte spm 1 og får spm 2
// level 3, 3. og siste spørsmål
// tell opp poeng og gi tilbakemelding

let level = 1;
let poeng = 0;
let spm1 = {
    spm : "Hva kalles Norges lengste elv?",
    svar : "Glomma"
}

let txtSpm = document.getElementById("txtSpm");
let inpSvar = document.getElementById("inpSvar");
let txtUt = document.getElementById("txtUt");
// Plasser spørsmålet i txtSpm
txtSpm.textContent = spm1.spm;
// Knytt taste-event til input-boksen
inpSvar.addEventListener("keydown", sjekkSvar);
