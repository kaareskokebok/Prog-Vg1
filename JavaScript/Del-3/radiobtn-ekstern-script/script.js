// Javascript her
function sjekkSvar(){
    // txtUt.textContent = "test";
    let svar1 = document.querySelector('input[name="radSpm1"]:checked').value;

    txtUt.textContent = `Du svarte ${svar1} på spm1.`;

}

let btnSjekkSvar = document.getElementById("btnSjekkSvar");
let txtUt = document.getElementById("txtUt");

btnSjekkSvar.addEventListener("click", sjekkSvar);