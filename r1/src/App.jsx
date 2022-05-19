import { useState } from 'react';
import './App.css';

const katinukai = ['Pilkis', 'Murkis', 'Rainis'];

function App() {
  const [spalva, setSpalva] = useState('yellow');
  const [skaicius, setSkaicius] = useState(1);
  const [kv, setKv] = useState([]);
  //state reiksme, kitas funkcija

  // const mygtukas = () => {
  //   console.log('As grazus mygtukas');
  //   return mygtukoBrolis;
  // }
  // const mygtukoBrolis = () => {
  //   console.log('As grazus mygtuko brolis');
  //   return
  // }
  const skaiciuotuvas = ka => setSkaicius(s => s + ka);

  const beArgumentu = () => {
    console.log('beArgumentu');
  }
  const suArgumentu = ka => {
    console.log('suArgumentu' + ka);
  }
  const keistiSpalva = () => {
    // const naujaSpalva = spalva === 'yellow' ? 'pink' : 'yellow'; BLOGAI. Galima daryti, tik jei aplikacija maza

    setSpalva(senaSpalva => senaSpalva === 'yellow' ? 'pink' : 'yellow');
    // setSpalva(naujaSpalva);
    //po setSpalvos pakeitimo momentaliai nepasikeicia, gali uztrukti
    // console.log(spalva);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: spalva }}>State {skaicius}</h1>
        {
          katinukai.map((k, i) => <div key={i}>{k}</div>)
        }

        <button onClick={beArgumentu}>Be!</button>
        <button onClick={() => suArgumentu('Labas')}>Su!</button>
        <button onClick={keistiSpalva}>Kita spalva</button>
        <button onClick={() => skaiciuotuvas(1)}>+1</button>
        <button onClick={() => skaiciuotuvas(-1)}>-1</button>
      </header>
    </div>
  );
}

export default App;

//Funkcija () skliausteliu pridejimas is karto paleidzia funkcija
//onClick - paleidineja funkcija.
// onClick virsuje du galimi budai su arba be argumento

//state - komponento viduje.
//hooks - reactas paraso funkcija useeState, o ji padeda susikurti state komponento viduje
//turim const [a, b] ir priskiriame masyva [1,2] a guas 1, b gaus 2.
//  const a=[1,2][0] const b=[1,2][1]
//state negalima keisti, i ji pushint. Daryti kopija i ja sukelti ir tada ja perkelti
//list -