# JavaScript – BMI Calculator

## Hjemmeopgave

I denne hjemmeopgave arbejder du videre med **JavaScript functions, parameters, conditionals og logical operators**.

Du skal færdiggøre en BMI-beregner, som modtager vægt og højde som parametre, beregner BMI og placerer resultatet i den korrekte kategori.

Du arbejder selvstændigt med projektet og følger kommentarerne i filerne trin for trin.

---

# Fremgangsmåde – sådan kommer du i gang med projektet

I denne hjemmeopgave skal du bruge **GitHub Template-metoden**.

Du skal derfor **ikke downloade projektet som ZIP og ikke bruge Fork**.

Følg denne rækkefølge:

```text
GitHub Template
↓
Dit eget repository på GitHub.com
↓
GitHub Desktop
↓
Visual Studio Code
↓
Arbejd med hjemmeopgaven
↓
Commit
↓
Push
```

> Følg punkterne **ét ad gangen og i den viste rækkefølge**.

---

## 1. Opret dit eget repository på GitHub.com

Åbn det udleverede **template-repository** på GitHub.com.

Du skal være logget ind på din egen GitHub-konto.

Klik på:

**Use this template**

Vælg derefter:

**Create a new repository**

Vælg din egen GitHub-konto som ejer, og brug det repository-navn, som din underviser har angivet.

Klik derefter på:

**Create repository**

Vent et øjeblik, mens GitHub opretter dit nye repository.

### Kontrollér, at du er i dit eget repository

Når repositoryet er oprettet, skal du kontrollere navnet øverst på siden.

Det skal være **dit eget GitHub-brugernavn**, der står foran repositoryets navn.

Det kan fx se sådan ud:

```text
dit-brugernavn/js-bmi-calculator
```

> **Stop her og kontrollér dette, før du går videre.**

---

## 2. Hent dit repository ned på din computer

Nu ligger projektet på **GitHub.com**, men du skal også have det ned på din egen computer.

Åbn **GitHub Desktop**.

Vælg:

**File → Clone repository...**

Vælg fanebladet **GitHub.com**, og find det repository, du netop har oprettet.

Hvis repositoryet ikke vises, kan du i stedet vælge fanebladet **URL** og indsætte adressen til dit repository fra GitHub.com.

### Vælg, hvor projektet skal gemmes

I feltet **Local path** vælger du, hvor projektet skal ligge på din computer.

> **Local path** betyder den mappe på din computer, hvor projektets filer bliver gemt.

Klik derefter på:

**Clone**

Vent, mens GitHub Desktop henter projektet ned på din computer.

---

## 3. Åbn projektet i Visual Studio Code

Når projektet er klonet, vælg:

**Open in Visual Studio Code**

Du skal arbejde direkte i den projektmappe, som GitHub Desktop har klonet.

Kontrollér, at projektet har denne struktur:

```text
js-bmi-calculator/
│
├── index.html
├── js/
│   └── script.js
└── README.md
```

---

# Hjemmeopgaven

Du skal arbejde med disse filer:

- `index.html`
- `js/script.js`

Læs kommentarerne i koden grundigt, inden du begynder at skrive din løsning.

---

## 4. Forbind JavaScript-filen med HTML-filen

Åbn:

```text
index.html
```

I filen finder du denne kommentar:

```html
<!-- Husk fra dag 1: skriv scriptet, der linker til js/script.js, herunder -->
```

Din første opgave er at forbinde JavaScript-filen med HTML-dokumentet.

JavaScript-filen ligger i mappen:

```text
js/
```

og hedder:

```text
script.js
```

> **Vær opmærksom på filstien:** `script.js` ligger ikke i samme mappe som `index.html`, men i undermappen `js`.

Skriv selv det korrekte `<script>`-element på det angivne sted.

Gem derefter filen.

---

## 5. Åbn `js/script.js`

Start med at skrive:

```js
"use strict";
```

I filen finder du funktionen:

```js
beregnBMI()
```

Din opgave er først at tilføje de to parametre:

```text
weight
height
```

- `weight` er vægten i kilogram
- `height` er højden i meter

> Højden skal skrives som et decimaltal med **punktum**, fx `1.75` – ikke `1,75`.

---

## 6. Forstå BMI-beregningen

I funktionen er selve beregningen allerede skrevet:

```js
let bmi = weight / (height * height);
```

Den beregner BMI ud fra vægt og højde.

Din opgave er derefter at bruge resultatet i en `if / else if / else`-struktur.

---

## 7. Færdiggør `if / else if / else`-strukturen

