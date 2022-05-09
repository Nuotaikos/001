// for - kai zinome kiek ciklu bus
// while - jei nezinome kiek ciklu . nuo 0 iki begalybes
// do while nuo 1 - begalybes. Netikrina pirmos salygos
//break - cilkai nutraukti nepiklausomai ar ivykdytos salygos
//continue - nutraukia vieno neuzbaigto ciklo iteracija, pvz trecio ar kito. Sugrizta atgal ir pradeda nuo naujos

// let a = 0;

// while () {
//  if(++a > 100) {
//    console.log('avarija');
//   break; //saugiklis
// }
// }

// for (let i = 0; i < 10; i++) { // for viduje uzdeklaruotas i (i =0)

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
