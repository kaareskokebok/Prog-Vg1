function visGjester(){
    let txt = "<h2>Gjestene</h2>";
    for (let i=0; i<rommene.length; i++) {
        // så lenge rommet ikke er tomt, legg det til
        if (rommene[i] !== "") {
        txt += rommene[i] + "<br>";
        }
    }
    //console.log(txt)
    txtUt.innerHTML = txt; 
}

function visAntallGjester() {
    let antall = 0;
    for (let rom of rommene) {
        // Øk antall med 1, på alle rom som IKKE er tomme
        if (rom !== "") {
            antall++;
        }
    }
    txtUt.textContent = `Det bor ${antall} gjester på hotellet`;
}


let rommene = ["", "arne", "per", "", "sara"];

let txtUt = document.getElementById("txtUt");
document.getElementById("btnVisAlleGjester").addEventListener("click", visGjester);

document.getElementById("btnVisAntallGjester").addEventListener("click", visAntallGjester);
