function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('Antras užduočių lapas');
// 1.	Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
const pinigine = [];
const piniginesAtsitiktinisSk = rand(10, 30);

for (let i = 0; i < piniginesAtsitiktinisSk; i++) {
  const pinigai = (rand(0, 10))
  for (let k = 0; k < pinigine.length; k++) {
  }
  pinigine.push(pinigai);
}

console.table(pinigine);

// 2.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
console.log('2----------------------');

let suma = 0;
for (let i = 0; i < pinigine.length; i++) {
  suma = pinigine[i] + suma;
}
console.log(suma);

// 3.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
console.log('3----------------------');
let popieriniaiPinigai = 0;

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] > 2)
    popieriniaiPinigai = pinigine[i] + popieriniaiPinigai;
}
console.table(popieriniaiPinigai);

// 4.	Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
console.log('4----------------------');
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] <= 2)
    pinigine[i] = 0
}
console.log(pinigine);

// 5.	Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
console.log('5----------------------');
let max = 0;
let countMax = 0;

for (let i = 0; i < pinigine.length; i++) {
  max = Math.max(...pinigine)
  // if (pinigine[i] > max) {
  //   max = pinigine[i]
  // }
  if (pinigine[i] === max) {
    countMax++;
  }
}
console.log(`Didziausia reiksme ${max} ir ju yra masyve ${countMax}`);

// 6.	Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
console.log('6----------------------');
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] === 0)
    pinigine[i] = `indeksas ${i}`
  console.log(pinigine[i]);
}

// 7.	Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
console.log('7----------------------');
for (let i = pinigine.length; i < 30; i++) {
  pinigine.push(rand(0, 10))
}
console.log(pinigine);
// 8.	Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
console.log('8----------------------');
let centai = [];
let eurai = [];
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] <= 2) {
    centai.push(pinigine[i]);
  }
  if (pinigine[i] > 2) {
    eurai.push(pinigine[i]);
  }
}
console.log(centai);
console.log(eurai);
console.log(`Masyvas centai: ${centai}`);
console.log(`Masyvas eurai: ${eurai}`);

// 9.	Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
console.log('9 kitaPinigine- teisingas variantas');

const kitaPinigine = [];

kitaPinigine.push(centai, eurai);

console.log(kitaPinigine);

console.log('9 antras variantas-------------------');
for (let i = 0; i < centai.length; i++) {
}
for (let k = 0; k < eurai.length; k++) {
}
console.log(centai);
console.log(eurai);


// 10.	Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
console.log('10----------------------');
const korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

for (let i = 0; i < pinigine.length; i++) {
  kitaPinigine.push(korteles)
}
console.table(kitaPinigine);

// 11.	Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
console.log('11----------------------');
korteles.sort();
console.log(korteles);
// 12.	Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
console.log('12----------------------');
const naujosMokejimoKorteles = ['MasterCard', 'Visa']
for (let i = 0; i < kitaPinigine.length; i++) {
  // kitaPinigine.push(rand(naujosMokejimoKorteles[i]);
  naujosMokejimoKorteles.push(kitaPinigine[Math.floor(Math.random() * 20)]);
}
console.log(naujosMokejimoKorteles);
// 13.	Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
console.log('13--skaiciu vienodas visada--------------------');
let countMasterCard = 0;
let countVisa = 0;

for (let i = 0; i < korteles.length; i++) {
  if (korteles[i] === 'masterCard') {
    count++
  }
  if (korteles[i] === 'visa') {
    count++
  }
}
if (countMasterCard > countVisa) {
  console.log('Daugiau Mastercard korteliu');
}
if (countMasterCard < countVisa) {
  console.log('Daugiau Visa korteliu');
} else {
  console.log('Korteliu skaicius vienodas');
}
// 14.	Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
console.log('14----------------------');
const naujasSkyrelis = [];


for (let i = 0; i < 10; i++) {
  const loterijosBilietai = rand(1000000000, 9999999999);
  naujasSkyrelis.push(loterijosBilietai);
}
kitaPinigine.push(naujasSkyrelis);
console.log(naujasSkyrelis);
console.log(kitaPinigine);
// 15.	Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
console.log('15----------------------');

naujasSkyrelis.sort((a, b) => {
  if (a > b) {
    return - 1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
});
console.table(naujasSkyrelis);
// 16.	Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
console.log('16----------------------');
const smulkusEurai = rand(3, 10);
sumaSmulkusEurai = 0;

do {
  eurai.push(smulkusEurai);
  sumaSmulkusEurai += smulkusEurai;

} while (sumaSmulkusEurai !== 500);
console.log(eurai);


// let s = 1000;

// for (let i = 0; i < eurai.length; i++) {
//   eurai.push(rand(3, 10))
//   if (--s === 0) {
//     console.log('BR')
//     break;
//   }
// }
console.log(kitaPinigine);
// 17.	Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
// 18.	 Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;


// 16.p.	Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
console.log('16 p ---------------------');

const mazosKup = rand(3, 10);
sumaMK1 = 0;

do {
  eurai.push(mazosKup);
  sumaMK1 = sumaMK1 + mazosKup;
}
while (sumaMK1 !== 500) {
  console.log(eurai);
}