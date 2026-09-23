// Husk fra dag 1: skriv "use strict" herunder
"use strict"

// Eksempel: vi opretter funktionen beregnBMI - men parametrene skal du selv skrive.
// Skriv selv: udfyld parentesen herunder med de to parametre weight og height
// (højden angives i meter, fx 1.75 - ikke i centimeter)
//
// Vigtigt: i JavaScript skrives decimaltal med PUNKTUM, ikke komma. Skriv altså 1.75, ikke 1,75.
// Skriver du 1,75, opfatter JavaScript det som to separate værdier (1 og 75), og koden vil ikke
// give det resultat, du forventer.
function beregnBMI(weight, height) {

    // Eksempel: BMI beregnes med formlen vægt divideret med (højde multipliceret med højde)
    let bmi = weight / (height * height);
    

    // Skriv resten af if/else if-kæden selv herunder. Den første gren er startet for dig.
    //
    // Bemærk grænserne: >= betyder "større end eller lig med" (tallet selv ER inkluderet i
    // intervallet), mens < betyder "mindre end" (tallet selv er IKKE inkluderet). Fx hører en
    // bmi på præcis 18.5 til normalvægt, ikke undervægt - fordi normalvægt starter ved >= 18.5
    // (inklusiv), mens undervægt kun gælder for værdier under 18.5 (eksklusiv).
   
    if (bmi < 18.5) {
        // Skriv selv: log `Din BMI er ${bmi}. Det betyder undervægt.`
        console.log (`Din bmi er ${bmi}. Det betyder undervægt`);

    }
    // Skriv selv: tilføj en else if-gren, der tjekker om bmi er 18.5 eller derover, OG mindre end 25.
    // Log i så fald: `Din BMI er ${bmi}. Det betyder normalvægt.`
    else if (bmi >=18.5 && bmi<25){

        console.log (`Din bmi er ${bmi}. Det betyder normalvægt`);
    }


    // Skriv selv: tilføj en else if-gren, der tjekker om bmi er 25 eller derover, OG mindre end 30.
    // Log i så fald: `Din BMI er ${bmi}. Det betyder overvægt.`
    else if (bmi >=25 && bmi<30){

        console.log (`Din bmi er ${bmi}. Det betyder overvægt`);
    }


    // Skriv selv: tilføj en sidste else-gren.
    // Log: `Din BMI er ${bmi}. Det betyder svær overvægt.`
    else{

        console.log (`Din bmi er ${bmi}. Det betyder svært overvægt`);
    }

}

beregnBMI(80, 1.9);
beregnBMI(60, 1.9);

// Skriv selv: kald funktionen 2-3 gange mere med andre kombinationer af weight og height,
// så du selv kan se de øvrige kategorier blive testet i konsollen.
//
// Eksempler på værdier, du kan bruge (vægt i kg, højde i meter):
//   - vægt: 55, højde: 1.70  (giver undervægt)
//   - vægt: 70, højde: 1.75  (giver normalvægt - allerede kaldt ovenfor)
//   - vægt: 85, højde: 1.75  (giver overvægt)
//   - vægt: 100, højde: 1.70 (giver svær overvægt)
