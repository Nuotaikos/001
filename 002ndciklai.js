const { log } = require("console");

// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
for (let i = 0; i < 5; i++) {
  console.log("Labas");
}
for (let i = 0; i < 5; i++) {
  console.log("Hello", i);
}
// 2.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
for (let i = 0; i <= 4; i++) {
  console.log(i);
}
// 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
console.log("3---------------------");
for (let i = 0; i <= 40; i += 10) {
  console.log(i);
}

// 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
console.log("4---------------------");
for (let i = 49; i <= 53; i++) {
  console.log(i);
}
// 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
console.log("5---------------------");
for (let i = 4; i >= 0; i--) {
  console.log(i);
}
// 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
console.log("6---------------------");
for (let i = 0; i <= 8; i += 2) {
  console.log(i);
}
// 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
console.log("7------------------------");
for (let i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random() * 10));
}
// 8 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
console.log("8------------------------");
let sukis = true;

while (sukis) {
  let randomSk = Math.floor(Math.random() * 10);

  console.log(randomSk);

  if (randomSk === 5) {
    sukis = false;
  }
}
// 9 console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
console.log("9------------------------");

// let cikluSuma = 0;

// while (cikluSuma < 101) {
//   let randomSk = Math.floor(Math.random() * 10);
//   console.log(randomSk);
//   cikluSuma += randomSk;
// }
// console.log("ciklu suma", cikluSuma);
// 10 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
console.log("10 +------------------------");

// let sukis1 = true;

// while (sukis1) {
//   let randomSk = Math.floor(Math.random() * 10);

//   console.log(randomSk);
//   if (randomSk === 5 || randomSk === 7) {
//     sukis1 = false;
//   }
// }

//11 console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
console.log("11------------------------");

// let cikluSuma1 = 0;
// let randomSuma = 0;

// while (cikluSuma1 < 12 && randomSuma < 20) {
//   let randomSk = Math.floor(Math.random() * 10);
//   randomSuma += randomSk;

//   cikluSuma1++;
//   console.log(randomSk);
// }

// console.log("ciklu suma", cikluSuma);
// console.log("random suma", randomSuma);
// 12 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
console.log("12 spausdina du ir nebutinai nelyginius-----------");
let z = 0;
let v = 0;
let u = 0;

while (z % 2 !== 0 && v % 2 !== 0 && u % 2 !== 0) {
  z = Math.floor(Math.random() * 10);
  v = Math.floor(Math.random() * 10);
  u = Math.floor(Math.random() * 10);
}
console.log(z);
console.log(v);
console.log(u);

// let sukis2 = true;
// let nelyginiaiSk = 0;

// while (sukis2) {
//   let randomSk = Math.floor(Math.random() * 10);
//   console.log(randomSk);

//   if (randomSk % 2 !== 0)
//     // Kaip sugeneruoti 3 nelyginius skaicius?
//     nelyginiaiSk++;
//   sukis2 = false;
// }

// console.log(nelyginiaiSk);

// 13 console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
console.log("13----ne vienoje eiluteje");
let g = 0;
let h = 0;

while (g !== 0 && h !== 0) {
  g = Math.floor(Math.random() * 10);
  h = Math.floor(Math.random() * 10);
}
console.log(g);
console.log(h);
// 14 console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
console.log("14------------------------");
let tuscias1 = "";

while (tuscias1) {
  let randomSk = Math.floor(Math.random() * 10);
  tuscias1++;
  console.log(randomSk);
}

// 15 console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose)
console.log("15------------------------");
