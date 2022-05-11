// const { log } = require("console");

// // 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
// for (let i = 0; i < 5; i++) {
//   console.log("Labas");
// }
// for (let i = 0; i < 5; i++) {
//   console.log("Hello", i);
// }
// // 2.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
// for (let i = 0; i <= 4; i++) {
//   console.log(i);
// }
// // 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
// console.log("3---------------------");
// for (let i = 0; i <= 40; i += 10) {
//   console.log(i);
// }

// // 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
// console.log("4---------------------");
// for (let i = 49; i <= 53; i++) {
//   console.log(i);
// }
// // 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
// console.log("5---------------------");
// for (let i = 4; i >= 0; i--) {
//   console.log(i);
// }
// // 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
// console.log("6---------------------");
// for (let i = 0; i <= 8; i += 2) {
//   console.log(i);
// }
// // 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
// console.log("7------------------------");
// for (let i = 0; i < 5; i++) {
//   console.log(Math.floor(Math.random() * 10));
// }
// // 8 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
// console.log("8------------------------");
// let sukis = true;

// while (sukis) {
//   let randomSk = Math.floor(Math.random() * 10);

//   console.log(randomSk);

//   if (randomSk === 5) {
//     sukis = false;
//   }
// }
// // 9 console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
// console.log("9------------------------");

// // let cikluSuma = 0;

// // while (cikluSuma < 101) {
// //   let randomSk = Math.floor(Math.random() * 10);
// //   console.log(randomSk);
// //   cikluSuma += randomSk;
// // }
// // console.log("ciklu suma", cikluSuma);
// // 10 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
// console.log("10 +------------------------");

// // let sukis1 = true;

// // while (sukis1) {
// //   let randomSk = Math.floor(Math.random() * 10);

// //   console.log(randomSk);
// //   if (randomSk === 5 || randomSk === 7) {
// //     sukis1 = false;
// //   }
// // }

// //11 console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
// console.log("11------------------------");

// // let cikluSuma1 = 0;
// // let randomSuma = 0;

// // while (cikluSuma1 < 12 && randomSuma < 20) {
// //   let randomSk = Math.floor(Math.random() * 10);
// //   randomSuma += randomSk;

// //   cikluSuma1++;
// //   console.log(randomSk);
// // }

// // console.log("ciklu suma", cikluSuma);
// // console.log("random suma", randomSuma);
// // 12 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
// console.log("12 spausdina du ir nebutinai nelyginius-----------");
// let z = 0;
// let v = 0;
// let u = 0;

// while (z % 2 !== 0 && v % 2 !== 0 && u % 2 !== 0) {
//   z = Math.floor(Math.random() * 10);
//   v = Math.floor(Math.random() * 10);
//   u = Math.floor(Math.random() * 10);
// }
// console.log(z);
// console.log(v);
// console.log(u);

// // let sukis2 = true;
// // let nelyginiaiSk = 0;

// // while (sukis2) {
// //   let randomSk = Math.floor(Math.random() * 10);
// //   console.log(randomSk);

// //   if (randomSk % 2 !== 0)
// //     // Kaip sugeneruoti 3 nelyginius skaicius?
// //     nelyginiaiSk++;
// //   sukis2 = false;
// // }

// // console.log(nelyginiaiSk);

// // 13 console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
console.log("13----gaunasi tik 0");
let g = 0;
let h = 0;

while (g != 0 && h != 0) {
  g = Math.floor(Math.random() * 10);
  h = Math.floor(Math.random() * 10);
}
console.log(`${g}, ${h}`);

// // 14 console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
console.log("14------------------------");
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let skaiciuSuma1 = 0;
let skaiciuSuma2 = 0;

while (skaiciuSuma1 < 100 || skaiciuSuma2 < 100) {
  let randomSkaiciai1 = rand(0, 10);
  let randomSkaiciai2 = rand(0, 10);
  skaiciuSuma1 = randomSkaiciai1 + skaiciuSuma1;
  skaiciuSuma2 = randomSkaiciai2 + skaiciuSuma2;
  console.log(`${randomSkaiciai1}, ${randomSkaiciai2}`);
  console.log(`${skaiciuSuma1} skaiciu yra pirmame stulpelyje`);
  console.log(`${skaiciuSuma2} skaiciu yra antrame stulpelyje`);
}

// 15 console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose)
// console.log("15------------------------");
// let skaiciuok1 = 0;
// let skaiciuok2 = 0;

// do {
//   let randomSk1 = rand(0, 10);
//   let randomSk2 = rand(0, 10);
//   console.log(`${randomSk1}, ${randomSk2}`);

//   if (randomSk1 % 2 != 0) {
//     skaiciuok1++;
//   }
//   if (randomSk2 % 2 != 0) {
//     skaiciuok2++;
//   }
// if (skaiciuok1 >= 3 && skaiciuok2 >= 3) {
//   break;
// }
// }
// while (skaiciuok1 != 3 || skaiciuok2 != 3);

// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
for (let i = 0; i < 5; i++) {
  console.log('Labas');
}
// 2.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
for (let i = 0; i <= 4; i++) {
  console.log(i);
}
// 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
let a = 0;

for (let i = 0; i <= 40; i += 10) {
  console.log(i);
  while (a) {
    if (++a > 100) {
      console.log('avarija');
      break; //saugiklis
    }
  }
}
// 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
for (let i = 49; i <= 53; i++) {
  console.log(i);
}
// 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
for (let i = 4; i >= 0; i--) {
  console.log(i);
}
// 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
console.log('------------');
for (let i = 0; i <= 8; i += 2) {
  console.log(i);
}
// 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
console.log("7------------------------");

for (let i = 0; i < 5; i++) {
  num1 = rand(0, 10)
  console.log(num1);
}
// 8 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
console.log("8------------------------");
let num2 = 0;

while (num2 != 5) {
  num2 = rand(0, 10)
  console.log(num2);
}
// 9 console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
console.log("9------------------------");

let sum1 = 0;

while (sum1 <= 100) {
  sum1 += rand(1, 10)
  console.log(sum1);
}
// 10 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
console.log("10 ------------------------");

let ciklai = 0;
let num3 = 0;

while (num3 != 5 && num3 != 7) {
  num3 = rand(0, 10)
  console.log(num3);
  ciklai++
}
console.log(`Prasisuko ${ciklai} ciklai`);

//11 console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
console.log("11------------------------");
let ciklai1 = 0;
let sum2 = 0;
let num4 = 0;

while (sum2 < 20 && ciklai1 < 11) {
  sum2 = rand(0, 10)
  ciklai1++
  console.log(rand(0, 10));
}
// 12 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
console.log("12------------------------");

let nelyginiaiS = 0;

While(nelyginiaiS) {

}
console.log('egzas');
let pelyte = 0;
let kateSukasi = 0;

while (pelyte <= 20) {
  pelyte += rand(3, 5)
  kateSukasi++;
}
console.log(`Kate pagavo ${pelyte} ziurkes`);
console.log(`apisuko ${kateSukasi} kartus aplink nama`);