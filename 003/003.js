// for - kai zinome kiek ciklu bus
// while - jei nezinome kiek ciklu . nuo 0 iki begalybes
// do while nuo 1 - begalybes. Netikrina pirmos salygos
//break - cilkai nutraukti nepiklausomai ar ivykdytos salygos
//continue - nutraukia vieno neuzbaigto ciklo iteracija, pvz trecio ar kito. Sugrizta atgal ir pradeda nuo naujos

// let a = 0;

// while () {
//  if(++a > 100) {
//   console.log('avarija');
//   break; //saugiklis
// }
// }

// for (let i = 0; i < 10; i++) { // for viduje uzdeklaruotas i (i=0)

//   if (i == 2) { //nutruks nuo antro
//     break;
//   }

//   if (i == 6) { //dings 6 ratas (7)
//     continue
//   }

//   // if (i == 6 || i == 3) { //dings 2 ratai
//   //   continue
//   // }
//   console.log(`Dabar sukasi ${ i + 1 } ratas`); //atsispausdina 10 ratu

// }

let a = 0;

let b = 0;

while (b < -10) {
  if (++a > 100) {
    //saugiklis
    console.log("avarija");
    break;
  }

  b++;
}

let c = 0;

do {
  if (++a > 100) {
    //saugiklis
    console.log("avarija");
    break;
  }

  c++;
} while (c < -10);

console.log(b, c);

for (let i = 0; i < 10; i++) {
  if (i == 2) {
    break;
  }

  if (i == 6 || i == 3) {
    continue;
  }

  console.log(`Dabar sukasi:
     ${i + 1} ratas`);
}

//CIKLAS CIKLE
for (let i = 0; i < 5; i++) {
  console.log(`Dabar eina didelis ratas: ${i + 1} ratas`);

  for (let i = 0; i < 3; i++) {
    console.log(`Dabar eina maziukas ratukas: ${i + 1} ratas`);
  }
}

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);

// leksteje gali buti rand 10 iki 30 kasniu kotleto
//kasnis susikramto per rand nuo 1 iki 10
//kasnis susikramto neaisku kaip (naudojam do, tikrinti po kiekvieno krimstelejimo)
// console.log("uzdavinys------");

// const kotletoKasniai = rand(10, 30);
// let kotletasSuvalgytasPer = 0; // 0 krimstelejimu
// // ++ yra senos reiksmes redagavimas, pridedam +1

// for (let i = 0; i < kotletoKasniai; i++) {
//   //kol i maziau uz kotleto kasnius, tol jis sukasi

//   // const gabaliuksSukramtomas = rand(1, 10); //paskaiciuoja per kiek sita gabaliuka sukramtom
//   // kotletasSuvalgytasPer += gabaliuksSukramtomas;

//   do {
//     kotletasSuvalgytasPer++; //1krimstelejimas
//   } while (rand(0, 4)); //imituojam tikimybe. Ciklas ntraukiamas kai 0. ar bigti kramtyti?
// }

// console.log(kotletasSuvalgytasPer); //per kiek sukramtai

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// leksteje gali buti 10...30 kasniu kotleto
// kasnis susikramto per rand 1...10
// kasnis susikramto neaisku kaip- tikrinti po kiekvieno krimstelejimo

const kotletoKasniai = rand(10, 30);
let kotletasSuvalgytasPer = 0;

for (let i = 0; i < kotletoKasniai; i++) {
  // const gabaliukasSukramtomas = rand(1, 10);
  // kotletasSuvalgytasPer += gabaliukasSukramtomas;

  do {
    kotletasSuvalgytasPer++;
  } while (rand(0, 2));
}

console.log(kotletasSuvalgytasPer);

// 153 eilute pakeista
// function rand(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // leksteje gali buti 10...30 kasniu kotleto
// // kasnis susikramto per rand 1...10
// // kasnis susikramto neaisku kaip- tikrinti po kiekvieno krimstelejimo

// const kotletoKasniai = rand(10, 30);
// let kotletasSuvalgytasPer = 0;

// for (let i = 0; i < kotletoKasniai; i++) {
//   // const gabaliukasSukramtomas = rand(1, 10);
//   // kotletasSuvalgytasPer += gabaliukasSukramtomas;

//   let r;
//   do {
//     r = rand(0, 2);
//     kotletasSuvalgytasPer++;
//   } while (r);
// }

// console.log(kotletasSuvalgytasPer);
