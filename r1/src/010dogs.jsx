import { useState } from 'react';
import './App.css';
import randColor from './Functions/randColor';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
dogs.sort();

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="kvc">
          {
            dogs.map((d, i) => <div className="kv" key={i}>{i}. {d}</div>)
          }
        </div>
        <div className="kvc">
          {
            dogs.map((d, i) => <div className="circle" key={i}>{i}. {d}</div>)
          }
        </div>
        <div className='kvc'>
          {
            dogs.map((d, i) => <div className={i % 2 === 0 ? 'kv' : 'circle'} key={i}>{i}. {d}</div>)
          }
        </div>
        <div className='kvc'>
          {
            dogs.map((d, i) => <div className={i % 2 === 0 ? 'kv' : 'circle'} key={i}>{i}. {d}</div>)
          }
        </div>
        <div className='kvc'>
          {
            //   dogs.map((d, i) => dog[0] !== dog[0].toUpperCase() ? 'green' : 'red' < div className = 'circle' key = { i } > { dog }</div>:<div key={i}></div>)
            // }
            {/* txt.charAt(0).toUpperCase() + txt.substr(1); */ }
    </div>
      </header >
    </div >
  );
}

export default App;

// 1. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.

// 2. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.

// 3. Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime.

// 4. Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).

// 5. Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai.
