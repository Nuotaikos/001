

import { useState } from 'react';
import './App.scss';
import Suo from './Components/024/Suo';


function App() {

  const [couter1, setCounter1] = useState(1);





  return (
    <div className="App">
      <header className="App-header">
        <h1>ConText</h1>
        <Suo></Suo>
        <button onClick={() => setCounter1(c => c + 1)}>+1</button>

      </header>
    </div>
  );

}

export default App;