function sjekkAlder(){
    let alder = Number(inpAlder.value);

    if (alder < 13) {
        txtUt.textContent = "Du er et barn.";
    }else if (alder <= 19) {
        txtUt.textContent = "Du er en tenåring.";
    }else {
        txtUt.textContent = "Du er en voksen.";
    }
}

let txtUt = document.getElementById("txtUt");
let btn = document.getElementById("btn");
let inpAlder = document.getElementById("inpAlder");

btn.addEventListener("click", sjekkAlder);