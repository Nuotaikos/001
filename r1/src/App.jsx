import './App.css';
import Hello from './Components/009/Hello';
import Kurmis from './Components/009/kurmis';
import Lape from './Components/009/lape';
import Meska from './Components/009/meska';
import Zebras from './Components/009/zebras';
import Zuikis from './Components/009/zuikis';
import ZuikisTekstas from './Components/009/Zuikis1';
// arba rankiniu budu ivedam: import Hello from './Components/009/Hello'

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const d = rand(1, 2);

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Hello spalva='green' bg='yellow' />
        <Hello spalva='black' bg='white'></Hello>
        <Hello spalva='blue' br='pink'></Hello>
        <Kurmis spalva='grey' skaicius={4} ></Kurmis>
        <Zuikis spalva='pink' tekstas='Kaip gyvas?' />
        <ZuikisTekstas tekstas='baltas' />
        <Zebras checkIfTwo={d} />
        <Lape tekstas1='lape rudoji' tekstas2='lape snape' ></Lape>
        <Meska tekstas3='Miskas' tekstas4='pilnas zveriu' tekstoSpalva='yellow' ></Meska>
      </header>
    </div>
  );
}

export default App;

//privaloma uzdaryti tagus su ></img>
//class -> className yra tas pats (is HTML ir )

// props - funkcijos argmentas