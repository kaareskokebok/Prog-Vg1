Her er den komplette HTML-koden med stilsetting i `<style>`-elementet:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Energi i Naturfag</title>
    <style>
        /* Styling av body */
        body {
            background-color: #f5f5f5;
            font-size: 16px;
        }

        /* Styling av hovedoverskriften */
        h1 {
            text-align: center;
            color: #2c3e50;
            border-bottom: 2px solid #2c3e50;
        }

        /* Styling av underoverskrifter */
        h2, h3 {
            color: #34495e;
            margin-top: 20px;
            margin-bottom: 10px;
        }

        /* Styling av avsnitt */
        p {
            color: #4d4d4d;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        /* Styling av uordnet liste */
        ul {
            padding-left: 20px;
            list-style-type: square;
        }

        /* Styling av tabeller */
        .energi-tabell {
            width: 100%;
            border-collapse: collapse;
        }

        .energi-tabell th, .energi-tabell td {
            border: 1px solid #bdc3c7;
            padding: 8px;
            text-align: left;
        }

        .energi-tabell th {
            background-color: #ecf0f1;
        }

        /* Styling av figurer */
        .energi-figur {
            text-align: center;
            margin: 20px 0;
        }

        .energi-figur img {
            border: 1px solid #ccc;
            padding: 5px;
            width: 80%; /* Juster etter behov */
        }

        .energi-figur figcaption {
            font-style: italic;
            color: #7f8c8d;
        }

        /* Styling av horisontal linje */
        hr {
            border: none;
            height: 2px;
            background-color: #95a5a6;
            margin: 40px 0;
        }

        /* Styling av konklusjonsseksjonen */
        #konklusjon {
            color: #27ae60;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <h1>Energi i Naturfag</h1>
    
    <h2>Introduksjon</h2>
    <p>Energi er et grunnleggende konsept i naturfag, som omfatter ulike former og prinsipper som styrer den fysiske verden. Det er evnen til å utføre arbeid og er essensiell i alle vitenskapelige disipliner.</p>
    
    <h2>Former for Energi</h2>
    <p>Energi eksisterer i flere former, inkludert:</p>
    <ul>
        <li>Kinetisk Energi</li>
        <li>Potensiell Energi</li>
        <li>Termisk Energi</li>
        <li>Kjemisk Energi</li>
        <li>Kjernekraft</li>
    </ul>
    
    <h2>Energikonvertering</h2>
    <p>Energi kan konverteres fra en form til en annen. For eksempel blir kjemisk energi i mat omdannet til kinetisk energi når vi beveger oss.</p>
    
    <h2>Tabeller</h2>
    <p>Nedenfor er to tabeller som illustrerer ulike former for energi og deres kilder:</p>
    
    <h3>Tabell 1: Former for Energi</h3>
    <table class="energi-tabell">
        <tr>
            <th>Form for Energi</th>
            <th>Beskrivelse</th>
        </tr>
        <tr>
            <td>Kinetisk Energi</td>
            <td>Energi i bevegelse</td>
        </tr>
        <tr>
            <td>Potensiell Energi</td>
            <td>Lagret energi</td>
        </tr>
        <tr>
            <td>Termisk Energi</td>
            <td>Energi relatert til temperatur</td>
        </tr>
    </table>
    
    <h3>Tabell 2: Energikilder</h3>
    <table class="energi-tabell">
        <tr>
            <th>Kilde</th>
            <th>Type Energi</th>
        </tr>
        <tr>
            <td>Solen</td>
            <td>Solenergi</td>
        </tr>
        <tr>
            <td>Vind</td>
            <td>Vindenergi</td>
        </tr>
        <tr>
            <td>Fossile Brensler</td>
            <td>Kjemisk Energi</td>
        </tr>
    </table>
    
    <h2>Figurer</h2>
    <figure class="energi-figur">
        <img src="kinetisk_energi.jpg" alt="Kinetisk Energi">
        <figcaption>Figur 1: Kinetisk Energi</figcaption>
    </figure>
    
    <figure class="energi-figur">
        <img src="potensiell_energi.jpg" alt="Potensiell Energi">
        <figcaption>Figur 2: Potensiell Energi</figcaption>
    </figure>
    
    <figure class="energi-figur">
        <img src="solenergi.jpg" alt="Solenergi">
        <figcaption>Figur 3: Solenergi</figcaption>
    </figure>
    
    <hr>
    
    <h2 id="konklusjon">Konklusjon</h2>
    <p>Å forstå energi og dens ulike former er avgjørende i studiet av naturfag. Det hjelper oss å forstå hvordan universet opererer og hvordan vi kan utnytte energi til ulike formål.</p>
</body>
</html>
```

**Forklaring av stilsettingen:**

- **Body:** Lys bakgrunnsfarge og standard skriftstørrelse for bedre lesbarhet.
- **Hovedoverskrift (`h1`):** Sentrumstilt med en kontrasterende farge og en bunnlinje.
- **Underoverskrifter (`h2`, `h3`):** Konsistente farger med justert marg for avstand.
- **Avsnitt (`p`):** Mørkere tekstfarge, økt linjehøyde og marg under for avstand mellom avsnitt.
- **Uordnet liste (`ul`):** Innrykk med `padding-left` og endret punktstil til firkanter.
- **Tabeller:** Fjernet HTML-borders og lagt til CSS-styling med klassen `.energi-tabell` for konsistent utseende. Bredde satt til 100%, grenser rundt celler, og bakgrunnsfarge på header-raden.
- **Figurer:** Sentrumstilt med marg over og under. Bilder har en ramme og polstring; bildeteksten er kursiv og har en nedtonet farge.
- **Horisontal linje (`hr`):** Tilpasset for å matche designet med en tykkere linje og tilpasset farge.
- **Konklusjonsseksjonen:** Bruk av ID `#konklusjon` for spesifikk styling, inkludert grønn farge og økt toppmarg.

**Merk:**

- Sørg for at bildefilene (`kinetisk_energi.jpg`, `potensiell_energi.jpg`, `solenergi.jpg`) er plassert i samme mappe som HTML-filen, eller juster `src`-attributtene i `<img>`-taggene etter behov.
- Du kan justere fargekoder og størrelser etter egne preferanser for å tilpasse designet ytterligere.

**Lykke til med prosjektet!**