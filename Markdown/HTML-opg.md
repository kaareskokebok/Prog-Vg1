### Oppgave: Lag en nettside for å presentere dyr i en dyrehage

Du skal nå lage en nettside som presenterer ulike dyr i en dyrehage. Nettsiden skal inneholde informasjon om dyrene, samt bilder, lister, lenker, og mer. Følg stegene nedenfor for å fullføre oppgaven:

#### Steg 1: Grunnleggende HTML-struktur
1. Lag en ny HTML-fil og gi den et passende navn (f.eks. `dyrehage.html`).
2. Inkluder den grunnleggende HTML-strukturen:
   ```html
   <!DOCTYPE html>
   <html lang="no">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Dyrehagen</title>
   </head>
   <body>
   </body>
   </html>
   ```

#### Steg 2: Legg til innhold
3. I `<body>`-taggen skal du legge til følgende elementer:

   - **Hovedoverskrift:** Lag en `<h1>`-tag med tittelen "Velkommen til Dyrehagen".
   - **Introduksjon:** Legg til et avsnitt (`<p>`) som introduserer nettsiden og formålet med den. F.eks.: "Her kan du lære mer om noen av dyrene du kan møte i vår dyrehage."
   
   - **Dyreseksjoner:** For hvert dyr du skal presentere, lag en egen seksjon med følgende innhold:
     - **Undertittel:** Bruk en `<h2>`-tag for å presentere navnet på dyret (f.eks. "Løven").
     - **Bilde:** Legg til et bilde av dyret ved hjelp av `<img>`-taggen. Bruk en URL til et bilde du finner på nettet eller bruk bilder du har på maskinen.
     - **Beskrivelse:** Skriv en kort beskrivelse av dyret i et avsnitt (`<p>`).
     - **Fakta:** Lag en liste med tre fakta om dyret ved hjelp av en unummerert liste (`<ul>`).
     - **Video:** Inkluder en innebygd video (`<iframe>`) som viser dyret i sitt naturlige miljø eller i dyrehagen. Finn en passende YouTube-video.
     - **Mer informasjon:** Legg til en lenke (`<a>`) som leder til en nettside med mer informasjon om dyret. F.eks.: "Les mer om løver her."

   Gjenta denne prosessen for minst tre forskjellige dyr (f.eks. Løve, Elefant, og Sjiraff).

#### Steg 3: Ekstraelementer
4. Legg til følgende elementer som ikke ble brukt i den opprinnelige nettsiden:
   - **Tabell:** Lag en tabell som viser en oversikt over når dyrehagen er åpen (dager og tider). Tabellen skal ha to kolonner: "Dag" og "Åpningstider".
   - **Liste i en liste:** Lag en nestet liste som viser matvanene til et av dyrene. F.eks., hva en løve spiser (kjøtt), og under det hvilke typer dyr (antiloper, bøfler, sebraer).

   Eksempel på en nestet liste:
   ```html
   <ul>
       <li>Kjøtt
           <ul>
               <li>Antiloper</li>
               <li>Bøfler</li>
               <li>Sebraer</li>
           </ul>
       </li>
   </ul>
   ```

#### Steg 4: Avslutning
5. Legg til en horisontal linje (`<hr>`) før du avslutter nettsiden din.
6. Til slutt, legg til et `<footer>`-element nederst på siden som inneholder en enkel tekst, f.eks. "Laget av [Ditt navn] &copy; 2024. Velkommen til Dyrehagen!"

#### Ekstraoppgave: Stilsetting med CSS
For de som ønsker en utfordring, kan du legge til en `<style>`-tag i `<head>`-seksjonen og style de forskjellige elementene. Du kan f.eks. bruke forskjellige farger, bakgrunnsfarger, justere marger, og mer.

**Tips:** Sjekk nettsiden din i en nettleser for å se hvordan den ser ut, og gjør eventuelle justeringer. Husk å ha det gøy og være kreativ! Lykke til!