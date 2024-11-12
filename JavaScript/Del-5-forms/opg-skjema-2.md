**Oppgave 1: Registreringsskjema for nyhetsbrev**

Lag et skjema der brukere kan registrere seg for et nyhetsbrev. Skjemaet skal inneholde:

- **E-postadresse** (`input type="email"`)
- **Interesser** (checkboxes)
    - Teknologi
    - Sport
    - Kunst
    - Vitenskap
- **Foretrukket format** (radio buttons)
    - HTML
    - Ren tekst
- **Send inn** (submit-knapp)

**Når brukeren sender inn skjemaet, skal du i JavaScript:**

- Hente dataene fra skjemaet.
- Vise en bekreftelsesmelding som inkluderer:
    - Brukerens e-postadresse.
    - De valgte interessene.
    - Det foretrukne formatet.
- Hvis ingen interesser er valgt, vis en melding som ber brukeren velge minst én interesse.

---

**Oppgave 2: Bestillingsskjema for pizzalevering**

Lag et skjema der brukere kan bestille en pizza. Skjemaet skal inneholde:

- **Navn** (`input type="text"`)
- **Adresse** (`textarea`)
- **Velg pizzatype** (`select`)
    - Margherita
    - Pepperoni
    - Vegetar
    - Hawaii
- **Ekstra toppinger** (checkboxes)
    - Ekstra ost
    - Oliven
    - Ananas
    - Sopp
- **Velg størrelse** (radio buttons)
    - Liten
    - Medium
    - Stor
- **Send inn bestilling** (submit-knapp)

**Når brukeren sender inn skjemaet, skal du i JavaScript:**

- Hente dataene fra skjemaet.
- Vise en ordrebekreftelse som inkluderer:
    - Brukerens navn og adresse.
    - Den valgte pizzatypen og størrelsen.
    - Eventuelle ekstra toppinger.
- Beregn totalprisen basert på størrelse og antall ekstra toppinger:
    - **Pris per størrelse:**
        - Liten: 100 kr
        - Medium: 150 kr
        - Stor: 200 kr
    - **Pris per ekstra topping:** 20 kr
- Vis totalprisen i ordrebekreftelsen.