import { useState } from 'react';
import './App.css';
import rand from './Functions/rand';



function App() {
  //1 Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu. 
  const [figura, setFigura] = useState('circle');
  const pakeistiFigura = () => {
    setFigura(old => old === 'circle' ? 'kv' : 'circle');
  };

  //2 Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25
  const [figura1, setFigura1] = useState('circle');
  const [skaicius1, setSkaicius1] = useState(1);
  const pakeistiFigura1 = () => {
    setFigura1(old => old === 'circle' ? 'kv' : 'circle');
  }
  const pakeistiSkaiciu1 = () => {
    setSkaicius1(rand(5, 25));
  };

  //3 Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3
  const [skaicius2, setSkaicius2] = useState(0);

  const pakeistiSkaiciuPlus = () => {
    setSkaicius2(skaicius2 + 1)
  }
  const pakeistiSkaiciuMinus = () => {
    setSkaicius2(skaicius2 - 3)
  }

  //4 Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus du - du kvadratai ir t.t.
  const [melynaFigura, setMelynaFigura] = useState([]);
  const addMelynaFigura = () => {
    setMelynaFigura(kv => [...kv, melynaFigura])
  };

  //5 Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina 
  const [raudonaFigura, setRaudonaFigura] = useState([]);
  const addRaudona = () => {
    setRaudonaFigura(kv => [...kv, raudonaFigura])
  }
  const [melynaFigura1, setMelynaFigura1] = useState([]);
  const addMelyna = () => {
    setMelynaFigura1(kv => [...kv, melynaFigura1])
  }
  const reset = () => {
    setRaudonaFigura(kv => kv.slice(-1, (kv.length - 1)));
    setMelynaFigura1(kv => kv.slice(-1, (kv.length - 1)));
  }
  const mygtukas = () => {
    console.log('grazusis mygtukas');
  }
  const [spalva, setSpalva] = useState('green');

  const keistiSpalva = () => {
    setSpalva(old => old === 'green' ? 'red' : 'green');
    console.log(spalva);
  }
  const [numb, setNumb] = useState(1);
  const skaiciuotuvas = ka => setNumb(s => s + ka);

  const [num2, setNums2] = useState(0)
  const minusuotuvas = () => setNums2(s => s - 1);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className={figura}></div>
          <button onClick={pakeistiFigura}>Change</button>
        </div>
        <div>
          <div className={figura1}>{skaicius1}</div>
          <button onClick={pakeistiFigura1}>Change</button>
          <button onClick={pakeistiSkaiciu1}>Random</button>
        </div>
        <div>
          <h1>{skaicius2}</h1>
          <button onClick={pakeistiSkaiciuPlus}>Plus</button>
          <button onClick={pakeistiSkaiciuMinus}>Minus</button>
        </div>
        <div className='kvc'> {
          melynaFigura.map((melynaFigura, i) => <div className='kv' key={i}></div>)
        }
          <button onClick={addMelynaFigura}>Add</button>
        </div>
        <div className='kvc'> {
          raudonaFigura.map((setRaudonaFigura, i) => <div className='kv' key={i} style={{ backgroundColor: 'red' }}></div>)
        }
          {
            melynaFigura1.map((setMelynaFigura1, i) => <div className='kv' key={i} style={{ backgroundColor: 'blue' }}></div>)
          }
          <button onClick={addRaudona}>Add red</button>
          <button onClick={addMelyna}>Add blue</button>
          <button onClick={reset}>Reset</button>
        </div>
        <div>
          <h1 style={{ color: spalva }}>lalala {numb}</h1>
          <button onClick={() => skaiciuotuvas(1)}>+1</button>
          <button onClick={() => skaiciuotuvas(-1)}>-1</button>
          <h2 style={{ color: spalva }}>bkaljsi {num2}</h2>
          <button onClick={minusuotuvas}>minusuok</button>
          <button onClick={mygtukas}>Spausk</button>
          <button onClick={keistiSpalva}>Kita spalva</button>
        </div>
      </header >
    </div >
  );
}

export default App;

// REACT CLASS STATE



