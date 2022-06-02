console.log('Lalal');

let a = 'labas';

// let b = new String('Labas rytas');



String.prototype.tail = function () {
  return this.valueOf() + 'o-----';

}
console.log(a.tail());

// console.log(a);

class Cat {

  constructor(n) {
    console.log('Naujas katinas');
    this.name = n;
  }
  // constructor(n) {
  //   console.log('Naujas katinas');
  //   this.name = n ?? 'Bevardis';
  // }

  miau = (m = '') => {
    console.log(this.name + ' Miauuuuuuuuu!' + m);
  }
}
const myCat = new Cat('Pilkis');
const myCat22 = new Cat('Murka');

console.log(myCat.name);
console.log(myCat22.name);

myCat22.miau('bla bkal');


// class Kibiras1 {

//   constructor(n) {
//     console.log('akmenuKiekis');
//     this.name = n;
//   }
//   prideti1Akmeni = () => {
//     console.log(this.name);
//   }

// }
// const akmenuKiekis = 0;
// const prideti1Akmeni = new Kibiras1(akmenuKiekis + 1)
// const kiekPririnktaAkmenu = 0;

// console.log();


const m = new Map();

m.set(myCat22, myCat);
m.set(myCat, myCat22);


console.log(m.get(myCat22));