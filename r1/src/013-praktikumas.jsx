import { useEffect, useRef, useState } from 'react';
import './App.scss';
import rand from './Functions/rand';

const cats = [

  'Mulkis',

  'Kakius',

  'Pilkius',

  'Balčius'

];

const dog = [

  'Sniego',

  'Dingo',

  'Atsirado',

  'Pifas',

  'Bobikas'

];
function App() {

  const [kv, setKv] = useState(null);
  const istorija = useRef([]);
  const [katinai, setkatinai] = useState([]);


  const addCats = () => {
    setkatinai(x => [...x, ...cats]);
  }
  const addDogs = () => {
    setkatinai(dog);
  }
  const remDC = () => {
    setkatinai([]);
  }

  // PIRMAS KROVIMAS
  useEffect(() => {
    setKv(JSON.parse(localStorage.getItem('kv'))); // gali buti null arba []
  }, []);

  // UZSAUGOS POKYCIUS
  useEffect(() => {
    if (null === kv) {
      return;
    }
    localStorage.setItem('kv', JSON.stringify(kv));
  }, [kv]);


  const prideti = () => {
    const kiekis = rand(5, 10);
    const kvadratukai = [];
    for (let i = 0; i < kiekis; i++) {
      kvadratukai.push('>^o^<');
    }
    setKv(k => {
      istorija.current.unshift(null === k ? [...kvadratukai] : [...k, ...kvadratukai])
      return null === k ? [...kvadratukai] : [...k, ...kvadratukai];
    });
  }

  const isvalyti = () => {
    setKv([]);
  }

  const atgal = () => {

    console.log('click')

    if (istorija.current.length === 0) {
      setKv([]);
    }

    const senas = istorija.current.shift();

    setKv(senas);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>PRAKTIMUMAS</h1>
        <div className="kvc">
          {
            kv ? kv.map((k, i) => <div key={i} className="kv">{k}</div>) : null
          }
        </div>

        <button onClick={prideti}>Pridėti</button>
        <button onClick={isvalyti}>Išvalyti</button>
        <button onClick={atgal}>Atgal</button>
        <div className='green-field'>

          {
            katinai.map((c, i) => <div key={i}>{c}></div>)
          }

          <div className='buttons-field'>
            <button onClick={addCats}>Katinu sarasas</button>
            <button onClick={addDogs}>Sunu sarasas</button>
            <button onClick={remDC}>Istrinti</button>

          </div>

        </div>

      </header>
    </div>
  );
}

export default App;


// 1.Sukurti aplikaciją su mygtuku “Pridėti”, kurį paspaudus atsiranda rand 5-10 kvadratukai. Paspaudus dar kartą dar prisideda rand kvadratukų skaičius. Puslapį perkrovus kvadratukų skaičius pasilieka nepakitęs. Padaryti mygtuką “Išvalyti”, kurį paspaudus visi kvadratukai dingsta. Padaryti mygtuką “Atgal”, kurį paspaudus kvadratukų skaičius pasidaro lygus skaičiui, buvusiam prieš paspaudus mygtuką “Pridėti”, o paspaudus dar kartą grįžtama dar vienu žingsniu atgal (t.y. reikia sukurti “undo” funkcionalumą). Puslapiui persikrovus istorija yra užmirštama. Saugoma tik istorija iki puslapiui persikraunant. Į istoriją turi būti pridedami veiksmai tiek iš “Pridėti” tiek iš “Išvalyti” mygtukų paspaudimo.
