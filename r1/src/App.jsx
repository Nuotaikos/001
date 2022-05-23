import { useState } from 'react';
import './App.scss';

import randColor from './Functions/randColor';

const katinai = ['Mu', 'Du', 'Liu'];

function App() {

  const [kv, setKv] = useState([]);
  const addKv = () => {
    // setKv(k => [...k, 1]); //norint prideti kv reikia zinoti kiek kv buvo pries tai. K - senas masyvas. Darmo naujo kopija => [], idedam visus pries tai buvusius kvadratukus ...k (isardytas senas masyvas) ir irasom vieneta
    setKv(k => [...k, randColor()]);
  }

  return (
    <div className="App">
      <header className="App-header">

        {
          // katinai - tik vienas zodis bet spausdins be tarpu
          // katinai.map(k => <div key={k}>{k}</div>) //taip atspausdins stulpeliu, kad nebutu klaidos reikia ira5yti key={k}
          // katinai.map((k, i) => <div key={i}>{k}</div>) //indeksas visada uniklaus

          <div className='kvc'>
            {
              // kv.map((_, i) => <div className='kv' key={i}></div>) // be spalvu
              kv.map((c, i) => <div className='kv' key={i} style={{ backgroundColor: c }} ></div>) // spalva pavadinta c raide ir pritaikyti stiliui
            }

          </div>

        }
        <button onClick={addKv}>Add</button>
      </header >
    </div >
  );
}
export default App;
