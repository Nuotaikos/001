console.log("--------------");
let valandos = 22;

if (valandos >= 6 && valandos < 12) {
  console.log("Labas rytas", valandos);
} else if (valandos >= 12 && valandos < 18) {
  console.log("Laba diena", valandos);
} else if (valandos >= 18 && valandos < 22) {
  console.log("Labas vakaras", valandos);
} else console.log("Labanaktis", valandos);

//1. Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()
console.log("1------------");

function random() {
  const random = Math.floor(Math.random() * 5);
  return random;
}
const sk1 = random();
const sk2 = random();
console.log("sk1", sk1);
console.log("sk2", sk2);

if (sk1 > sk2) {
  const rezultatas = sk1 / sk2;
  if (isFinite(rezultatas)) {
    console.log(rezultatas);
  } else {
    console.log("nedalinam is nulio");
  }
} else if (sk1 < sk2) {
  const rezultatas = sk2 / sk1;
  if (isFinite(rezultatas)) {
    console.log(rezultatas);
  } else {
    console.log("=");
  }
  // if(sk1>sk2){
  //   if(sk2>sk3){
  //   }
  // }
  // 2. Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.
  console.log("2------------");

  function random() {
    const random = Math.floor(Math.random() * 26);
    return random;
  }
  const ska1 = random();
  const ska2 = random();
  const ska3 = random();
  console.log("ska1 =", ska1);
  console.log("ska2 =", ska2);
  console.log("ska3 =", ska3);

  if (ska1 > ska2 && ska2 > ska3) {
    console.log(ska2);
  } else if (ska1 < ska2 && ska2 < ska3) {
    console.log(ska3);
  } else {
    console.log(ska1);
  }

  // 3. Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log().
  console.log("3------------");
  function random() {
    const random = Math.floor(Math.random() * 10);
    return random;
  }
  const a = random();
  const b = random();
  const c = random();
  console.log(a);
  console.log(b);
  console.log(c);

  if (a + b > c && a + c > b && c + b > a) {
    console.log("bus trikampis");
  } else {
    console.log("Trikampio nebus");
  }
}

// 4. Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()
console.log("4------------");
function random() {
  const random = Math.floor(Math.random() * 2);
  return random;
}

const skai1 = random();
const skai2 = random();
const skai3 = random();
const skai4 = random();
let kiekYraNuliu = 0;
let kiekYraVienetu = 0;
let kiekYraDvejetu = 0;
if (skai1 === 0) {
  kiekYraNuliu = kiekYraNuliu + 1;
} else if (skai1 === 1) {
  kiekYraVienetu = kiekYraVienetu + 1;
} else {
  kiekYraDvejetu = kiekYraDvejetu + 1;
}

if (skai2 === 0) {
  kiekYraNuliu = kiekYraNuliu + 1;
} else if (skai2 === 1) {
  kiekYraVienetu = kiekYraVienetu + 1;
} else {
  kiekYraDvejetu = kiekYraDvejetu + 1;
}

if (skai3 === 0) {
  kiekYraNuliu = kiekYraNuliu + 1;
} else if (skai3 === 1) {
  kiekYraVienetu = kiekYraVienetu + 1;
} else {
  kiekYraDvejetu = kiekYraDvejetu + 1;
}
if (skai4 === 0) {
  kiekYraNuliu = kiekYraNuliu + 1;
} else if (skai4 === 1) {
  kiekYraVienetu = kiekYraVienetu + 1;
} else {
  kiekYraDvejetu = kiekYraDvejetu + 1;
}
console.log(kiekYraNuliu);
console.log(kiekYraVienetu);
console.log(kiekYraDvejetu);
console.log("skai1 =", skai1);
console.log("skai2 =", skai2);
console.log("skai3 =", skai3);
console.log("skai4 =", skai4);

//5. Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

console.log("5------------");
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 3; i++) {
  let value = random(-10, 10);

  if (value < 0) {
    console.log(`+${value}+`);
  }
  if (value > 0) {
    console.log(`-${value}-`);
  }
  if (value === 0) {
    console.log(`*${value}*`);
  }
}
// 6. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
console.log("6------------");

let zvakiuKiekis = random(5, 3000);
console.log(zvakiuKiekis);
let zvakesKaina = 1;
console.log(zvakesKaina);

if (zvakiuKiekis >= 1000 && zvakiuKiekis < 2000) {
  zvakesKaina = zvakesKaina * zvakiuKiekis * 0.3;
  console.log(`Perkant ${zvakiuKiekis} žvakių, taikoma 3 % nuolaida`);
} else if (zvakiuKiekis >= 2000) {
  zvakesKaina = zvakesKaina * zvakiuKiekis * 0.4;
  console.log(`Perkant ${zvakiuKiekis} žvakių, taikoma 4 % nuolaida`);
}

//7. Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()
console.log("7------------");
function random() {
  const random = Math.floor(Math.random() * 101);
  return random;
}
const kintamieji = random[(k, l, m)];
console.log(kintamieji);

// const KintamujuSuma = 0;
// console.log(k1, k2, k3);
// if (k1 + k2 + k3 / length) {
//   aritmetinisVidurkis = console.log();
// }
