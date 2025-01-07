function oversett(){
    // 1. Les inn ordet
    let ord = document.getElementById("inpOrd").value;
    // 2. Les inn valgt språk
    let lang = document.getElementById("selLang").value;
    // test: document.getElementById("txtUt").textContent = ord +" og " + lang;
    // 3. Finn indeks til ordet
    let index = -1;
    
    // Oversette til engelsk
    if (lang === "engelsk") {
        index = norsk.indexOf(ord);
    } else {
        // fiks engelsk til norsk: TODO #1
        
    }

    // 4. Bruk indeks til å finne oversettelsen
    let oversatt;
    if (lang === "engelsk") {
        oversatt = engelsk[index];
    } else {
        // fiks engelsk til norsk: TODO #2
    }
    // 5. Skriv ut til bruker
    document.getElementById("txtUt").textContent = ord + " oversettes til " + oversatt;
    // TODO #2.5: Bruk chatgpt og utvid arrayene med norsk og engelsk slik at du har de 50 mest typiske ordene på norsk!!!
    // TODO #3: FIKS og gi feilmelding når brukeren taster inn ord som ikke finnes i arrayet

    // TODO CHALLENGE #4: Legg til et tredje språk, brukeren må da velge både språket det oversettes fra og språket det skal oversettes til!!!!
}
// Når du trykker på knappen btnOversett, kjør funksjonen oversett
document.getElementById("btnOversett").addEventListener("click", oversett);

let norsk = ["hei", "morna", "eple", "kaffe"];
let engelsk = ["hello", "bye", "apple", "coffee"];

