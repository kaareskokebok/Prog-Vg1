**Lag ditt eget skjema: Filmtilbakemelding**

Du skal lage et skjema der brukere kan gi tilbakemelding på en film de nettopp har sett. Skjemaet skal inneholde:

- **Navn** (input type="text")
- **Alder** (input type="number")
- **Velg filmens sjanger** (select)
    - Alternativer: Action, Komedie, Drama, Skrekk, Animasjon
- **Vurder filmen** (radio buttons)
    - Alternativer: 1 stjerne, 2 stjerner, 3 stjerner, 4 stjerner, 5 stjerner
- **Kommentar** (textarea)
- **Send inn** (submit-knapp)

**Når brukeren sender inn skjemaet, skal du i JavaScript:**

- Hente dataene fra skjemaet
- Vise en takkebeskjed som inkluderer:
    - Brukerens navn og alder.
    - Den valgte sjangeren.
    - Vurderingen gitt (antall stjerner).
    - Kommentaren brukeren har skrevet.
- Hvis brukeren har gitt mindre enn 3 stjerner, legg til en melding som spør hva som kunne vært bedre.
