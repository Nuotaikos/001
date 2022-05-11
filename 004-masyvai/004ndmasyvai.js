function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
console.log("1.----------------");
const masyvas = [];
for (let i = 0; i < 30; i++) {
  masyvas.push(rand(5, 25));
}
console.table(masyvas);


// let kiekYraDidesniuReiksmiu = 0;
// if (masyvas > 10) {
//   kiekYraDidesniuReiksmiu += 1;
//   console.log(masyvas.length);
// }
//2. Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log("2a----------------");

let max = 0;
for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > 10) {
    max++
  }
}
console.log(max);
// Raskite didžiausią masyvo reikšmę ir jos indeksą;
console.log("2b----------------");

let maxReiksme = masyvas[0];
let maxIndexas = 0;

for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > maxReiksme) {
    maxReiksme = masyvas[i]
    maxIndexas = i
  }
}
// if (masyvas[i] > max && masyvas[i] > maxReiksme) {
//   maxIndexas = i;
//   max = masyvas[i];
// }
console.log(maxReiksme)
console.log(maxIndexas);
// Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
console.log("2c----------------");

let sum = 0;
for (let i = 0; i < masyvas.length; i++) {

  if (masyvas[i] % 2 === 0) {
    sum = masyvas[i] + sum
  }
}
console.log(sum);


// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
console.log("2d----------------");
const masyvas1 = [];
const masyvasCopy = [...masyvas]
// for (let i = 0; i < 30; i++) {
//   masyvas1.push(masyvas[i]);
// }
console.log(masyvasCopy);

// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
console.log("2e----------------");
console.log();

for (let i = 0; i < 10; i++) {
  let random = rand(5, 25)
  masyvas.push(random)
}
console.log(masyvas)
// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
console.log("2f----------------");
const masyvas2 = [];
const masyvas3 = [];
for (let i = 0; i < masyvas.length; i++) {

  if (i % 2 != 0) {
    masyvas2.push(masyvas[i]);
  } else {
    masyvas3.push(masyvas[i]);
  }

}
console.table(masyvas2);
console.table(masyvas3);


// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
console.log("2g----------------");
for (let i = 0; i < masyvas.length; i++) {
  if (i % 2 == 0 && masyvas[i] > 15) {
    masyvas[i] = 0;
  }
}
console.log(masyvas);
// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
console.log("2h----------------");
let min = 0;
for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > 10) {
    min = i;
    break
  }
}
console.log(min);
//3 Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
console.log("3----------------");
const raides = ["A", "B", "C", "D"];
const masyvas4 = [];
for (let i = 0; i < 200; i++) {
  masyvas4.push(raides[rand(0, 3)]);
}
console.log(masyvas4);

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < masyvas4.length; i++) {
  if (masyvas4[i] === 'A') {
    countA++;
  }
  if (masyvas4[i] === 'B') {
    countB++;
  }
  if (masyvas4[i] === 'Ç') { // kazkodel C yra 0
    countC++;
  }
  if (masyvas4[i] === 'D') {
    countD++;
  }
}

console.log(`Raidžių masyve yra: A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`);
//4 Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
console.log("4----------------");
//5 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
console.log("5----------------");
let masyvas5 = [];
let masyvas6 = [];

for (let i = 0; i < 100; i++) {
  masyvas5.push(rand(100, 999));
}
console.log(masyvas5);

let unikaliR = 0;
for (i = 0; i < unikaliR - 1; i++) {
  if (masyvas5.ChartAt(i) !== masyvas5.ChartAt(i + 1))
    unikaliR++
}
console.log(unikaliR);

for (let i = 0; i < 100; i++) {
  masyvas6.push(rand(100, 999));
}
console.log(masyvas6);

let unikaliR1 = 0;
for (i = 0; i < unikaliR1 - 1; i++) {
  if (masyvas6.ChartAt(i) !== masyvas6.ChartAt(i + 1))
    unikaliR1++
}
console.log(unikaliR1);

//6 Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
console.log('6----------------------');
let masyvas7 = [];
// const masyvasCopy7 = [...masyvas];
// const masyvasCopy8 = [...masyvas1];
for (let i = 0; 0 < masyvas.lenght; i++) {
  console.log(masyvas7);
} if (masyvas7 !== masyvas1) {
  masyvas7++;
}
//7 Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose. (ar egzituojA reiksme find)
//what ko ieskoti, push ieskom tu kate? Tu kate? PVZ
// const copy3 = [];
// for (let i = 0; i < n1.length; i++) {
//   const what = n1[i];
//   for (let k = 0; k < n2.length; k++) {
//     if (n2[k] == what) {
//       copy3.push(what);
//       break;
//     }
//   }
// }

// console.table(copy3);

//8 Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.

//9 Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
let masyvas10 = [rand(5, 25), randrand(5, 25)];
for (let i = 2; i < 10; i++) {
  masyvas10.push(masyvas10[i - 1] + masyvas10[i - 2])
  console.log(masyvas10[i]);
}
// for (let i = 0; i + 1 < 10; i++) {
//   masyvas10.push(masyvas10[i] + masyvas10[i + 1])
// }
console.log(masyvas10);

// const ma = [rand(1, 3), rand(1, 3)];
// for (let i = 2; i < 10; i++) { // nuo 2 prasideda, nes pirmos dvi reiksmes virsuje jau israsytos
//   ma.push(ma[i - 1] + ma[i - 2]);
// }

// console.table(ma);