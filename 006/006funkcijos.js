function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//1 Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;
console.log('1----------------------');
const x = 'Gera diena';
function tekstas(l) {
  console.log(l);
}
tekstas(x);
//2 Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;
console.log('2----------------------');
let kiekSuma = 0;
function tekstas1(x, kartu) {
  for (let i = 0; i < kartu; i++) {
    console.log(x);
  }
}
tekstas1('Gera diena', 6);

//4 Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)
console.log('4----------------------');

function sveikiSk(skaicius) {
  let count = 0;

  for (let i = 2; i < skaicius; i++) {
    if (skaicius % i === 0 && i !== 1) {
      count++;
    }
  }

  return `Skaičius ${skaicius} dalijasi be liekanos iš ${count} (išskyrus vienetą ir patį save).`;
}

console.log(sveikiSk(34));

//5 Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
console.log('5----------------------');
const masyvas1 = [];
for (let i = 0; i < 100; i++) {
  masyvas1.push(rand(33, 77));
}
// function sveikiSk(skaicius) {
//   let count = 0;
//   for (let i = 2; i < skaicius; i++) {
//     if (skaicius % i === 0 && i !== 1) {
//       count++;
//     }
masyvas1.sort((a, b) => {
  if (a > b) {
    return - 1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
});
console.table(masyvas1);
//   }
// }
//6 Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.
console.log('6----------------------');
const masyvas2 = [];
for (let i = 0; i < 100; i++) {
  masyvas2.push(rand(333, 777));
  if (sveikiSk(masyvas2)) {
    masyvas2[i] !== 0
  }
}

console.log(masyvas2);
//7 Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;
console.log('7----------------------');

// susikurti masyva = 0; perkelti i monstra. 2 susikurti dar viena tokia pacia DataTransferItemList, tik irasom monstra ir visa perkeliam i monstra
const monsterSize = rand(10, 30);

const makeNiceArray = () => {
  const array = [];
  const size = rand(10, 20);
  // padaryti cikla, kuris pereitu per monsterSize, kad sugeneruot
  for (let i = 0; i < size; i++) {
    array.push(rand(0, 10));         // grazins arreju
  }
  return array;
};

let monster = [];                                  //didelis masyvas

for (let sizeNumber = 0; sizeNumber < monsterSize; sizeNumber++) { //desim nuo apacios. Paskutinis elementas = 0; rasom funkcija, kuri pagamins masyva
  const monsterPart = makeNiceArray();
  if (!sizeNumber) {
    monsterPart[monsterPart.length - 1] = 0;
  } else {
    monsterPart[monsterPart.length - 1] = monster;  //monstras gavosi didesnis uz part
  }
  monster = monsterPart;
}
console.log(monster);
// function masyvasMasyve() {
//   const masyvas3 = [];
//   masyvas3.length = rand(10, 20);
//   for (let i = 0; i < masyvas3.length; i++) {
//     masyvas3[i] = []
//     for (let k = 0; k < masyvas3.length - 1; k++) {
//       masyvas3[k] = rand(0, 10);
//     }
//   }
//   console.log(masyvas3);
// }

// masyvasMasyve();

//8 Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.
function count() {

}
console.log('8----------------------');
//9 Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.

const freakArray = [];
longArray1.forEach((v, i) => {
  freakArray[v] = longArray2[i];
});

console.log(freakArray);

const whiteCat = [rand(1, 33), rand(1, 33), rand(1, 33), rand(1, 33)];

const yesOrNo = (a, c = 3) => {
  for (let i = 0; i < c; i++) {
    if (prime(a.slice(-c)[i])) {
      return true;
    }
  }
  return false;
}

while (yesOrNo(whiteCat)) {
  whiteCat.push(rand(1, 33));
}

console.log(whiteCat);
console.log('9----------------------');
//10 Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.

console.log('10----------------------');

constprime = (a) => {
  letcount = 0;
  for (leti = 2; i < a; i++) {
    if (a % i === 0) {
      count++;
    }
  }
  return count;
};

const sqArray = [];
for (let i = 0; i < 10; i++) {
  const row = [];
  for (let y = 0; y < 10; y++) {
    row.push(rand(1, 100));
  }
  sqArray.push(row)
}

const primeSum = a => { //primesume - prime vidurkis
  let sum = 0;
  let count = 0;
  a.forEach(e => e.forEach(value => { //e -eilute, v - value
    if (!primeSum(v)) { //if visada vercia i true arba prime = 0, tada if vercia
      count++;
      sum += v;
    }
  }))
  return sum / count;

}
console.table(sqArray);
console.log(primeSum(sqArray));


// const masyvas10 = [];
// masyvas10.length = 10;
// let pirminiaiSkaiciai = 0;
// let pirminiuSkaiciuSuma = 0;


// for (let i = 0; i < masyvas10.length; i++) {
//   const masyvas10A = [];
//   for (let j = 0; j < 10; j++) {
//     masyvas10A[j] = rand(1, 100);

//     if (sveikiSk(masyvas10A[j]) === 0) {
//       pirminiaiSkaiciai += 1;
//       pirminiuSkaiciuSuma = pirminiuSkaiciuSuma + masyvas10A[j];

//     }

//   }
//   masyvas10[i] = masyvas10A
// }
// console.log(masyvas10)
// console.log(pirminiaiSkaiciai)
// console.log(pirminiuSkaiciuSuma)