Den første `if`-gren er allerede startet for dig:

```js
if (bmi < 18.5) {
    // ...
}
```

Du skal selv færdiggøre resten af strukturen.

Kategorierne er:

| BMI | Kategori |
|---|---|
| Under 18.5 | Undervægt |
| 18.5 til under 25 | Normalvægt |
| 25 til under 30 | Overvægt |
| 30 eller derover | Svær overvægt |

Du skal bruge:

```text
if
else if
else
>=
<
&&
```

> Vær opmærksom på grænserne. `>=` betyder **større end eller lig med**, mens `<` betyder **mindre end**.

Eksempel: En BMI på præcis `18.5` hører til **normalvægt**, ikke undervægt.

---

## 8. Udskriv resultatet i Console

I hver gren skal du udskrive BMI og kategori i browserens **Console**.

Brug kommentarerne i `script.js` som vejledning til den tekst, der skal vises.

Du skal selv skrive de nødvendige `console.log()`-kald.

---

## 9. Test funktionen

Der findes allerede dette funktionskald:

```js
beregnBMI(70, 1.75);
```

Når funktionen virker, skal du selv kalde den **2-3 gange mere** med andre kombinationer af vægt og højde.

Du kan fx bruge:

```text
55 kg og 1.70 m
70 kg og 1.75 m
85 kg og 1.75 m
100 kg og 1.70 m
```

Formålet er at teste, om alle kategorier virker som forventet.

---

## 10. Kontrollér resultatet i browseren

Åbn `index.html` med **Live Server**.

Åbn derefter browserens Developer Tools og gå til:

```text
Inspect → Console
```

Kontrollér, at de forskellige funktionskald giver det forventede resultat.

Hvis noget ikke virker:

1. Læs eventuelle fejlmeddelelser i Console.
2. Kontrollér syntaksen.
3. Kontrollér parenteser `{ }` og `( )`.
4. Kontrollér, at `weight` og `height` er skrevet som parametre.
5. Kontrollér din `if / else if / else`-struktur.
6. Kontrollér brugen af `>=`, `<` og `&&`.
7. Kontrollér, at decimaltal er skrevet med punktum.
8. Gem filerne og test igen.

---

## 11. Arbejd progressivt med commits

Du skal ikke vente med at committe, til hele hjemmeopgaven er færdig.

Lav commits løbende, når du har afsluttet en tydelig del af arbejdet.

Du kan eksempelvis lave commits efter:

```text
Forbundet JavaScript med index.html
```

```text
Tilføjet use strict og parametre
```

```text
Arbejdet med BMI-betingelser
```

```text
Færdiggjort beregnBMI-funktionen
```

```text
Testet flere BMI-værdier
```

Skriv selv korte og meningsfulde commit-beskeder, der beskriver, hvad du har ændret.

> Formålet er, at din Git-historik viser, hvordan du har arbejdet med hjemmeopgaven trin for trin.

---

## 12. Push til GitHub.com

Når du har lavet et commit i GitHub Desktop, skal du huske at klikke på:

**Push origin**

På den måde bliver dine ændringer sendt fra din computer til dit repository på GitHub.com.

Gå gerne ind på GitHub.com bagefter og kontrollér, at dine seneste commits kan ses.

---

# Når hjemmeopgaven er færdig

Kontrollér følgende:

- [ ] Jeg har oprettet mit eget repository med **Use this template**
- [ ] Jeg arbejder i mit eget repository
- [ ] Jeg har klonet projektet med GitHub Desktop
- [ ] Projektet er åbnet i Visual Studio Code
- [ ] `js/script.js` er forbundet korrekt med `index.html`
- [ ] Jeg har skrevet `"use strict";`
- [ ] Jeg har tilføjet parametrene `weight` og `height`
- [ ] Jeg har arbejdet med `if`, `else if` og `else`
- [ ] Jeg har arbejdet med `>=`, `<` og `&&`
- [ ] Jeg har færdiggjort funktionen `beregnBMI()`
- [ ] Jeg har skrevet de nødvendige `console.log()`-kald
- [ ] Jeg har testet funktionen med flere forskellige værdier
- [ ] Jeg har testet koden i browserens Console
- [ ] Jeg har lavet løbende commits
- [ ] Jeg har pushet mine commits til GitHub.com

> **Husk:** Formålet er både at træne **JavaScript functions, parameters, conditionals og logical operators** og at øve workflowet mellem **GitHub.com → GitHub Desktop → Visual Studio Code → Commit → Push**.
