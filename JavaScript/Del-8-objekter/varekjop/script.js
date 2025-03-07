function leggTilVare(event) {
    if (event.key === 'Enter') {
        document.getElementById("txtUt").textContent = 'Enter key pressed!';
        // TODO: sjekk at varen er gyldig, hvis ja, legg til i totalprisen, hvis nei, gi feilmelding
        let vare = inpVare.value;
        let pris = varer[vare]; 
        // Øke totalprisen
        totalPris += pris;
        
        kvittering += `<li>${vare} : ${pris} kr</li>`;
    }
}

function visKvittering () {
    let temp = kvittering + "</ul>";
    document.getElementById("txtUt").innerHTML = temp;
}
const inpVare = document.getElementById('inpVare');
inpVare.addEventListener('keydown', leggTilVare); 

const btnAvslutt = document.getElementById('btnAvslutt');
btnAvslutt.addEventListener('click', visKvittering); 

let varer = {
    melk: 25,
    brod: 35,
    ost: 135,
    indrefilet: 350
};

let totalPris = 0;
let kvittering = "<h3>Din kvittering:<h3><ul>";

