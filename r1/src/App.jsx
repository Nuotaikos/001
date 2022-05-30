import { useState } from 'react';
import './App.scss';
import getId from './Functions/getId';


function App() {

  const [kv, setKv] = useState([]);

  const add = () => {
    setKv(k => [...k, getId('KV')]); // KV kaip atvaizduojama local storage
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={add} className="a">A-DD</button>
        <div className="kvc">
          {
            kv.map((k, i) => <div key={i} className="kv">{k}</div>)
          }
        </div>
      </header>
    </div>
  );


}
export default App;