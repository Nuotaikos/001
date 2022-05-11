//for each
// map padaro masyvo kopija ir ja grazina

// const n1 = ['Petras', 'Asilas', 'Barsukas', 'Kate'];
// const n2 = ['Antanas', 'Asilas', 'Barsukas', 'Simona'];

// const copy = n1.map(v => true); //v yra value, galima rasyti bet koki zodi. po rodykles taisykle, jei true reiksmeides i masyva, jei false nedes


// const copy22 = n1.map(v => v); //v dek ka pats duodi
// console.table(copy22);

// const copy33 = n1.map(v => false); //ides false. Nukopijuoja masyva
// console.table(copy33);

// const copy11 = n1.filter(v => true) //sitas reiksmes panaudok. Filtras padaro kopija ir turi gauti reiksme ar rasyti ar ne
// const index = n1.indexOf('Asilas') //nedaro kopiju. Kazko iesko masyve ko paprasom. Surask asila. Dek ar nedek
// const copy32 = n1.filter(v => -1 != n2.indexOf(v)) //jei -1 nelygu tai true  ir ides ta daikta

// console.log(index); //jei nesuranda spausdina indeksa (-1), jei randa 1
// console.table(copy);
const n1 = ["Petras", "Asilas", "Barsukas", "Kate"];
const n2 = ["Antanas", "Asilas", "Barsukas", "Simona"];

const copy = n1.map((v) => v + " Valio");
const copy1 = n1.filter((v) => false);
const index = n1.indexOf("Drablys");

const copy2 = n1.filter((v) => -1 != n2.indexOf(v));
console.table(copy2);