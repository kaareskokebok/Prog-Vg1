// Javascript her
function sjekkSvar(){
    // txtUt.textContent = "test";
    // Samle inn svar
    let svar1 = document.querySelector('input[name="radSpm1"]:checked').value;
    let svar2 = document.querySelector('input[name="radSpm2"]:checked').value;
    let poeng = 0;
    // Sjekk svar
    if (svar1 == "nei") {
        poeng++;
    }
    if (svar2 == "Lage variabler"){
        poeng++;
    }

    
    txtUt.innerHTML = `Du svarte <strong>${svar1}</strong> på spm1, <br>
    og <strong>${svar2}</strong> på spm2.<br>
    Du fikk ${poeng} av 2 mulige.`;

}

let btnSjekkSvar = document.getElementById("btnSjekkSvar");
let txtUt = document.getElementById("txtUt");

btnSjekkSvar.addEventListener("click", sjekkSvar);