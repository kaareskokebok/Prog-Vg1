Nedenfor følger fem oppgaver i stigende vanskelighetsgrad, der elevene må bruke enkle HTML-input elementer (f.eks. `<input>`, `<button>`) og arrays i JavaScript for å løse praktiske og virkelighetsnære scenarioer.

### Oppgave 1: Handleliste som punktliste
**Beskrivelse:**  
Eleven skriver inn en liste med varer (f.eks. matvarer) i et tekstfelt, atskilt med komma. Ved å trykke på en knapp skal JavaScript ta innholdet i tekstfeltet, dele det opp i en array basert på komma, og deretter vise varene som en punktliste på nettsiden.

**Krav:**
- Bruk et `<input>`-element for å skrive inn alle varene (f.eks. `"epler,bananer,melk"`).
- Bruk `split()` for å lage en array av varene.
- Dynamisk generer en `<ul>`-liste med `<li>`-elementer for hver vare og vis den på siden.

---

### Oppgave 2: Summering av tall
**Beskrivelse:**
Eleven kan skrive inn et tall i et input-felt, og ved å trykke en knapp legges tallet til i en array. Ved å trykke en annen knapp skal JavaScript summere alle tallene i arrayen og vise resultatet.

**Krav:**
- Ett `<input type="number">`-felt for tallinput.
- En "Legg til"-knapp for å legge tallet til i en array.
- En "Summer tall"-knapp for å gå gjennom arrayen med en løkke eller `reduce()` og vise summen.
- Vis resultatet på siden (f.eks. i et `<p>`-element).

---

### Oppgave 3: Handlekurv med varer
**Beskrivelse:**
Eleven skriver inn et varenavn i et tekstfelt og trykker "Legg i handlekurv". Varen legges da til i en array. Når eleven er ferdig, trykker de på "Vis handlekurv", og alle varene listes ut på siden. Deretter kan man trykke "Tøm kurv" for å fjerne alt fra arrayen og fra visningen.

**Krav:**
- Ett `<input>` for varenavn.
- Knapper: "Legg i handlekurv", "Vis handlekurv", "Tøm kurv".
- Et array for varene.
- Når "Vis handlekurv" trykkes, vis en liste med varer under.
- Når "Tøm kurv" trykkes, rydd opp i både array og visning.

---

### Oppgave 4: Oppgaveliste (To-Do)
**Beskrivelse:**
Lag en enkel to-do-liste. Eleven kan skrive inn en oppgave i et tekstfelt og trykke "Legg til oppgave". Oppgaven legges da til en array. Alle oppgavene vises under i en liste. Ved siden av hver oppgave er det en "Fjern"-knapp. Når "Fjern" trykkes, skal oppgaven fjernes fra arrayen og listen oppdateres.

**Krav:**
- Ett `<input>` for oppgavetekst.
- En "Legg til oppgave"-knapp.
- Et array for oppgaver.
- En dynamisk generert liste av oppgaver, hver med en "Fjern"-knapp.
- Når "Fjern"-knappen trykkes, fjern elementet fra arrayen (f.eks. med `splice()`) og oppdater listen.

---

### Oppgave 5: Produktregister med priser og totalberegning
**Beskrivelse:**
Eleven kan registrere produkter med både navn og pris. To input-felt: ett for navn og ett for pris. Når de trykker "Legg til produkt", legges et objekt `{navn: "...", pris: ...}` til i en array. Deretter kan eleven trykke "Vis produkter" for å se en tabell med alle produktene og "Beregn total" for å få summen av alle prisene.

**Krav:**
- To input-felt: ett for produktnavn (tekst) og ett for pris (nummer).
- En "Legg til produkt"-knapp som legger inn et objekt i arrayen.
- En "Vis produkter"-knapp som viser en `<table>` med en rad per produkt (kolonner for navn og pris).
- En "Beregn total"-knapp som summerer alle prisene i arrayen og viser resultatet (f.eks. nederst i tabellen eller i et `<p>`-element).
- Bruk en løkke eller `reduce()` for å beregne totalsummen.
