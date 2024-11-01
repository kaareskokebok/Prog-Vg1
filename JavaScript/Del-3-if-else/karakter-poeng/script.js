function visKarakter(){
    let poeng = Number(inpPoeng.value);

    let kar = "F";  // F hvis poeng 0-59
    if (poeng >= 90) {
        kar = "A";
    }else if (poeng >= 80) {
        kar = "B";
    }
    else if (poeng >= 70) {
        kar = "C";
    }
    else if (poeng >= 60) {
        kar = "D";
    }

    let txt = `Du registrerte ${poeng} poeng, det gir karakteren ${kar}.`;
    txtUt.textContent = txt;
}

let inpPoeng = document.getElementById("inpPoeng");
let btn = document.getElementById("btnVisKarakter");
let txtUt = document.getElementById("txtUt");

btn.addEventListener("click", visKarakter);