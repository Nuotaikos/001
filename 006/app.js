//Funkcijos
// parametras - neturi reiksmes. Kai funkcija deklaruojam
// argumentas - tai reiksme, kai funkcija kvieciame

const c = 'bababab'
function fun1(ki, li) {
  console.log(ki);
  console.log(li); //undefined
}
fun1(c);
fun1('geras');
fun1('geras', 'zuikis');
fun1(c);

// -----
const b = 5;

function fun(ki, li) {
  console.log(ki);
  console.log(li);
  const rez1 = ki + li;
  const rez2 = ki * li;
  return [rez1, rez2]; //funkcija grazina rezultata. Tik vienintele reiksme
}

const [gavau1, gavau2] = fun(5, 7);
console.log(gavau1, gavau2);

//anonimine funkcija
const beVardo1 = function () {
  console.log('as neturiu vardo');
}
beVardo1(); //taip iskvieciama funcija be vardo



// -----
function suVardu() {
  console.log('as turiu grazu varda');
}

function suVardu() {
  console.log('bla bla bla');
}
//anonimine funkcija

const beVardo = function () {
  console.log('as neturiu vardo');
}

const strele = (t) => {
  console.log('As streline funkcija');
  return y;
}

const vienas = y => { // jei turime 1 parametra, supaprastinta funkcija be skliausteliu
  return 'As streline funkcija';
}

const du = y => 'As streline funkcija DU'; //galima praleisti garbanotus skliaustus, jei telpu i 1 eilute. Viskas returninama


// beVardo();
// suVardu();
console.log(du());
console.log(vienas());

//funkcija gali grazinti funkcija
const fancy = () => {
  return kita = () => {
    console.log('labas');
  }
}

// const fancy = () => () => console.log('labas'); //arba galima  taip parasyti

// fancy(); // grazina, bet nepaleidzia
// fancy()(); //paleidzia kita funkcija, kad atsispausdintu labas

const ja = fancy() //arba
ja();

//call back - funkcija, kuri perduoda argumentus i parametra (funkcija)

function alio(element) {
  console.log(element);
}

const array1 = ['a', 'b', 'c']; //sios reiksmes patenka i elementa
// array1.forEach(alio); //senovinis budas
array1.forEach(element => console.log(element)); //naujas
array1.forEach((element, i) => console.log(element, i)); //arba

const dv = [
  [2, 3, 4, 9, 3],
  [7, 3, 4, 9, 6],
  [4, 3, 4, 9, 2],
  [8, 3, 4, 9, 1],
];

dv.forEach(r => r.forEach(n => console.log(n)));

//metodai

const cat = { //objektas
  name: 'pilkis',
  voice: function () { console.log('Miau') }
}
cat.voice(); //yra metodai (miau) //savybes, kurios yra funkcijos yra metodai (miau)

//this
const cat1 = { //objektas
  name: 'pilkis',
  voice: function () { console.log('Miau says ' + this.name) } // this - tai yra katinas, nes issikvietem funk. viduje
}
cat1.voice();

//sort
//rusiuoja abeceles tvarka
const n = ['Petras', 'Asilas', 'Barsukas', 'Kate'];
n.sort();
console.table(n);

//rusiavimui yra call back
const n1 = ['Petras', 'Asilas', 'Barsukas', 'Kate'];
n.sort((a, b) => {
  if (a > b) {
    return - 1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
});
console.table(n1);