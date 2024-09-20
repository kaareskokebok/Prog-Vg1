# Oppgaveark: Styling av en HTML-side med Grunnleggende CSS

**Mål:**  
Bruk din kunnskap om CSS-selektorer og styling-egenskaper for å forbedre utseendet til den gitte HTML-siden om "Energi i Naturfag".

**Hva du har lært så langt:**

- **Selektorer:** Element-tag, klasse- og id-selektorer.
- **Styling-egenskaper:** `border`, `padding`, `margin`, `font-size`, `width`, `color`, `background-color`.

---

## Instruksjoner:

Nedenfor finner du en rekke oppgaver som veileder deg gjennom styling av HTML-siden. Følg hvert steg nøye, og vær kreativ innenfor rammene av instruksjonene.

### **Trinn 1: Forberedelser**

1. **Legg til et `<style>`-element i `<head>`:**
   - Åpne din `energi.html` fil.
   - Inne i `<head>`-seksjonen, etter `<title>`, legg til et `<style>`-element der du vil skrive din CSS-kode.
     ```html
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Energi i Naturfag</title>
         <style>
             /* Din CSS-kode her */
         </style>
     </head>
     ```

### **Trinn 2: Styling av Body**

2. **Sett bakgrunnsfarge og skrift:**
   - Bruk element-selektoren for å style `<body>`-taggen.
   - Sett en lys bakgrunnsfarge for siden ved hjelp av `background-color`.
   - Velg en passende skriftstørrelse for brødteksten med `font-size`.

### **Trinn 3: Styling av Overskrifter**

3. **Style hovedoverskriften:**
   - Bruk element-selektoren for `<h1>`.
   - Sentrumstill hovedoverskriften.
   - Endre fargen til en som står i kontrast til bakgrunnen.
   - Legg til en bunnlinje under hovedoverskriften med `border`.

4. **Style underoverskrifter:**
   - Bruk element-selektoren for `<h2>` og `<h3>`.
   - Velg en farge som harmonerer med hovedoverskriften.
   - Juster `margin` for å skape luft over og under overskriftene.

### **Trinn 4: Styling av Avsnitt og Lister**

5. **Style avsnittsteksten:**
   - Bruk element-selektoren for `<p>`.
   - Sett tekstfargen for bedre lesbarhet med `color`.
   - Juster `line-height` for å forbedre linjeavstanden.

6. **Style den uordnede listen:**
   - Bruk element-selektoren for `<ul>`.
   - Legg til `padding-left` for å innrykke listeelementene.
   - Tilpass listestiltypen hvis ønskelig med `list-style-type`.

### **Trinn 5: Styling av Tabeller**

7. **Legg til klasser til tabellene:**
   - I HTML-filen, legg til en klasse til hver `<table>`-tag, for eksempel `class="energi-tabell"`.
     ```html
     <table class="energi-tabell">
     ```

8. **Style tabellene ved hjelp av klasse-selektor:**
   - Bruk klasse-selektoren `.energi-tabell` til å style begge tabellene.
   - Fjern `border="1"` fra HTML og bruk CSS for å legge til grenser.
   - Sett tabellbredden til 100% av containeren med `width`.
   - Legg til grenser, polstring og bakgrunnsfarger til tabellcellene med `border`, `padding` og `background-color`.

### **Trinn 6: Styling av Bilder og Figurer**

9. **Legg til klasser til figurene:**
   - I HTML-filen, legg til en klasse til hver `<figure>`-tag, for eksempel `class="energi-figur"`.
     ```html
     <figure class="energi-figur">
     ```

10. **Style figurene ved hjelp av klasse-selektor:**
    - Bruk klasse-selektoren `.energi-figur` for å style alle figurene.
    - Sentrumstill bildene.
    - Legg til en kantlinje og polstring rundt bildene med `border` og `padding`.
    - Style `<figcaption>` for å kursivere og sentrere teksten med `font-style` og `text-align`.

### **Trinn 7: Forbedre Horisontal Linje**

11. **Style `<hr>`-elementet:**
    - Bruk element-selektoren for `<hr>`.
    - Endre farge, høyde og stil for å matche designet ditt med `background-color`, `height` og `border`.

### **Trinn 8: Legge til en ID-selektor**

12. **Legg til en ID til konklusjonsseksjonen:**
    - I HTML-filen, legg til en `id` til `<h2>`-taggen i Konklusjonsseksjonen, for eksempel `id="konklusjon"`.
      ```html
      <h2 id="konklusjon">Konklusjon</h2>
      ```

13. **Style konklusjonsseksjonen ved hjelp av ID-selektor:**
    - Bruk `#konklusjon`-selektoren for å spesifikt style Konklusjonsoverskriften.
    - Endre fargen og legg til en toppmargin med `color` og `margin-top`.

### **Trinn 9: Justere Marginer og Polstring**

14. **Juster marginer og polstring for seksjoner:**
    - Bruk element- eller klasse-selektorer hvis du legger til klasser til seksjonene.
    - Øk `margin-bottom` på avsnitt for å legge til mellomrom mellom dem.
    - Legg til `padding` til seksjoner for å skape luft inni dem.

### **Trinn 10: Siste Justeringer**

15. **Style sidefoten (hvis aktuelt):**
    - Hvis det er en sidefot, style den slik at den komplementerer resten av siden.

16. **Sikre Konsistens:**
    - Gå gjennom CSS-en din i `<style>`-elementet for å sikre at stilene er konsistente på tvers av lignende elementer.

17. **Valider CSS-en din:**
    - Bruk et CSS-valideringsverktøy for å sjekke for eventuelle feil.

---

## **Ekstra Utfordringer (Valgfritt):**

- **Responsivt Design:**
  - Gjør bildene responsive ved å sette `max-width` til 100% og `height` til auto.

- **Hover-effekter:**
  - Legg til en hover-effekt på tabellrader eller bilder ved hjelp av `:hover`-selektoren.

- **Egendefinerte Skrifter:**
  - Bruk en webfont for å forbedre typografien på siden.

- **Forståelse av Boksmodellen:**
  - Eksperimenter med `box-sizing`-egenskapen for å se hvordan den påvirker bredde og polstring.

---

## **Innlevering:**

- Lagre de endelige endringene i `energi.html`.
- Sørg for at alle stiler er korrekt anvendt når du åpner `energi.html` i en nettleser.
- Lever inn filen din i henhold til instruksjonene fra læreren din.

---

**Tips:**

- Hold koden din organisert og kommentert for bedre lesbarhet.
- Test stilene dine jevnlig ved å oppdatere nettleseren etter endringer.
- Husk at CSS i `<style>`-elementet påvirkes av rekkefølgen; stilene erklært senere kan overstyre tidligere deklarasjoner.

**Lykke til og ha det gøy med styling!**