document.getElementById('sporreskjema').addEventListener('submit', 
    function(event) { 
        event.preventDefault(); // Forhindrer at siden laster inn på nytt

        // Lese inn data
        let navn = document.getElementById("inpNavn").value;
        // Konverterer til Number 
        let alder = Number(document.getElementById("inpAlder").value);
        let farge = document.getElementById("selFavfarge").value;
        // Lese inn valgt radio-item
        let kjonn = document.querySelector('input[name="radKjonn"]:checked').value;
        
        // Output
        let txt = `<h3>Dine data</h3>
        <ul>
        <li>Navn: ${navn}</li>
        <li>Favorittfarge: ${farge}</li>
        <li>Alder: ${alder}</li>
        <li>Kjønn: ${kjonn}</li>
        </ul>`;

        document.getElementById("txtUt").innerHTML = txt;
    }

);