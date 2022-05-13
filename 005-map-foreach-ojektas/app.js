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
// // console.table(copy);
// const n1 = ["Petras", "Asilas", "Barsukas", "Kate"];
// const n2 = ["Antanas", "Asilas", "Barsukas", "Simona"];

// const copy = n1.map((v) => v + " Valio");
// const copy1 = n1.filter((v) => false);
// const index = n1.indexOf("Drablys");

// const copy2 = n1.filter((v) => -1 != n2.indexOf(v));
// console.table(copy2);
// //for of isgeneruoja reiksmes
// //for in indeksus, labai retai naudojami ir vienas ir kitas
// // for (const ja of n1) {
// //   console.log(ja);
// // }

// //objektas
// const kazkas = 'hskfufefheiuhf'
// const namasSuKaminu = {
//   kaminas: 'yra 3 metrai',
//   gyventojai: ['Petras', 'Asilas', 'Barsukas', 'Kate'],
//   tas: kazkas
// };

// namasSuKaminu.tas = 888; //pakeiciam reiksme
// console.log(namasSuKaminu.gyventojai, namasSuKaminu.tas);
// console.log(namasSuKaminu.tas);

// //apsigyvens name su kaminu
// namasSuKaminu.animals = { cat: 'Miau', dog: 'Au' };



// //namas su kaminu kopija, naujo namo neatsirado. Jei masyva prilyginsi kitam masyvui, turesi viena ta pati masyva, nes tai tas pats, nors ir su skirtingais vardais

// const namasSuKaminu2 = namasSuKaminu;
// namasSuKaminu2.animals.cat = 'Kitas katinas'


// console.log(namasSuKaminu.animals.cat);
// //tikra kopija gaunama su slice metodu

// const n4 = n1.slice(); //kopijavimas, tik masyvui kopijuoti
// n4.shift();

// console.log(n1, n4);

// // objekto kopijavimas
// const a1 = { cat: 'Miau', dog: 'Au' };
// const a2 = { ...a1 }; //isardo a1 i gabalus. Kopija tik pavirsutine

// console.log(a1, a2);

//kaip nukopijuoti nama su kaminu?
// const namasSuKaminu2 = JSON.parse(JSON.stringify(namasSuKaminu));

// namasSuKaminu2.animals.cat = 'Kitas katinas';


// const n4 = n1.slice(); // kopijavimas
// const n4 = [...n1]; // kopijavimas
// n4.shift();

// const a1 = {cat: 'Murka', dog: 'Brisius'};

// const a2 = {...a1};


// console.log(namasSuKaminu, namasSuKaminu2);


// //map
const map = new Map(); //tusti skliausteliai

map.set('Murka', 5); // unikalus pavadinimai, kartotis negali
map.set('Pilkis', 8);
map.set('Pukis', 4);

console.log(map.get('Pilkis')); //get, kai nori kazka rasti
console.log(map.delete('Pilkis')); //trinti
console.log(map.has('Pilkis')); //ar turi Pilki?

const masmap = [...map]; //tampa masyvu. Masyvas masyve

// console.log(masmap.size)

// // ilgis, dyds skaiciuojams map.size
// SET
const se = new Set();

se.add('cat') //galima deti tik unikalias reiksmes. Unikaliu dalyku rinkinys. Objektams taikomas kaip kopijos
se.add('dog')

se.delete('dog') //istrinti

console.log(se.has({ t: 'cat' })); // ar yra sitas katinas? JO nera

console.log(se);

//isrinkti uniklias reiksmes is masyvo
const setas = new Set();
const reiksmes = [4, 8, 2, 7, 7, 4];
console.log(new Set(reiksmes));