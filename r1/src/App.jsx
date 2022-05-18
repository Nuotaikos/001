import './App.css';
import Hello from './Components/009/Hello';
import Kurmis from './Components/009/kurmis';
// arba rankiniu budu ivedam: import Hello from './Components/009/Hello'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello spalva='green' bg='yellow' />
        <Hello spalva='black' bg='white'></Hello>
        <Hello spalva='blue' br='pink'></Hello>
        <Kurmis spalva='grey' skaicius={4} ></Kurmis>
      </header>
    </div>
  );
}

export default App;

//privaloma uzdaryti tagus su ></img>
//class -> className yra tas pats (is HTML ir )

// props - funkcijos argmentas