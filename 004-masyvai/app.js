'úse strict'; //gaudo klaidas https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
//masyvas //objektas
const n = ['Petras', 'Asilas', 'Barsukas', 'Kate']

console.table(n)
console.log(n[1]);

n[1] = 'Kazys' //+naujas gyventojas

// n[4] = 'Suo'  //naujas gyventojas 4 aukste
n.pop() // isvaryt is namo, ismeta kas paskutiniam aukste masyvo pabaigoj
n.shift() // ismesti is rusio, rasyti i skliaustelius nieko nereikia

n.push('Suo'); //jei namas 5 aukstu, bet mes norim apgyvendinti suni kitame sekanciame aukste
n.unshift('Pele'); // ideti is apacios ( apgyvendinti rusyje). Unshift visada = 0

n.splice(2, 1) // universalus, neskirtas trinti is masybo, bet naudojamas ir masyve. Ismesti is vidaus. Funkcija pjaustanti masyva (2-barsuko gyvenamas aukstas, 1 - vnt auksto iskirpti i virsu)



console.table(n);
console.log(n.length); //aukstu skaicius

//cilkas
for (let i = 0; i < n.length; i++) {// i < visaga su n.lenght. Praeiname per visa masyva, jei nezinom kiek aukstu naudojam while cikla

  console.log(n[i]); // i pastoviai keisis
}
//masyvas masyve

const nPlus = [
  [4, 7, 12],
  [85, 17, 12],
  [10, 33, 74],
  [26, 41, 99],
]
console.table(nPlus);
console.table(nPlus[1][0]); //85 atspausdins
console.table(nPlus[3][2]); //99 atspausdins

for (let i = 0; i < nPlus.length; i++) { //ciklina per aukstus
  for (let k = 0; k < nPlus[i].length; k++) { //ciklas cikle //ciklina per butus
    // console.log(nPlus[i]);
    // console.log(nPlus[i][k]);
  }
}
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//sukurti masyva is 100 elementu, kuriu  random skaiciu
const naujasNAmas = [];


for (let i = 0; i < 10; i++) {
  const aukstas = [];
  for (let i = 0; i < 10; i++) { // jei i < 10 atsitiktinis, vietoj konkrecios reiksmes 10 rasom rand(3, 10)
    aukstas.push(rand(10, 99));
  }
  naujasNAmas.push(aukstas);
}
console.table(naujasNAmas);


const primeSum = a => {
  let sum = 0;
  let count = 0;
  a.forEach(e => e.forEach(v => {
    if (!prime(v)) {
      count++;
      sum += v;
    }
  }));
  return count ? sum / count : 0;
}

const findMin = a => {
  let min = a[0][0];
  let coord = [0, 0];
  a.forEach((r, ri) => r.forEach((v, ci) => {
    if (v < min) {
      min = v;
      coord = [ri, ci];
    }
  }));
  return coord;
}

console.table(sqArray);

console.log(findMin(sqArray));

let s = 1000;

while (primeSum(sqArray) < 70) {
  if (--s === 0) {
    console.log('BR')
    break;
  }
  const [x, y] = findMin(sqArray);
  sqArray[x][y] += 3;

}

console.table(sqArray);