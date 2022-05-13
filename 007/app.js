
// const tagH1 = document.querySelector('h1'); //pazymi irma taga
// const tagHK = document.querySelector('h1 + h1');

// const tagAll = document.querySelectorAll('h1'); //zymi viska. Turi masyvo savybes, foreachint, paimti elem. pagal indeksa

// console.log(tagH1);
// console.log(tagHK);
// console.log(tagAll);

// tagAll.forEach(h1 => {            //grupe foreach'insim, stiliaus uzdejimas ant elemento
//   console.log(h1)
//   h1.style.color = 'pink';
//   h1.style.backgroundColor = 'black';
//   h1.innerText = 'Valio';               //pakeisti teksta
//   h1.innerHTML = '<i>Alio alio</i>';   //html, italik ir pakeistas tekstas
// });

// //event
// const but = document.querySelector('button'); //1. susirandam elementa, kuri stebesime
// but.addEventListener('click', () => { //2. addEventListener- stebetojas; click - ivykis; () => - funkcija call back - ivykis, kuris pasileidzia kai tas ivykis ivyks
//   console.log('atliktas paspaudimas'); //3. kai pasiclikina, tik tada paleidzia sia funkcija
//   but.style.color = but.style.color == 'red' ? 'black' : 'red'; // raudonas, paspaudus juodas
// });

// tagAll.forEach(h1 => {

//   h1.addEventListener('click', e => { //e - dokumentas, kad ant to elemento buvo pastebetas ivykis
//     h1.style.color = h1.style.color == 'red' ? 'black' : 'red';
//     console.log(e);
//   });

// });

// const a = document.querySelector('a');
// a.addEventListener('click', () => {
//   e.preventDefault(); //preventinam tago veikima. si funk. paleidziama ant evento
//   a.target.style.color = 'red'; //target - tas elementas ant kurio ivykes ivykis
// });


document.querySelector('#vaikas').addEventListener('click', e => { // vaikas savo click perdave tevui ir jei nieks ant tevo nespaude, vis vien nusidaze raudonai
  e.stopPropagation();  // sustabdoma saltinyje
  console.log('vaikas');
  e.target.style.backgroundColor = 'red';
});

document.querySelector('#tevas').addEventListener('click', e => {
  console.log('tevas', e.target); // jei ivyko click ant tevo, jis nusidazo raudonai
  document.querySelector('#tevas').style.backgroundColor = 'red';
});