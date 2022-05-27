import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [avys, setAvys] = useState([]);

  const newA = () => {
    const avis = {
      id: uuidv4(),
      color: randColor(),
      where: 'ganykla'
    }
    setAvys(a => [...a, avis])
  }

  const go = id => {
    setAvys(a => {              //avinas padedamas i gala
      const avis = a.filter(av => av.id === id)[0]; // pasiimam avi, kurios reikia
      avis.where = 'kirpykla'; //nuvaziuoja i kirpykla
      const kitos = a.filter(av => av.id !== id); // kitos avys, bet tos vienos avies
      return [...kitos, avis]; //kitos avys + avis
    });

    // setAvys(a => a.map(avis => avis.id === id ? {...avis, where: 'kirpykla'} : avis)) //avinas padedamas i prieki
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="kvc">
          {
            avys.filter(a => a.where === 'kirpykla').map(a => <div key={a.id} className="kv" style={{ background: a.color }}></div>)
          }
        </div>
        <h1>AVYS</h1>
        <div className="kvc">
          {
            avys.filter(a => a.where === 'ganykla').map(a => <div onClick={() => go(a.id)} key={a.id} className="kv" style={{ background: a.color }}></div>)
          }
        </div>
        <button onClick={newA}>Naujas Avinas</button>
      </header>
    </div>
  );
}

export default App;

