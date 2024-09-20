To elever ønsker å lage et Mario-lignende 2D-spill. Her er en veiledning som hjelper dere i gang, inkludert anbefalt språk, ressurser og en 10-stegs fremgangsmåte.

### **Anbefalt språk og spillmotor**

**Godot Engine** er en gratis og åpen kildekode spillmotor som er ideell for 2D-spill. Den bruker **GDScript**, et enkelt og Python-lignende skriptspråk som er lett å lære.

---

### **10-stegs fremgangsmåte for spillprosjektet**

#### **1. Sett mål og planlegg spillet**

- **Beskriv konseptet**: Bestem spillmekanikk, nivådesign, karakterer og mål.
- **Lag en enkel skisse**: Tegn ut nivåer og planlegg hvordan spillet skal se ut.

#### **2. Installer Godot Engine**

- **Last ned Godot**: [Godot Engine Offisiell Side](https://godotengine.org/)
- **Installer**: Følg installasjonsinstruksjonene for ditt operativsystem.

#### **3. Lær grunnleggende GDScript**

- **Tutorials**:
  - [Offisiell GDScript-dokumentasjon](https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_basics.html)
  - [Godot Tutorials på YouTube](https://www.youtube.com/watch?v=6JpPG3aGP5I)

#### **4. Lag de grunnleggende spillressursene**

- **Grafikk**:
  - Tegn enkle sprites for hovedkarakteren, fiender og bakgrunner.
  - Verktøy: [Piskel](https://www.piskelapp.com/) for pikselkunst.
- **Lyd**:
  - Finn gratis lydeffekter og musikk på [FreeSound](https://freesound.org/) eller [OpenGameArt](https://opengameart.org/).

#### **5. Bygg hovedkarakterens bevegelser**

- **Opprett en Player-node**: Lag en ny node for spilleren i Godot.
- **Skript bevegelse**:
  - Implementer bevegelse ved hjelp av piltaster eller WASD.
  - Håndter gravitasjon og hopping hvis nødvendig.
- **Ressurs**: [2D Platformer Movement Tutorial](https://kidscancode.org/godot_recipes/2d/platform_character/)

#### **6. Design nivåene**

- **Tilemaps**:
  - Bruk Tilemaps for å lage nivåer effektivt.
  - Lag fliser fra dine egne sprites.
- **Ressurs**: [Using Tilemaps in Godot](https://docs.godotengine.org/en/stable/tutorials/2d/using_tilemaps.html)

#### **7. Legg til fiender og hindringer**

- **Fiende AI**:
  - Lag enkle fiender som patruljerer en rute.
  - Implementer kollisjon med spilleren.
- **Hindringer**:
  - Legg til feller eller bevegelige plattformer.
- **Ressurs**: [Simple Enemy AI Tutorial](https://www.youtube.com/watch?v=D0q0QeQbw9U)

#### **8. Implementer spillmekanikk**

- **Samleobjekter**:
  - Legg til mynter eller power-ups spilleren kan samle.
- **Score System**:
  - Implementer et poengsystem som oppdateres når spilleren samler objekter.
- **Liv og helse**:
  - Legg til et livssystem som reduseres ved skade.

#### **9. Test og feilsøk**

- **Spilltest**:
  - Spill gjennom nivåene for å finne og rette feil.
- **Debugging**:
  - Bruk Godots innebygde verktøy for feilsøking.
- **Feedback**:
  - La venner teste spillet og gi tilbakemelding.

#### **10. Poler og fullfør spillet**

- **Forbedre grafikk og lyd**:
  - Juster sprites og legg til flere lydeffekter.
- **Legg til en meny**:
  - Lag en startskjerm og pausemeny.
- **Optimaliser ytelse**:
  - Sørg for at spillet kjører jevnt uten lag.
- **Publisering**:
  - Eksporter spillet for PC eller web.
  - **Ressurs**: [Exporting Projects](https://docs.godotengine.org/en/stable/getting_started/workflow/export/exporting_projects.html)

---

### **Ekstra ressurser**

- **Godot Documentation**: [Godot Docs](https://docs.godotengine.org/en/stable/)
- **YouTube-kanaler**:
  - [KidsCanCode](https://www.youtube.com/c/KidsCanCode)
  - [GDQuest](https://www.youtube.com/c/Gdquest)
- **Community**:
  - [Godot Forums](https://godotforums.org/)
  - [Godot Discord Server](https://discord.gg/godot)

### **Anbefalt læringsrekkefølge**

1. **Grunnleggende GDScript og Godot-grensesnittet**
2. **Enkle 2D-konsepter og node-struktur**
3. **Spillerbevegelse og input-håndtering**
4. **Kollisjon og fysikk**
5. **Nivådesign med Tilemaps**
6. **Fiendeoppførsel og AI**
7. **Spillmekanikk som poeng og liv**
8. **Lydintegrasjon**
9. **Brukergrensesnitt og menyer**
10. **Eksportering og deling av spillet**

---

### **Oppsummering**

Ved å følge denne veiledningen kan dere trinnvis utvikle et enkelt 2D-spill som ligner på Mario. Godot Engine og GDScript gir en tilgjengelig inngang til spillutvikling, selv for nybegynnere. Husk å ta pauser, eksperimentere og ha det gøy underveis!

**Lykke til med spillutviklingen!**